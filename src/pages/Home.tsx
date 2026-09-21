import { useRef } from 'react';
import type { ComponentType, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronDown,
  Clapperboard,
  Code2,
  Megaphone,
  MonitorSmartphone,
  Palette,
  PenTool,
  Sparkles,
  Wrench,
} from 'lucide-react';
import { gsap, useGSAP } from '../lib/gsap';
import Tag from '../components/Tag';
import type { TagColor } from '../components/Tag';

type IconType = ComponentType<{ className?: string; strokeWidth?: number }>;

const categories: {
  to: string;
  label: string;
  desc: string;
  icon: IconType;
  accent: string;
  tagColor: TagColor;
  keywords: string[];
}[] = [
  {
    to: '/audiovisuel',
    label: 'Audiovisuel',
    desc: 'Vidéos, montage, motion design et captation.',
    icon: Clapperboard,
    accent: 'from-rose to-violet',
    tagColor: 'rose',
    keywords: [
      'Montage vidéo',
      'Motion design',
      'Captation',
      'Storytelling & scénario',
      'Sound design',
      'Making-of',
    ],
  },
  {
    to: '/projetsenentreprise',
    label: 'Graphisme',
    desc: 'Supports print, branding et communication visuelle.',
    icon: Palette,
    accent: 'from-rose to-bleu',
    tagColor: 'rose',
    keywords: [
      "Création d'identité visuelle",
      'Modernisation de charte graphique',
      'Création de logos et icônes',
      'Mise en page de supports print',
      'Contenus réseaux sociaux',
    ],
  },
  {
    to: '/webdesign',
    label: 'Webdesign',
    desc: 'Interfaces, prototypage et ergonomie UX/UI.',
    icon: MonitorSmartphone,
    accent: 'from-violet to-bleu',
    tagColor: 'violet',
    keywords: [
      "Création d'interfaces",
      'Prototypage',
      'UX/UI',
      'Ergonomie',
      'Maquettage',
      'Design system',
    ],
  },
  {
    to: '/informatique',
    label: 'Informatique',
    desc: 'Sites web, applications et développement.',
    icon: Code2,
    accent: 'from-bleu to-rose',
    tagColor: 'bleu',
    keywords: [
      'Création de sites web',
      'Développement front-end',
      'Intégration WordPress / CMS',
      'HTML / CSS / JavaScript',
      'Applications web',
      'SEO',
    ],
  },
  {
    to: '/dessin',
    label: 'Dessin',
    desc: 'Illustrations traditionnelles et digitales.',
    icon: PenTool,
    accent: 'from-violet to-rose',
    tagColor: 'violet',
    keywords: [
      'Illustration',
      'Digital painting',
      'Dessin traditionnel',
      'Portraits',
      'Personnages',
      'Croquis',
    ],
  },
];

type OrbitItem = {
  label: string;
  text: string;
  color: string;
  mobile?: boolean;
};

const orbitInnerItems: OrbitItem[] = [
  { label: 'Photoshop', text: 'Ps', color: '#1E7FC4', mobile: true },
  { label: 'Illustrator', text: 'Ai', color: '#D97A00', mobile: true },
  { label: 'InDesign', text: 'Id', color: '#FF3366' },
  { label: 'Premiere Pro', text: 'Pr', color: '#9A6BFF', mobile: true },
  { label: 'After Effects', text: 'Ae', color: '#5C4FE0', mobile: true },
  { label: 'Figma', text: 'Fi', color: '#0ACF83', mobile: true },
  { label: 'Canva', text: 'Ca', color: '#00C4CC' },
  { label: 'Procreate', text: 'Pc', color: '#F56A00', mobile: true },
];

const orbitOuterItems: OrbitItem[] = [
  { label: 'HTML', text: 'HTML', color: '#E34F26', mobile: true },
  { label: 'CSS', text: 'CSS', color: '#1572B6', mobile: true },
  { label: 'JavaScript', text: 'Js', color: '#F7DF1E', mobile: true },
  { label: 'TypeScript', text: 'Ts', color: '#3178C6', mobile: true },
  { label: 'React', text: 'Re', color: '#0E7C99', mobile: true },
  { label: 'Tailwind', text: 'TW', color: '#0891A6', mobile: true },
  { label: 'PHP', text: 'PHP', color: '#777BB4', mobile: true },
  { label: 'WordPress', text: 'Wp', color: '#21759B', mobile: true },
  { label: 'Google Analytics', text: 'GA4', color: '#F9AB00', mobile: true },
  { label: 'Google Ads', text: 'Ads', color: '#4285F4', mobile: true },
  { label: 'Meta Business', text: 'Mb', color: '#1877F2', mobile: true },
  { label: 'Notion', text: 'No', color: '#B2B6DA', mobile: true },
];

const ORBIT_RATIO = 0.6;

const buildOrbitAngles = (count: number) => {
  const steps = 2000;
  const dt = (Math.PI * 2) / steps;
  const cum = new Array<number>(steps + 1);
  cum[0] = 0;
  for (let k = 0; k < steps; k++) {
    const t = k * dt;
    cum[k + 1] = cum[k] + Math.hypot(Math.cos(t), ORBIT_RATIO * Math.sin(t)) * dt;
  }
  const total = cum[steps];
  const angles: number[] = [];
  for (let i = 0; i < count; i++) {
    const target = (i / count) * total;
    let lo = 0;
    let hi = steps;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (cum[mid] < target) lo = mid + 1;
      else hi = mid;
    }
    angles.push((lo / steps) * Math.PI * 2);
  }
  return angles;
};

const orbitInnerAngles = buildOrbitAngles(orbitInnerItems.length);
const orbitOuterAngles = buildOrbitAngles(orbitOuterItems.length);

const skillGroups: { title: string; color: TagColor; icon: IconType; skills: string[] }[] = [
  {
    title: 'Design & création',
    color: 'rose',
    icon: Palette,
    skills: [
      'Illustration',
      'Graphisme',
      'Branding',
      'Motion design',
      'UX/UI',
      'Prototypage',
      'Storyboarding',
      'Photographie',
    ],
  },
  {
    title: 'Audiovisuel',
    color: 'violet',
    icon: Clapperboard,
    skills: [
      'Montage vidéo',
      'Captation',
      'Sound design',
      'Découpage technique',
      'Écriture & scénario',
      "Jeu d'acteur",
      'Lumières',
      'Motion design',
    ],
  },
  {
    title: 'Outils & logiciels',
    color: 'bleu',
    icon: Wrench,
    skills: [
      'Illustrator',
      'Photoshop',
      'Premiere Pro',
      'After Effects',
      'InDesign',
      'Figma',
      'Procreate',
      'Audacity',
    ],
  },
  {
    title: 'Web & développement',
    color: 'violet',
    icon: Code2,
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Tailwind CSS',
      'PHP',
      'Wordpress',
      'JavaFX',
    ],
  },
  {
    title: 'Communication',
    color: 'rose',
    icon: Megaphone,
    skills: [
      'Communication',
      'Réseaux sociaux',
      'Événementiel',
      'Gestion de projet',
      'Méthode agile SCRUM',
      'Rédaction',
      'Product owner',
    ],
  },
];

export default function Home() {
  const scope = useRef<HTMLDivElement>(null);
  const heroSection = useRef<HTMLElement>(null);
  const avatarWrap = useRef<HTMLDivElement>(null);
  const halo = useRef<HTMLDivElement>(null);
  const heroText = useRef<HTMLDivElement>(null);
  const scrollIndicator = useRef<HTMLDivElement>(null);
  const categoriesSection = useRef<HTMLElement>(null);
  const orbitSection = useRef<HTMLElement>(null);
  const orbitScene = useRef<HTMLDivElement>(null);
  const skillsSection = useRef<HTMLElement>(null);
  const skillsTrack = useRef<HTMLDivElement>(null);
  const finalSection = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      const orbitNode = orbitScene.current;
      const orbitInnerCards: HTMLElement[] = orbitNode
        ? gsap.utils.toArray<HTMLElement>('.orbit-ring-inner .orbit-card', orbitNode)
        : [];
      const orbitOuterCards: HTMLElement[] = orbitNode
        ? gsap.utils.toArray<HTMLElement>('.orbit-ring-outer .orbit-card', orbitNode)
        : [];
      let orbitState: { angle: number } | null = null;
      let orbitApply: (() => void) | null = null;
      let onOrbitResize: (() => void) | null = null;

      if (orbitNode && (orbitInnerCards.length || orbitOuterCards.length)) {
        orbitState = { angle: 0 };
        let rxi = 0;
        let ryi = 0;
        let rxo = 0;
        let ryo = 0;

        const measure = () => {
          const w = orbitNode.offsetWidth;
          const maxRx = window.innerWidth / 2 - 90;
          rxo = Math.min(w * 0.46, maxRx);
          ryo = rxo * ORBIT_RATIO;
          rxi = rxo * 0.55;
          ryi = rxi * ORBIT_RATIO;
        };

        const place = (card: HTMLElement, angle: number, rx: number, ry: number) => {
          const x = rx * Math.sin(angle);
          const y = ry * Math.cos(angle);
          card.style.transform = `translate(-50%, -50%) translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`;
        };

        orbitApply = () => {
          const a = orbitState ? orbitState.angle : 0;
          orbitInnerCards.forEach((card, i) => place(card, orbitInnerAngles[i] + a, rxi, ryi));
          orbitOuterCards.forEach((card, i) => place(card, orbitOuterAngles[i] - a, rxo, ryo));
        };

        measure();
        orbitApply();

        onOrbitResize = () => {
          measure();
          if (orbitApply) orbitApply();
        };
        window.addEventListener('resize', onOrbitResize);
      }

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const words = gsap.utils.toArray<HTMLElement>('.hero-word', scope.current);

        const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
        intro
          .fromTo(
            avatarWrap.current,
            { opacity: 0, scale: 0.7, y: 24 },
            { opacity: 1, scale: 1, y: 0, duration: 0.8 },
          )
          .fromTo(
            '.hero-eyebrow',
            { opacity: 0, y: 14 },
            { opacity: 1, y: 0, duration: 0.5 },
            '-=0.4',
          )
          .fromTo(
            words,
            { opacity: 0, y: 34 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.09 },
            '-=0.3',
          )
          .fromTo(
            '.hero-subtitle',
            { opacity: 0, y: 18 },
            { opacity: 1, y: 0, duration: 0.5 },
            '-=0.4',
          )
          .fromTo(
            '.hero-intro',
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.5 },
            '-=0.3',
          )
          .fromTo(
            '.hero-cta',
            { opacity: 0, y: 14 },
            { opacity: 1, y: 0, duration: 0.5 },
            '-=0.3',
          )
          .fromTo(
            scrollIndicator.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.6 },
            '-=0.2',
          );

        gsap.to('.float-el', {
          y: -10,
          duration: 2.4,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        });

        gsap.to('.scroll-chevron', {
          y: 6,
          duration: 1.2,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        });

        const heroScroll = gsap.timeline({
          scrollTrigger: {
            trigger: heroSection.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
        heroScroll
          .to(heroText.current, { opacity: 0, y: -90, scale: 0.92, ease: 'none' }, 0)
          .to(avatarWrap.current, { opacity: 0, y: -50, scale: 0.9, ease: 'none' }, 0)
          .to(scrollIndicator.current, { opacity: 0, ease: 'none' }, 0);

        gsap.to(halo.current, {
          y: 140,
          ease: 'none',
          scrollTrigger: {
            trigger: heroSection.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });

        gsap.utils.toArray<HTMLElement>('.hero-blob', scope.current).forEach((blob, i) => {
          gsap.to(blob, {
            y: 120 + i * 40,
            ease: 'none',
            scrollTrigger: {
              trigger: heroSection.current,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          });
        });

        gsap.fromTo(
          '.categories-eyebrow, .categories-title',
          { opacity: 0, y: 26 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: categoriesSection.current, start: 'top 78%', once: true },
          },
        );

        gsap.fromTo(
          gsap.utils.toArray<HTMLElement>('.category-card', scope.current),
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: '.category-grid', start: 'top 80%', once: true },
          },
        );

        gsap.fromTo(
          '.final-title, .final-cta',
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: { trigger: finalSection.current, start: 'top 75%', once: true },
          },
        );

        if (orbitState && orbitApply) {
          gsap.to(orbitState, {
            angle: Math.PI * 2,
            duration: 20,
            ease: 'none',
            repeat: -1,
            onUpdate: orbitApply,
          });
        }

        gsap.fromTo(
          '.orbit-eyebrow, .orbit-title',
          { opacity: 0, y: 26 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: orbitSection.current, start: 'top 78%', once: true },
          },
        );

        gsap.fromTo(
          '.orbit-scene',
          { opacity: 0, scale: 0.88 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: orbitSection.current, start: 'top 72%', once: true },
          },
        );
      });

      mm.add('(prefers-reduced-motion: no-preference) and (min-width: 1024px)', () => {
        const track = skillsTrack.current;
        const section = skillsSection.current;
        if (!track || !section) return;

        const getDistance = () => track.scrollWidth - window.innerWidth;

        gsap.to(track, {
          x: () => -getDistance(),
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${getDistance()}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        gsap.fromTo(
          '.skills-eyebrow, .skills-title',
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: section, start: 'top 70%', once: true },
          },
        );
      });

      mm.add('(prefers-reduced-motion: no-preference) and (max-width: 1023.98px)', () => {
        gsap.fromTo(
          '.skills-eyebrow, .skills-title',
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: skillsSection.current, start: 'top 78%', once: true },
          },
        );

        gsap.fromTo(
          gsap.utils.toArray<HTMLElement>('.skill-card', scope.current),
          { opacity: 0, y: 34 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: { trigger: skillsSection.current, start: 'top 80%', once: true },
          },
        );
      });

      return () => {
        mm.revert();
        if (onOrbitResize) window.removeEventListener('resize', onOrbitResize);
      };
    },
    { scope },
  );

  const scrollTo = (id: string) => (e: MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const renderOrbitCard = (item: OrbitItem) => {
    const display = item.mobile ? 'flex' : 'hidden sm:flex';

    return (
      <div
        key={item.label}
        title={item.label}
        className={`orbit-card absolute left-1/2 top-1/2 items-center gap-2.5 rounded-xl border-2 border-card-border bg-[#262538]/90 px-3 py-2 backdrop-blur-sm will-change-transform ${display}`}
      >
        <span
          className="flex h-7 min-w-7 shrink-0 items-center justify-center rounded-lg px-1 text-[10px] font-extrabold"
          style={{ color: item.color, backgroundColor: `${item.color}1f` }}
        >
          {item.text}
        </span>
        <span className="hidden whitespace-nowrap text-[12px] font-bold text-white lg:inline lg:text-[13px]">
          {item.label}
        </span>
      </div>
    );
  };

  return (
    <div ref={scope} className="overflow-x-clip">
      {/* HERO */}
      <section
        ref={heroSection}
        className="relative flex min-h-[calc(100vh-64px)] items-center justify-center overflow-hidden"
      >
        <div className="hero-blob absolute -top-24 -left-24 h-72 w-72 rounded-full bg-rose/30 blur-[120px]" />
        <div className="hero-blob absolute top-1/3 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-violet/25 blur-[120px]" />
        <div className="hero-blob absolute -right-20 -bottom-28 h-80 w-80 rounded-full bg-bleu/30 blur-[120px]" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-[#1b1b2b]" />

        <div className="relative z-10 flex flex-col items-center px-6 text-center">
          <div ref={avatarWrap} className="relative mb-8">
            <div
              ref={halo}
              className="absolute inset-0 -z-10 scale-150 rounded-full bg-linear-to-r from-rose via-violet to-bleu opacity-40 blur-2xl"
            />
            <img
              className="float-el h-36 w-36 rounded-full object-cover md:h-44 md:w-44"
              src="/optimized/ressources/presentation/photo-cv5.webp"
              alt="Nancy"
            />
          </div>

          <div ref={heroText} className="flex flex-col items-center">
            <span className="hero-eyebrow inline-flex items-center gap-2 rounded-full border-2 border-card-border bg-card-background px-4 py-1.5 text-[13px] text-normal/90">
              <Sparkles className="h-3.5 w-3.5 text-violet" strokeWidth={2.5} />
              Bienvenue sur mon portfolio
            </span>

            <h1 className="mt-5 font-bold text-[38px] leading-[1.05] md:text-[68px]">
              <span className="hero-word inline-block">Moi,</span>{' '}
              <span className="hero-word inline-block">c'est</span>{' '}
              <span className="hero-word inline-block bg-linear-to-r from-rose via-violet to-bleu bg-clip-text text-transparent">
                Nancy
              </span>
            </h1>

            <p className="hero-subtitle mt-4 font-bold text-[19.5px]">
              Passionnée de création et de communication.
            </p>

            <p className="hero-intro mt-5 max-w-xl text-justify text-normal/70 [text-align-last:center] lg:text-[18px]">
              Bienvenue ! Parcourez le portfolio pour découvrir la variété dans mes réalisations ( :
            </p>

            <div className="hero-cta mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/audiovisuel"
                className="group flex items-center gap-2 rounded-lg bg-linear-to-r from-bleu to-violet px-5 py-2 font-bold text-white shadow-md shadow-black/30 transition-all hover:opacity-80 hover:scale-[1.02] active:scale-95"
              >
                Commencer la visite
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.8} />
              </Link>
              <button
                onClick={scrollTo('competences')}
                className="flex items-center gap-2 rounded-lg border-2 border-card-border bg-card-background px-5 py-2 font-bold text-normal transition-all hover:text-white hover:border-normal/30 active:scale-95"
              >
                Me découvrir
                <ChevronDown className="h-4 w-4" strokeWidth={2.6} />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={scrollIndicator}
          onClick={scrollTo('competences')}
          className="absolute bottom-7 left-1/2 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-1 text-normal/60 transition-colors hover:text-white"
        >
          <span className="text-[12px] tracking-wide">Défiler</span>
          <ChevronDown className="scroll-chevron h-5 w-5" strokeWidth={2.4} />
        </div>
      </section>

      {/* SKILLS */}
      <section ref={skillsSection} id="competences" className="relative overflow-hidden">
        <div className="flex flex-col justify-center gap-10 py-16 lg:h-screen lg:gap-12 lg:py-0">
          <div className="flex flex-col items-center px-6 text-center">
            <span className="skills-eyebrow inline-flex items-center gap-2 rounded-full border-2 border-card-border bg-card-background px-4 py-1.5 text-[13px] text-normal/90">
              <Sparkles className="h-3.5 w-3.5 text-violet" strokeWidth={2.5} />
              Compétences
            </span>
            <h2 className="skills-title mt-4 font-bold text-[30px] text-white md:text-[40px]">
              Ce que je sais faire
            </h2>
          </div>

          <div
            ref={skillsTrack}
            className="flex flex-col gap-6 px-6 md:px-[8vw] lg:w-max lg:flex-row lg:flex-nowrap lg:gap-8"
          >
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <div
                  key={group.title}
                  className="skill-card flex w-full shrink-0 flex-col gap-6 rounded-[15px] border-2 border-card-border bg-card-background p-8 lg:w-[460px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-black/10 text-white">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                    <h3 className="font-bold text-[20px] text-white">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Tag key={skill} color={group.color}>
                        {skill}
                      </Tag>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section ref={categoriesSection} className="relative px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <span className="categories-eyebrow inline-flex items-center gap-2 rounded-full border-2 border-card-border bg-card-background px-4 py-1.5 text-[13px] text-normal/90">
              <Sparkles className="h-3.5 w-3.5 text-bleu" strokeWidth={2.5} />
              Mes univers
            </span>
            <h2 className="categories-title mt-4 font-bold text-[30px] text-white md:text-[40px]">
              Explorez mes réalisations
            </h2>
          </div>

          <div className="category-grid mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.to}
                  to={cat.to}
                  className="category-card group relative flex flex-col gap-5 overflow-hidden rounded-[15px] border-2 border-card-border bg-card-background p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-normal/25 hover:shadow-xl hover:shadow-black/20"
                >
                  <div
                    className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-linear-to-br ${cat.accent} opacity-20 blur-2xl transition-opacity duration-300 group-hover:opacity-40`}
                  />
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black/10 text-white">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-bold text-[22px] text-white">{cat.label}</h3>
                    <p className="text-normal/70">{cat.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.keywords.map((keyword) => (
                      <Tag key={keyword} color={cat.tagColor}>
                        {keyword}
                      </Tag>
                    ))}
                  </div>
                  <span className="mt-auto flex items-center gap-1.5 font-bold text-normal/80 transition-colors group-hover:text-white">
                    Découvrir
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.6} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ORBIT */}
      <section ref={orbitSection} className="relative overflow-hidden px-6 py-24 md:py-32">
        <div className="mx-auto flex max-w-6xl flex-col items-center">
          <div className="flex flex-col items-center text-center">
            <span className="orbit-eyebrow inline-flex items-center gap-2 rounded-full border-2 border-card-border bg-card-background px-4 py-1.5 text-[13px] text-normal/90">
              <Sparkles className="h-3.5 w-3.5 text-rose" strokeWidth={2.5} />
              En orbite
            </span>
            <h2 className="orbit-title mt-4 font-bold text-[30px] text-white md:text-[40px]">
              Tout tourne autour de la création
            </h2>
          </div>

          <div
            ref={orbitScene}
            className="orbit-scene relative mt-14 aspect-[16/10] w-[340px] sm:w-[520px] md:w-[700px] lg:w-[920px] xl:w-[1040px]"
          >
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-rose via-violet to-bleu opacity-20 blur-[70px]" />

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[88%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-card-border/20" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[48.5%] w-[50.5%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-card-border/20" />

            <div className="pointer-events-none absolute inset-0 z-50 flex flex-col items-center justify-center px-4 text-center">
              <p className="bg-linear-to-r from-rose via-violet to-bleu bg-clip-text text-[26px] font-bold text-transparent sm:text-[32px] md:text-[40px]">
                Créativité
              </p>
              <p className="mt-2 max-w-[220px] text-[13px] text-normal/70 md:text-[14px]">
                Le fil rouge de tous mes projets.
              </p>
            </div>

            <div className="orbit-ring-inner absolute inset-0 hidden sm:block">
              {orbitInnerItems.map(renderOrbitCard)}
            </div>
            <div className="orbit-ring-outer absolute inset-0">
              {orbitOuterItems.map(renderOrbitCard)}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section ref={finalSection} className="relative overflow-hidden px-6 py-24 md:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-rose via-violet to-bleu opacity-15 blur-[100px]" />
        <div className="relative flex flex-col items-center text-center">
          <h2 className="final-title font-bold text-[30px] text-white md:text-[44px]">
            Envie de voir la suite ?
          </h2>
          <p className="final-title mt-3 max-w-md text-normal/70">
            Plongez dans mes projets, du crayon à l'écran.
          </p>
          <div className="final-cta mt-8">
            <Link
              to="/audiovisuel"
              className="group flex items-center gap-2 rounded-lg bg-linear-to-r from-bleu to-violet px-6 py-2.5 font-bold text-white shadow-md shadow-black/30 transition-all hover:opacity-80 hover:scale-[1.02] active:scale-95"
            >
              C'est parti
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.8} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
