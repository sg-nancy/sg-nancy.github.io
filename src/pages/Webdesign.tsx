import Card from '../components/Card';
import type { LightboxItem } from '../components/Lightbox';
import LinkButton from '../components/LinkButton';
import MediaImage from '../components/MediaImage';
import PageIntro from '../components/PageIntro';
import ReadMore from '../components/ReadMore';
import Tag from '../components/Tag';
import VideoPlayer from '../components/VideoPlayer';

const mwheelMedia: LightboxItem[] = [
  { type: 'youtube', src: 'V9mZy1msC8c' },
  { type: 'image', src: '/optimized/ressources/design/web%20design/mwheel.webp' },
];

const gedhysMedia: LightboxItem[] = [
  { src: '/optimized/ressources/design/web%20design/gedhys.webp' },
];

export default function Webdesign() {
  return (
    <div className="flex flex-col items-center m-6 md:my-11">
      <div className="flex flex-col lg:w-[880px] md:w-[720px] gap-8">
        <PageIntro title="Mes projets web design">
          <p>
            Dans cette section, je présente les projets en web design sur lesquels j'ai travaillé
            seule. Il s'agit de la conception d'interfaces et d'application des principes
            ergonomiques UX/UI.
          </p>
        </PageIntro>

        <div className="grid grid-cols-1 gap-8">
          {/* Jukebox VR */}
          <Card gap="gap-6">
            <div className="flex flex-col gap-5">
              <p className="font-bold text-[25px]">
                Application de pilotage vidéo multi-casque VR pour muséologie
              </p>
              <div className="flex flex-col gap-[5px]">
                <div className="flex flex-wrap gap-1">
                  <Tag color="rose">Figma</Tag>
                  <Tag color="rose">Adobe Illustrator</Tag>
                </div>
                <div className="flex flex-wrap gap-1">
                  <Tag color="violet">Création d'interfaces</Tag>
                  <Tag color="violet">Prototypage</Tag>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <p className="text-normal/90">
                Démonstration de l'application (Prototype Jukebox VR Lite)
              </p>
              <VideoPlayer
                youtubeId="GWSCeYStjvs"
              />
            </div>

            <div className="flex flex-col gap-5">
              <p className="text-normal/90">Tutoriel de l'application de pilotage VR</p>
              <VideoPlayer
                youtubeId="tizEuT1LU4k"
              />
            </div>

            <ReadMore>
              <p>
                Cette application de gestion de séances et de casques VR pour muséologie fait partie
                de la solution JukeboxVRLite chez Studio Muybridge. J'ai conçu l'intégralité du design
                de l'application et j'ai également travaillé sur les différentes fonctionnalités
                qu'elle propose.
                <br />
                <br />
                Deux versions de cette application ont été réalisées : la première a été conçue pour
                le cas simple où l'on voudrait faire regarder au groupe de visite une seule et même
                vidéo.
                <br />
                La deuxième version permet à différents groupes de pouvoir lancer un même film à des
                moments désynchronisés grâce à la fonctionnalité de création de plusieurs séances.
              </p>
            </ReadMore>

            <div className="flex justify-end">
              <LinkButton href="https://www.figma.com/design/LNxWyBZb3BKcriM4YcnKA0/Interfaces-Jukebox-VR-Original?node-id=0-1&p=f&t=vOM7yRA32Cx2OuyZ-0">
                Voir les interfaces
              </LinkButton>
            </div>
          </Card>

          {/* Opéra */}
          <Card>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col">
                <p className="font-bold text-[25px]">
                  Billeterie dématérialisée pour l'Opéra Orchestre National Montpellier
                </p>
              </div>
              <div className="flex flex-col gap-[5px]">
                <div className="flex gap-1">
                  <Tag color="rose">Figma</Tag>
                </div>
                <div className="flex gap-1 flex-wrap">
                  <Tag color="violet">Création d'interfaces</Tag>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
              <VideoPlayer
                youtubeId="aBJMfHPdW8k" aspectClassName='aspect-[2.3/4.1]'
              />
              <div></div>
            </div>
          </Card>

          {/* MWheel */}
          <Card>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col">
                <p className="font-bold text-[25px]">
                  Application de suivi et de pilotage de trotinette VR
                </p>
                <p className="text-normal/90">MWheel Mobility VR</p>
              </div>
              <div className="flex flex-col gap-[5px]">
                <div className="flex gap-1">
                  <Tag color="rose">Figma</Tag>
                </div>
                <div className="flex gap-1 flex-wrap">
                  <Tag color="violet">Création d'interfaces</Tag>
                  <Tag color="violet">Adaptation ergonomique d'une ancienne version</Tag>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
              <VideoPlayer
                youtubeId="V9mZy1msC8c"
              />
              <MediaImage
                className="rounded-[10px] w-full"
                src="/optimized/ressources/design/web%20design/mwheel.webp"
                items={mwheelMedia}
                index={1}
              />
            </div>

            <ReadMore>
              <p>
                MWheel Mobility VR est une application mobile de simulation de trotinette. Le joueur
                choisit un parcours à effectuer en trotinette et il est confronté à des situations de
                danger sur la route.
                <br />
                <br />
                Client de Studio Muybridge, j'ai crée la nouvelle version de l'application pour MWheel
                Mobility. Je me suis basée sur les anciennes interfaces de l'application pour les
                refaire de manière plus ergonomique, que ce soit en termes de couleurs ou d'agencement,
                et ce, en conservant les fonctionnalités.
              </p>
            </ReadMore>

            <div className="flex justify-end">
              <LinkButton href="https://www.figma.com/file/K3Pm9ByZJREHkmAsJIcKop/Interfaces-MWheel-Original?node-id=0%3A1&t=TWga9LYCjLvC6qYP-1">
                Voir les interfaces
              </LinkButton>
            </div>
          </Card>

          {/* GEDHYS */}
          <Card>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col">
                <p className="font-bold text-[25px]">Site web marketplace</p>
                <p className="text-normal/90">GEDHYS</p>
              </div>
              <div className="flex flex-col gap-[5px]">
                <div className="flex gap-1">
                  <Tag color="rose">Figma</Tag>
                </div>
                <div className="flex flex-wrap gap-1">
                  <Tag color="violet">Création d'interfaces</Tag>
                </div>
              </div>
            </div>

            <MediaImage
              className="rounded-[10px] w-full"
              src="/optimized/ressources/design/web%20design/gedhys.webp"
              items={gedhysMedia}
              index={0}
            />

            <ReadMore>
              <p>
                GEDHYS (Groupement Européen de Distributeurs en produits d'Hygiène-entretien et
                Services) est un site web marketplace permettant aux partenaires du GEDAL de mettre en
                vente leurs produits. Le site web a pour but de faciliter la mise en relation et la
                prise de commandes avec la mise en place d'un service de régie de médias.
                <br />
                <br />
                Dans le but d'introduire le produit aux clients, j'ai réalisé les premières maquettes
                du site.
              </p>
            </ReadMore>

            <div className="flex justify-end">
              <LinkButton href="https://www.figma.com/file/ASTClbbclRJjVAfijJypER/Untitled?node-id=0%3A1&t=qZT82NhZbUhYS7Kp-1">
                Voir les interfaces
              </LinkButton>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
