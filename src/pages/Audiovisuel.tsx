import Card from '../components/Card';
import type { LightboxItem } from '../components/Lightbox';
import LinkButton from '../components/LinkButton';
import MediaImage from '../components/MediaImage';
import PageIntro from '../components/PageIntro';
import ReadMore from '../components/ReadMore';
import Tag from '../components/Tag';
import VideoPlayer from '../components/VideoPlayer';

const cantineMedia: LightboxItem[] = [
  { type: 'image', src: '/optimized/ressources/evenementiel/d0.webp' },
  { type: 'youtube', src: 'z_pQs2EDsbo' },
  { type: 'image', src: '/optimized/ressources/audiovisuel/macantine/final3.webp' },
];

const courseMedia: LightboxItem[] = [
  { type: 'youtube', src: 'INx2e5ajWwo' },
  { type: 'image', src: '/optimized/ressources/audiovisuel/auboutdelacourse/logos3.webp' },
];

const brollMedia: LightboxItem[] = [
  { type: 'image', src: '/optimized/ressources/audiovisuel/b%20roll/storyboard.webp' },
  { type: 'youtube', src: '0EkuIJ_21bA' },
];

const processusMedia: LightboxItem[] = [
  { src: '/optimized/ressources/audiovisuel/reve/storyboard-1.webp' },
  { src: '/optimized/ressources/audiovisuel/reve/tournage.webp' },
  { src: '/optimized/ressources/audiovisuel/reve/st.webp' },
];

export default function Audiovisuel() {
  return (
    <div className="flex flex-col items-center m-6 md:my-11">
      <div className="flex flex-col lg:w-[880px] md:w-[720px] gap-8">
        <PageIntro title="Mes projets audiovisuels">
          <p>
            Du crayon jusqu'à l'ordinateur, je conçois, je filme, je produis, je monte et j'anime ce
            qui de base, n'existe pas encore dans le monde réel, mais bien dans ma tête.
            <br />
            <br />
            J'aime créer tout type de vidéo et pour n'importe quel projet (:
          </p>
        </PageIntro>

        <div className="grid grid-cols-1 gap-8">
          {/* CANTINE */}
          <Card>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col">
                <p className="font-bold text-[25px]">
                  Campagne de communication pour Ma Cantine Autrement
                </p>
                <p className="text-normal/90">Ville de Montpellier</p>
              </div>
              <div className="flex flex-col gap-[5px]">
                <div className="flex gap-1 flex-wrap">
                  <Tag color="rose">Adobe Illustrator</Tag>
                  <Tag color="rose">Adobe Premiere Pro</Tag>
                  <Tag color="rose">Adobe Photoshop</Tag>
                  <Tag color="rose">Procreate</Tag>
                </div>
                <div className="flex gap-1 flex-wrap">
                  <Tag color="violet">Illustration</Tag>
                  <Tag color="violet">Montage vidéo</Tag>
                  <Tag color="violet">Storytelling et script</Tag>
                  <Tag color="violet">Découpage technique</Tag>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
              <MediaImage className="rounded-[10px] w-full" src="/optimized/ressources/evenementiel/d0.webp" items={cantineMedia} index={0} />
              <VideoPlayer youtubeId="z_pQs2EDsbo" />
            </div>

            <MediaImage className="rounded-[10px] w-full" src="/optimized/ressources/audiovisuel/macantine/final3.webp" items={cantineMedia} index={2} />
          </Card>

          {/* PROMO */}
          <Card>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col">
                <p className="font-bold text-[25px]">
                  Vidéos promotionnelles pour le Studio Cam Customisable
                </p>
                <p className="text-normal/90">
                  Dispositif événementiel avec 16 caméras pour sortie mosaïque de vidéos conçu par
                  Studio Muybridge
                </p>
              </div>
              <div className="flex flex-col gap-[5px]">
                <div className="flex gap-1 flex-wrap">
                  <Tag color="rose">Adobe Premiere Pro</Tag>
                  <Tag color="rose">Adobe After Effects</Tag>
                </div>
                <div className="flex gap-1 flex-wrap">
                  <Tag color="violet">Montage vidéo</Tag>
                  <Tag color="violet">Motion design</Tag>
                  <Tag color="violet">Photographie</Tag>
                  <Tag color="violet">Captation</Tag>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <VideoPlayer youtubeId="8UVuO_LImo0" aspectClassName="aspect-[2.3/4.1]" />
              <VideoPlayer youtubeId="f74f5ZEViYE" aspectClassName="aspect-[2.3/4.1]" />
              <VideoPlayer youtubeId="_pnfYF6O1jw" aspectClassName="aspect-[2.3/4.1]" />
            </div>
          </Card>

          {/* CARTE */}
          <Card>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col">
                <p className="font-bold text-[25px]">
                  Animation de carte pour le Musée Henri Prades (Motion design)
                </p>
                <p className="text-normal/90">
                  Exposition "Septimanie, Languedoc et Roussillon de l'Antiquité au Moyen-Âge (Juin
                  2023 - Février 2024)
                </p>
              </div>

              <div className="flex flex-col gap-[5px]">
                <div className="flex gap-1 flex-wrap">
                  <Tag color="rose">Adobe After Effects</Tag>
                  <Tag color="rose">Adobe Illustrator</Tag>
                </div>
                <div className="flex gap-1 flex-wrap">
                  <Tag color="violet">Motion design</Tag>
                </div>
              </div>
            </div>

            <VideoPlayer youtubeId="3C-G4VcWGC0" />

            <div className="flex justify-end">
              <LinkButton href="https://museearcheo.montpellier3m.fr/evenements/17-juin-2023-5-fevrier-2024-exposition-septimanie-languedoc-et-roussillon-de-l-antiquite">
                Page web
              </LinkButton>
            </div>
          </Card>

          {/* COURSE */}
          <Card>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col">
                <p className="font-bold text-[25px]">
                  Making-of de moyen-métrage : de la scène du stade jusqu'à la scène de la soirée
                  (inclus)
                </p>
                <p className="text-normal/90">
                  "Au bout de la course" (50 min) diffusé au théâtre de Béziers
                </p>
              </div>
              <div className="flex flex-col gap-[5px]">
                <div className="flex gap-1 flex-wrap">
                  <Tag color="rose">Adobe Premiere Pro</Tag>
                  <Tag color="rose">Adobe Illustrator</Tag>
                  <Tag color="rose">Audacity</Tag>
                </div>
                <div className="flex gap-1 flex-wrap">
                  <Tag color="violet">Captation du making-of</Tag>
                  <Tag color="violet">Sound design</Tag>
                  <Tag color="violet">Assistance technique</Tag>
                  <Tag color="violet">Graphisme</Tag>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <VideoPlayer youtubeId="INx2e5ajWwo" />
              <MediaImage
                className="rounded-[10px] w-full"
                src="/optimized/ressources/audiovisuel/auboutdelacourse/logos3.webp"
                items={courseMedia}
                index={1}
              />
            </div>

            <ReadMore>
              <p>
                Sur le tournage, j'ai réalisé la captation du making-of : de la scène du stade
                jusqu'à la soirée de séparation. J'ai également assisté dans l'installation du décor.
                En post-production, j'ai doublé et monté le son de scènes complètes (sound design,
                bruitage).
              </p>
            </ReadMore>
          </Card>

          {/* BROLL */}
          <Card>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col">
                <p className="font-bold text-[25px]">B-Roll d'un cocktail flambant</p>
                <p className="text-normal/90">Vidéo publicitaire</p>
              </div>
              <div className="flex flex-col gap-[5px]">
                <div className="flex gap-1 flex-wrap">
                  <Tag color="rose">Adobe Illustrator</Tag>
                  <Tag color="rose">Procreate</Tag>
                </div>
                <div className="flex gap-1 flex-wrap">
                  <Tag color="violet">Story boarding</Tag>
                  <Tag color="violet">Découpage technique</Tag>
                  <Tag color="violet">Décoration</Tag>
                  <Tag color="violet">Installation technique</Tag>
                  <Tag color="violet">Graphisme</Tag>
                  <Tag color="violet">Jeu d'acteur</Tag>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
              <MediaImage
                className="rounded-[10px] w-full"
                src="/optimized/ressources/audiovisuel/b%20roll/storyboard.webp"
                items={brollMedia}
                index={0}
              />
              <VideoPlayer youtubeId="0EkuIJ_21bA" />
            </div>

            <ReadMore>
              <p>
                Réputé pour être utilisé dans la publicité, l'un des buts principaux but du B-Roll
                consiste à mettre en avant un produit final de manière esthétique et rapide. Ici,
                j'ai participé au montage vidéo, à la conception, au découpage technique et à
                l'installation technique.
                <br />
                <br />
                Projet réalisé en groupe dans le cadre d'un projet audiovisuel en Licence
                Professionnelle MDN.
                <br />
                <br />
              </p>
            </ReadMore>
          </Card>

          {/* NAMMU */}
          <Card>
            <div className="flex flex-col gap-5">
              <p className="font-bold text-[25px]">Court-métrage artistique "Nammu"</p>

              <div className="flex flex-col gap-[5px]">
                <div className="flex gap-1 flex-wrap">
                  <Tag color="violet">Story boarding</Tag>
                  <Tag color="violet">Découpage technique</Tag>
                  <Tag color="violet">Décoration</Tag>
                  <Tag color="violet">Lumières</Tag>
                  <Tag color="violet">Installation technique</Tag>
                  <Tag color="violet">Jeu d'acteur</Tag>
                </div>
              </div>
            </div>

            <VideoPlayer youtubeId="rIjsiacK7EY" />

            <ReadMore>
              <p>
                Fruit réputé depuis la plus haute antiquité pour évoquer la naissance et créer la joie
                et le plaisir, ici, la pomme est symbole de la création : d'une idée, d'une homme, ou
                de l'Homme.
                <br />
                <br />
                J'ai participé à la conception et à l'organisation du projet, notamment durant la
                phase de pré-production. Sur le tournage, au delà d'incarner Nammu, j'installe le
                décor, le matériel technique et les lumières.
                <br />
                <br />
                Projet réalisé en groupe dans le cadre d'un projet audiovisuel en Licence
                Professionnelle MDN.
              </p>
            </ReadMore>
          </Card>

          {/* PROCESSUS */}
          <Card>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col">
                <p className="font-bold text-[25px]">Processus de storyboarding</p>
                <p className="text-normal/90">Court métrage "Était-ce un rêve ?"</p>
              </div>
              <div className="flex flex-col gap-[5px]">
                <div className="flex gap-1 flex-wrap">
                  <Tag color="violet">Story boarding</Tag>
                  <Tag color="violet">Décoration</Tag>
                  <Tag color="violet">Installation technique</Tag>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
              <MediaImage
                className="rounded-[10px] w-full"
                src="/optimized/ressources/audiovisuel/reve/storyboard-1.webp"
                items={processusMedia}
                index={0}
              />
              <MediaImage
                className="rounded-[10px] w-full"
                src="/optimized/ressources/audiovisuel/reve/tournage.webp"
                items={processusMedia}
                index={1}
              />
            </div>
            <MediaImage
              className="rounded-[10px] w-full"
              src="/optimized/ressources/audiovisuel/reve/st.webp"
              items={processusMedia}
              index={2}
            />

            <ReadMore>
              <p>
                Dans le but d'introduire l'audiovisuel à des lycéens, un scenario a été imaginé pour
                être réalisé avec les élèves. J'ai préparé la réalisation du court-métrage en dessinant
                son storyboard, étape éssentielle avant chaque tournage. J'ai également installé le
                matériel technique et le décor.
                <br />
                <br />
                Projet réalisé en groupe dans le cadre d'un projet audiovisuel en Licence
                Professionnelle MDN.
              </p>
            </ReadMore>
          </Card>
        </div>
      </div>
    </div>
  );
}
