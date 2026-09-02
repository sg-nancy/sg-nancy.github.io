import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { basename, join, relative } from 'node:path'

const MAX_DIMENSION = 2048
const WEBP_QUALITY = 100
const CONCURRENCY = 4

const ROOT = join(import.meta.dir, '..')
const SOURCE_ROOT = join(ROOT, 'raw', 'ressources')
const OUTPUT_ROOT = join(ROOT, 'public', 'optimized', 'ressources')
const PUBLIC_ROOT = join(ROOT, 'public', 'ressources')
const CONFIG_PATH = join(ROOT, 'images.config.json')
const MANIFEST_PATH = join(ROOT, 'public', 'optimized', '.images-manifest.json')

const CONVERT_EXTENSIONS = ['.png', '.jpg', '.jpeg']
const COPY_EXTENSIONS = ['.webp']
const EXTENSIONS = [...CONVERT_EXTENSIONS, ...COPY_EXTENSIONS]

type Kind = 'converted' | 'copied'

interface Entry {
  input: string
  kind: Kind
  before: number
  after: number
}

interface ImageFile {
  path: string
  rel: string
  name: string
  ext: string
  excluded?: boolean
}

function extOf(file: string): string {
  const dot = file.lastIndexOf('.')
  if (dot === -1) return ''
  return file.slice(dot).toLowerCase()
}

function globToRegex(glob: string): RegExp {
  let pattern = ''
  for (let i = 0; i < glob.length; i++) {
    const c = glob[i]
    if (c === '*') {
      if (glob[i + 1] === '*') {
        pattern += '.*'
        i++
        if (glob[i + 1] === '/') i++
      } else {
        pattern += '[^/]*'
      }
    } else if (c === '?') {
      pattern += '[^/]'
    } else {
      pattern += c.replace(/[.+^${}()|[\]\\]/g, '\\$&')
    }
  }
  return new RegExp(`^${pattern}$`, 'i')
}

function loadExclusions(): RegExp[] {
  if (!existsSync(CONFIG_PATH)) return []
  const raw = JSON.parse(readFileSync(CONFIG_PATH, 'utf-8')) as { exclude?: unknown }
  const list = Array.isArray(raw?.exclude) ? (raw.exclude as string[]) : []
  return list
    .map((g) => g.replace(/\\/g, '/').replace(/^\.?\//, ''))
    .map(globToRegex)
}

function isExcluded(rel: string, patterns: RegExp[]): boolean {
  return patterns.some((p) => p.test(rel))
}

function collectImages(root: string): ImageFile[] {
  if (!existsSync(root)) return []
  return readdirSync(root, { recursive: true })
    .filter((file): file is string => typeof file === 'string')
    .map((file) => {
      const path = join(root, file)
      return { path, rel: file.replace(/\\/g, '/'), name: basename(file), ext: extOf(file) }
    })
    .filter((file) => EXTENSIONS.includes(file.ext))
}

function outputPath(file: ImageFile, kind: Kind): string {
  if (kind === 'copied') return join(OUTPUT_ROOT, file.rel)
  const withoutExt = file.rel.slice(0, file.rel.length - file.ext.length)
  return join(OUTPUT_ROOT, `${withoutExt}.webp`)
}

function isStale(input: string, output: string): boolean {
  if (!existsSync(output)) return true
  return statSync(input).mtimeMs > statSync(output).mtimeMs
}

function settingsChanged(): boolean {
  if (!existsSync(MANIFEST_PATH)) return true
  try {
    const prev = JSON.parse(readFileSync(MANIFEST_PATH, 'utf-8')) as { quality?: number; maxDimension?: number }
    return prev.quality !== WEBP_QUALITY || prev.maxDimension !== MAX_DIMENSION
  } catch {
    return true
  }
}

function classify(
  file: ImageFile,
  patterns: RegExp[],
  mixedBasenames: Set<string>,
): Kind {
  if (file.excluded) return 'copied'
  if (CONVERT_EXTENSIONS.includes(file.ext) && !mixedBasenames.has(file.name)) return 'converted'
  return 'copied'
}

async function processFile(file: ImageFile, kind: Kind): Promise<Entry> {
  const before = statSync(file.path).size
  const output = outputPath(file, kind)

  if (kind === 'copied') {
    mkdirSync(join(output, '..'), { recursive: true })
    copyFileSync(file.path, output)
    return { input: file.path, kind, before, after: before }
  }

  const buffer = readFileSync(file.path)
  const { width, height } = await new Bun.Image(buffer).metadata()

  let image = new Bun.Image(buffer)
  if (width > MAX_DIMENSION || height > MAX_DIMENSION) {
    image = image.resize(MAX_DIMENSION, MAX_DIMENSION, {
      fit: 'inside',
      withoutEnlargement: true,
    })
  }

  const bytes = await image.webp({ quality: WEBP_QUALITY }).bytes()
  mkdirSync(join(output, '..'), { recursive: true })
  writeFileSync(output, bytes)

  return { input: file.path, kind, before, after: bytes.length }
}

function collectOutputs(): string[] {
  if (!existsSync(OUTPUT_ROOT)) return []
  return readdirSync(OUTPUT_ROOT, { recursive: true })
    .filter((file): file is string => typeof file === 'string')
    .map((file) => join(OUTPUT_ROOT, file))
    .filter((file) => statSync(file).isFile())
}

function removeOrphans(expected: Set<string>): number {
  const orphans = collectOutputs().filter((output) => !expected.has(output))
  for (const orphan of orphans) rmSync(orphan)
  return orphans.length
}

async function runPool<T>(
  items: T[],
  worker: (item: T) => Promise<Entry>,
): Promise<Entry[]> {
  const results: Entry[] = []
  let index = 0

  async function next(): Promise<void> {
    while (index < items.length) {
      const current = items[index++]
      results.push(await worker(current))
    }
  }

  const workers = Array.from({ length: Math.min(CONCURRENCY, items.length) }, next)
  await Promise.all(workers)
  return results
}

function encodeRel(rel: string): string {
  return rel.split('/').map((segment) => encodeURI(segment)).join('/')
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function collectNonImageFiles(root: string): string[] {
  if (!existsSync(root)) return []
  return readdirSync(root, { recursive: true })
    .filter((file): file is string => typeof file === 'string')
    .filter((file) => {
      const rel = file.replace(/\\/g, '/')
      if (basename(rel).startsWith('.')) return false
      if (EXTENSIONS.includes(extOf(rel))) return false
      return statSync(join(root, file)).isFile()
    })
    .map((file) => file.replace(/\\/g, '/'))
}

function rewriteReferences(
  convertedNames: Map<string, string>,
  iconConverted: boolean,
  nonImageUrls: string[],
): string[] {
  const files = ['index.html', ...collectSourceFiles()]
  const warnings: string[] = []

  let changedCount = 0

  for (const file of files) {
    const absolute = join(ROOT, file)
    if (!existsSync(absolute)) continue

    let content = readFileSync(absolute, 'utf-8')
    const original = content

    const protectedUrls = nonImageUrls
      .map((url, i) => ({ url, sentinel: `__IMG_OPT_NI_${i}__` }))
      .filter(({ url }) => content.includes(url))

    for (const { url, sentinel } of protectedUrls) {
      content = content.split(url).join(sentinel)
    }

    content = content.replace(/(?<!\/optimized)\/ressources\//g, '/optimized/ressources/')

    for (const [name, target] of convertedNames) {
      const re = new RegExp(`(?<![A-Za-z0-9])${escapeRegex(name)}(?![A-Za-z0-9])`, 'g')
      content = content.replace(re, target)
    }

    if (iconConverted) {
      content = content.replace(/type="image\/x-icon"/g, 'type="image/webp"')
    }

    for (const { url, sentinel } of protectedUrls) {
      content = content.split(sentinel).join(url)
    }

    if (content !== original) {
      writeFileSync(absolute, content)
      changedCount++
    }
  }

  warnings.push(`${changedCount} fichier(s) source mis à jour.`)
  return warnings
}

function collectSourceFiles(): string[] {
  const srcRoot = join(ROOT, 'src')
  if (!existsSync(srcRoot)) return []
  return readdirSync(srcRoot, { recursive: true })
    .filter((file): file is string => typeof file === 'string')
    .filter((file) => file.endsWith('.tsx'))
    .map((file) => `src/${file}`)
}

function formatBytes(bytes: number): string {
  return `${(bytes / 1024).toFixed(0)} Ko`
}

async function main() {
  const patterns = loadExclusions()
  const images = collectImages(SOURCE_ROOT).map((file) => ({
    ...file,
    excluded: isExcluded(file.rel, patterns),
  }))

  if (images.length === 0) {
    console.log('Aucune image trouvée.')
    return
  }

  const byName = new Map<string, ImageFile[]>()
  for (const file of images) {
    const list = byName.get(file.name) ?? []
    list.push(file)
    byName.set(file.name, list)
  }

  const mixedBasenames = new Set<string>()
  const convertedNames = new Map<string, string>()
  for (const [name, list] of byName) {
    const hasExcluded = list.some((f) => f.excluded)
    const hasOptimized = list.some((f) => !f.excluded && CONVERT_EXTENSIONS.includes(f.ext))
    if (hasExcluded && hasOptimized) {
      mixedBasenames.add(name)
      continue
    }
    if (hasOptimized && !hasExcluded) {
      convertedNames.set(name, name.replace(/\.[^.]+$/, '.webp'))
    }
  }

  const withKind = images.map((file) => ({
    file,
    kind: classify(file, patterns, mixedBasenames),
  }))

  const forceReencode = settingsChanged()

  const toProcess = withKind.filter(({ file, kind }) =>
    (kind === 'converted' && forceReencode) || isStale(file.path, outputPath(file, kind)),
  )
  const skipped = withKind.length - toProcess.length

  if (skipped > 0) {
    console.log(`${skipped}/${withKind.length} images déjà à jour, ignorées.`)
  }

  const results = await runPool(toProcess, ({ file, kind }) => processFile(file, kind))

  writeFileSync(
    MANIFEST_PATH,
    JSON.stringify({ quality: WEBP_QUALITY, maxDimension: MAX_DIMENSION }, null, 2),
  )

  const expected = new Set(withKind.map(({ file, kind }) => outputPath(file, kind)))
  const removed = removeOrphans(expected)
  if (removed > 0) {
    console.log(`${removed} fichier(s) orphelin(s) supprimé(s).`)
  }

  const iconConverted = images.some((f) => f.rel === 'icon.png' && !f.excluded && convertedNames.has('icon.png'))
  const nonImageUrls = collectNonImageFiles(PUBLIC_ROOT).map((rel) => '/ressources/' + encodeRel(rel))
  const warnings = rewriteReferences(convertedNames, iconConverted, nonImageUrls)

  const converted = results.filter((r) => r.kind === 'converted').sort((a, b) => a.input.localeCompare(b.input))
  const copied = results.filter((r) => r.kind === 'copied')

  if (converted.length > 0) {
    console.log('Image'.padEnd(60), 'Avant'.padStart(9), 'Après'.padStart(9), 'Gain'.padStart(8))
    console.log('-'.repeat(90))
    for (const r of converted) {
      const ratio = r.before > 0 ? Math.round((1 - r.after / r.before) * 100) : 0
      console.log(
        r.input.padEnd(60),
        formatBytes(r.before).padStart(9),
        formatBytes(r.after).padStart(9),
        `${ratio}%`.padStart(8),
      )
    }
    console.log('-'.repeat(90))
    const totalBefore = converted.reduce((s, r) => s + r.before, 0)
    const totalAfter = converted.reduce((s, r) => s + r.after, 0)
    const totalRatio = totalBefore > 0 ? Math.round((1 - totalAfter / totalBefore) * 100) : 0
    console.log(
      `${converted.length} image(s) traitée(s)`.padEnd(60),
      formatBytes(totalBefore).padStart(9),
      formatBytes(totalAfter).padStart(9),
      `${totalRatio}%`.padStart(8),
    )
  }

  if (copied.length > 0) {
    const total = copied.reduce((s, r) => s + r.after, 0)
    console.log(`${copied.length} image(s) copiée(s) sans optimisation (exclues / qualité originale): ${formatBytes(total)}`)
  }

  if (mixedBasenames.size > 0) {
    console.log('\nAttention : ces noms de fichiers sont partagés entre des images exclues et optimisées.')
    console.log('Ils ont été laissés en qualité originale pour éviter de casser des références :')
    for (const name of [...mixedBasenames].sort()) {
      console.log(`  - ${name}`)
    }
  }

  for (const warning of warnings) {
    console.log(warning)
  }
}

await main()
