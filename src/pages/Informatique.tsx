import Card from '../components/Card';
import type { LightboxItem } from '../components/Lightbox';
import LinkButton from '../components/LinkButton';
import MediaImage from '../components/MediaImage';
import PageIntro from '../components/PageIntro';
import ReadMore from '../components/ReadMore';
import Tag from '../components/Tag';
import VideoPlayer from '../components/VideoPlayer';

const umbMedia: LightboxItem[] = [
  { src: '/optimized/ressources/informatique/umb.webp' },
];

export default function Informatique() {
  return (
    <div className="flex flex-col items-center m-6 md:my-11">
      <div className="flex flex-col lg:w-[880px] md:w-[720px] gap-8">
        <PageIntro title="Mes projets informatiques">
          <p>
            À la différence de la section "Web design", ici, je présente les projets informatiques
            pour lesquels j'ai écrit des lignes de code. Seul le deuxième "site web pour une
            association d'éleveurs de l'Hérault" a entièrement été fait avec le CMS Wordpress.
            L'ensemble de ces projets informatiques se déroulent dans un contexte de gestion de
            projets et de conception avant l'étape de développement.
            <br />
            <br />
            <span className="text-white">
              Parmi eux, on retrouve ce site portfolio que j'ai codé en React, Tailwind CSS et
              TypeScript.
            </span>
          </p>
        </PageIntro>

        <div className="grid grid-cols-1 gap-8">
          {/* PALLL */}
          <Card>
            <div className="flex flex-col gap-5">
              <p className="font-bold text-[25px]">
                Double site web : adhérer à une association ou en créer une (CMS)
              </p>
              <div className="flex flex-col gap-[5px]">
                <div className="flex gap-1 flex-wrap">
                  <Tag color="bleu">PHP</Tag>
                  <Tag color="bleu">Wordpress</Tag>
                </div>
                <div className="flex gap-1 flex-wrap">
                  <Tag color="rose">Trello</Tag>
                </div>
                <div className="flex gap-1 flex-wrap">
                  <Tag color="violet">Création de site</Tag>
                  <Tag color="violet">Méthode agile SCRUM</Tag>
                  <Tag color="violet">Product owner</Tag>
                </div>
              </div>

              <VideoPlayer
                youtubeId="BA52grhnbOw"
              />
            </div>
          </Card>

          {/* ASSO */}
          <Card>
            <div className="flex flex-col gap-5">
              <p className="font-bold text-[25px]">
                Site web pour une association d'éleveurs de l'Hérault
              </p>
              <div className="flex flex-col gap-[5px]">
                <div className="flex gap-1 flex-wrap">
                  <Tag color="bleu">Wordpress</Tag>
                </div>
                <div className="flex gap-1 flex-wrap">
                  <Tag color="violet">Création de site</Tag>
                  <Tag color="violet">Création visuelles</Tag>
                  <Tag color="violet">Vulgarisation rédactionnelle de projet</Tag>
                </div>
              </div>

              <VideoPlayer
                youtubeId="LwAdv0VtO_Y"
              />
            </div>
          </Card>

          {/* BANG */}
          <Card>
            <div className="flex flex-col gap-5">
              <p className="font-bold text-[25px]">
                Jeu de société !Bang : reproduction dématérialisée
              </p>
              <div className="flex flex-col gap-[5px]">
                <div className="flex gap-1 flex-wrap">
                  <Tag color="bleu">JavaFX</Tag>
                </div>
                <div className="flex gap-1 flex-wrap">
                  <Tag color="rose">Scene Builder</Tag>
                </div>
                <div className="flex gap-1 flex-wrap">
                  <Tag color="violet">Conception d'interfaces</Tag>
                  <Tag color="violet">Adaption ergonomique</Tag>
                </div>
              </div>

              <VideoPlayer
                youtubeId="NvVCq2RM-GA"
              />
            </div>

            <ReadMore>
              <p>
                Ce projet IHM (Interface Homme-Machine) consiste en la reproduction du jeu de cartes
                Bang! Il a été réalisé par un groupe de quatre élèves. Deux membres de l'équipe se sont
                occupés de l'implémentation des fonctionnalités en JavaFX côté backend, tandis que les
                deux autres se sont chargés de la conception de l'interface de l'application et de son
                intégration côté frontend.
                <br />
                <br />
                J'ai fait partie de ce dernier groupe de personnes. J'ai travaillé sur l'intégralité
                des différentes vues possibles sur l'application en appliquant les principes
                ergonomiques. J'ai modélisé le système de vues sur l'outil de travail Scene Builder. En
                plus d'avoir participé à la conception de l'application et à la création des vues, j'ai
                notamment travaillé sur le design du jeu.
                <br />
                <br />
                Les étapes de la conception complète de l'application sont disponibles sur un tableau
                Miro.
              </p>
            </ReadMore>

            <div className="flex justify-end">
              <LinkButton href="/ressources/informatique/BangConception.pdf">
                Voir la conception
              </LinkButton>
            </div>
          </Card>

          {/* UMB */}
          <Card>
            <div className="flex flex-col gap-5">
              <p className="font-bold text-[25px]">Jeu ludique sensibilisant à la dyslexie</p>
              <div className="flex flex-col gap-[5px]">
                <div className="flex gap-1 flex-wrap">
                  <Tag color="bleu">HTML</Tag>
                  <Tag color="bleu">CSS</Tag>
                  <Tag color="bleu">JavaScript</Tag>
                  <Tag color="bleu">PHP</Tag>
                </div>
                <div className="flex gap-1 flex-wrap">
                  <Tag color="rose">Figma</Tag>
                </div>
                <div className="flex gap-1 flex-wrap">
                  <Tag color="violet">Conception de jeu, de scenario</Tag>
                  <Tag color="violet">Conception d'interfaces</Tag>
                </div>
              </div>
              <MediaImage
                className="rounded-[10px] w-full"
                src="/optimized/ressources/informatique/umb.webp"
                items={umbMedia}
                index={0}
              />
            </div>

            <ReadMore>
              <p>
                Use My Brain est un site internet sur lequel un utilisateur connecté peut jouer à un
                jeu qui permet la sensibilisation à la dyslexie. À travers ce jeu ludique, il
                comprendra différents troubles dyslexiques. Le but de ce jeu est qu'après y avoir joué,
                l'utilisateur doit pouvoir adapter son comportement et ses actions en fonction d'une
                personne dyslexique.
                <br />
                <br />
                Le projet a pour réel objectif de sensibiliser les plus jeunes à la souffrance
                quotidienne de leurs camarades souffrant d'une dyslexie. Le jeu peut attirer également
                l'attention de la communauté éducative et les parents pour aborder la question de la
                dyslexie avec leurs élèves et/ ou leurs enfants en leur faisant prendre conscience des
                difficultés rencontrées par ces élèves.
                <br />
                <br />
                Le site internet est dynamique et il a été conçu en PHP, HTML/CSS, JavaScript par deux
                étudiants en deuxième année de DUT Informatique. Le projet s'est réalisé sur un
                semestre entier.
                <br />
                <br />
                Dans ce projet, j'ai participé à la conception du jeu, au design et à la création des
                vues. Toutes les maquettes du site et des missions sont disponibles sur un Figma.
              </p>
            </ReadMore>

            <div className="flex justify-end">
              <LinkButton href="https://www.figma.com/design/EfBulgJSYhIk3C4MigUkuc/Use-My-Brain-Design?node-id=48-105&p=f&t=s4pA55hPtmCC5pZV-0">
                Voir les interfaces
              </LinkButton>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
