import Card from '../components/Card';
import type { LightboxItem } from '../components/Lightbox';
import MediaImage from '../components/MediaImage';
import PageIntro from '../components/PageIntro';
import Tag from '../components/Tag';

const smIcons = [
  'ecrans2.webp',
  '3d2.webp',
  'tech2.webp',
  'navigateur2.webp',
  'marteau2.webp',
];

const jukeboxIcons = ['maison2.webp', 'seance2.webp', 'casque2.webp', 'engrenage2.webp'];

const newsletter = [
  { src: '/optimized/ressources/design/studio%20muybridge/newsletters/1.webp' },
  { src: '/optimized/ressources/design/studio%20muybridge/newsletters/2.webp' },
  { src: '/optimized/ressources/design/studio%20muybridge/newsletters/competences/1.webp' },
  { src: '/optimized/ressources/design/studio%20muybridge/newsletters/competences/3.webp' },
];

const notices = [
  { src: '/optimized/ressources/design/studio%20muybridge/notices/simple-oeuf.webp' },
  { src: '/optimized/ressources/design/studio%20muybridge/notices/simple-meuble-1.webp' },
  { src: '/optimized/ressources/design/studio%20muybridge/notices/simple-meuble-2.webp' },
  { src: '/optimized/ressources/design/studio%20muybridge/notices/mallette-2000.webp' },
];

const cdv = [
  { src: '/optimized/ressources/design/studio%20muybridge/cdv/cdv.webp' },
  { src: '/optimized/ressources/design/studio%20muybridge/cdv/cdv-dos.webp' },
];

const carrousel1 = ['carrousel1.webp', 'carrousel2.webp', 'carrousel3.webp', 'carrousel4.webp', 'carrousel5.webp'];
const carrousel2 = ['1.webp', '2.webp', '3.webp', '4.webp', '5.webp', '6.webp', '7.webp', '8.webp', '9.webp'];
const carrousel3 = ['1.webp', '2.webp', '3.webp', '4.webp', '5.webp', '6.webp'];
const labatPosts = ['1.webp', '2.webp', '3.webp', '4.webp', '5.webp', '6.webp', '7.webp'];

const flyer = [
  { src: '/optimized/ressources/design/labatmobile34/flyer/flyer1.webp' },
  { src: '/optimized/ressources/design/labatmobile34/flyer/flyer2.webp' },
];

const brochure = [
  { src: '/optimized/ressources/design/labatmobile34/brochure/brochure.webp' },
  { src: '/optimized/ressources/design/labatmobile34/brochure/brochure2.webp' },
];

const carrousel1Items: LightboxItem[] = carrousel1.map(
  (name): LightboxItem => ({ src: `/optimized/ressources/design/studio%20muybridge/caroussels/1/${name}` }),
);

const carrousel2Items: LightboxItem[] = carrousel2.map(
  (name): LightboxItem => ({ src: `/optimized/ressources/design/studio%20muybridge/caroussels/2/${name}` }),
);

const carrousel3Items: LightboxItem[] = carrousel3.map(
  (name): LightboxItem => ({ src: `/optimized/ressources/design/studio%20muybridge/caroussels/3/${name}` }),
);

const labatPostsItems: LightboxItem[] = labatPosts.map(
  (name): LightboxItem => ({ src: `/optimized/ressources/design/labatmobile34/post/${name}` }),
);


export default function ProjetsEntreprise() {
  return (
    <div className="flex flex-col items-center m-6 md:my-11">
      <div className="flex flex-col lg:w-[880px] md:w-[720px] gap-8">
        <PageIntro title="Mes productions visuelles">
          <p>
            Polyvalente dans la création de contenus visuels, dans cette section non exhaustive, je
            présente des exemples de types de supports visuels que j'ai réalisés au cours de mes
            expériences professionnelles.
          </p>
        </PageIntro>

        <div className="grid grid-cols-1 gap-8">
          {/* Newsletters */}
          <Card dark gap="gap-10">
            <div className="flex flex-col gap-5">
              <p className="font-bold text-[25px]">Newsletters</p>
              <div className="flex flex-col gap-[5px]">
                <div className="flex gap-1">
                  <Tag color="rose">Adobe Illustrator</Tag>
                  <Tag color="rose">Mailjet</Tag>
                </div>
                <div className="flex gap-1">
                  <Tag color="violet">Communication</Tag>
                  <Tag color="violet">Mails</Tag>
                  <Tag color="violet">Réseaux sociaux</Tag>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {newsletter.map((item, i) => (
                <MediaImage key={item.src} className="rounded-[5px] w-full" src={item.src} items={newsletter} index={i} />
              ))}
            </div>
          </Card>

          {/* Notices */}
          <Card dark gap="gap-10">
            <div className="flex flex-col gap-5">
              <p className="font-bold text-[25px]">Notices d'utilisation</p>
              <div className="flex flex-col gap-[5px]">
                <div className="flex gap-1">
                  <Tag color="rose">Adobe InDesign</Tag>
                </div>
                <div className="flex gap-1">
                  <Tag color="violet">Rédaction</Tag>
                  <Tag color="violet">Communication</Tag>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {notices.slice(0, 3).map((item, i) => (
                  <MediaImage key={item.src} className="rounded-[5px] w-full" src={item.src} items={notices} index={i} />
                ))}
              </div>
              <MediaImage className="rounded-[5px] w-full" src={notices[3].src} items={notices} index={3} />
            </div>
          </Card>

          {/* Carte de visite */}
          <Card dark gap="gap-10">
            <div className="flex flex-col gap-5">
              <p className="font-bold text-[25px]">Carte de visite</p>
              <div className="flex flex-col gap-[5px]">
                <div className="flex gap-1">
                  <Tag color="rose">Adobe Photoshop</Tag>
                  <Tag color="rose">Adobe Illustrator</Tag>
                </div>
                <div className="flex gap-1">
                  <Tag color="violet">Branding</Tag>
                  <Tag color="violet">Communication</Tag>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {cdv.map((item, i) => (
                <MediaImage key={item.src} className="rounded-[5px] w-full" src={item.src} items={cdv} index={i} />
              ))}
            </div>
          </Card>

          {/* Icônes */}
          <Card dark gap="gap-10">
            <div className="flex flex-col gap-5">
              <p className="font-bold text-[25px]">Icônes</p>
              <div className="flex flex-col gap-[5px]">
                <Tag color="rose">Adobe Illustrator</Tag>
                <Tag color="violet">Communication</Tag>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-5 bg-card-background rounded-[15px] border-card-border border-2 p-5">
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 items-center opacity-80">
                  {smIcons.map((name) => (
                    <div
                      key={name}
                      className="flex flex-col bg-card-background rounded-[15px] border-card-border border-2 p-2"
                    >
                      <img className="rounded-[5px]" src={`/optimized/ressources/design/studio%20muybridge/icons/${name}`} alt="" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-5 bg-card-background rounded-[15px] border-card-border border-2 p-5">
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 items-center opacity-80">
                  {jukeboxIcons.map((name) => (
                    <div
                      key={name}
                      className="flex flex-col bg-card-background rounded-[15px] border-card-border border-2 p-2"
                    >
                      <img src={`/optimized/ressources/design/web%20design/jukeboxvr-icons/${name}`} alt="" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Carrousels */}
          <Card dark gap="gap-10">
            <div className="flex flex-col gap-5">
              <p className="font-bold text-[25px]">Carrousels</p>
              <div className="flex flex-col gap-[5px]">
                <Tag color="rose">Adobe Illustrator</Tag>
                <div className="flex gap-1">
                  <Tag color="violet">LinkedIn</Tag>
                  <Tag color="violet">Communication</Tag>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {carrousel1.map((name, i) => (
                  <MediaImage key={name} className="rounded-[5px] w-full" src={`/optimized/ressources/design/studio%20muybridge/caroussels/1/${name}`} items={carrousel1Items} index={i} />
                ))}
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {carrousel2.map((name, i) => (
                  <MediaImage key={name} className="rounded-[10px] w-full" src={`/optimized/ressources/design/studio%20muybridge/caroussels/2/${name}`} items={carrousel2Items} index={i} />
                ))}
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {carrousel3.map((name, i) => (
                  <MediaImage key={name} className="rounded-[10px] w-full" src={`/optimized/ressources/design/studio%20muybridge/caroussels/3/${name}`} items={carrousel3Items} index={i} />
                ))}
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {labatPosts.map((name, i) => (
                  <MediaImage key={name} className="rounded-[10px] w-full" src={`/optimized/ressources/design/labatmobile34/post/${name}`} items={labatPostsItems} index={i} />
                ))}
              </div>
            </div>
          </Card>

          {/* Flyer */}
          <Card dark gap="gap-10">
            <div className="flex flex-col gap-5">
              <p className="font-bold text-[25px]">Flyer</p>
              <div className="flex flex-col gap-[5px]">
                <div className="flex gap-1">
                  <Tag color="rose">Adobe Illustrator</Tag>
                  <Tag color="rose">Adobe InDesign</Tag>
                </div>
                <div className="flex gap-1">
                  <Tag color="violet">Communication</Tag>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {flyer.map((item, i) => (
                <MediaImage key={item.src} className="rounded-[5px] w-full" src={item.src} items={flyer} index={i} />
              ))}
            </div>
          </Card>

          {/* Brochure */}
          <Card dark gap="gap-10">
            <div className="flex flex-col gap-5">
              <p className="font-bold text-[25px]">Brochure</p>
              <div className="flex flex-col gap-[5px]">
                <div className="flex gap-1">
                  <Tag color="rose">Adobe InDesign</Tag>
                  <Tag color="rose">Adobe Illustrator</Tag>
                </div>
                <div className="flex gap-1">
                  <Tag color="violet">Communication</Tag>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {brochure.map((item, i) => (
                <MediaImage key={item.src} className="rounded-[5px] w-full" src={item.src} items={brochure} index={i} />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
