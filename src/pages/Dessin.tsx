import { useState } from 'react';
import GalleryImage from '../components/GalleryImage';
import Lightbox from '../components/Lightbox';
import PageIntro from '../components/PageIntro';
import Reveal from '../components/Reveal';

const dessins = [
  'm6bis.webp',
  'm4.webp',
  '1.webp',
  '2.webp',
  '3.webp',
  '4.webp',
  '5.webp',
  '10.webp',
  '7.webp',
  '6.webp',
  '21bis.webp',
  '8.webp',
  'm5.webp',
  '9.webp',
  '20.webp',
  '11.webp',
  '12.webp',
  '13.webp',
  '22.webp',
  '14.webp',
  '15.webp',
  '16.webp',
  '17.webp',
  '18.webp',
  '19.webp',
  '23.webp',
];

const allImages = [
  ...dessins.map((name) => ({ src: `/optimized/ressources/dessin/${name}` })),
  { src: '/optimized/ressources/dessin/tpe.webp' },
];

export default function Dessin() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center m-6 md:my-11">
      <div className="flex flex-col lg:w-[880px] md:w-[720px] gap-8">
        <PageIntro title="Mes dessins">
          <p>
            J'apprécie le dessin depuis l'enfance mais lorsque mon intérêt pour le graphisme et
            les outils numériques se développe, je découvre Adobe Photoshop. C'est ainsi que
            j'achète ma première tablette graphique pour réaliser mes premiers dessins digitaux.
            <br />
            <br />
            Aujourd'hui, j'utilise également Procreate.
          </p>
        </PageIntro>

        <Reveal>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {dessins.map((name, i) => (
              <GalleryImage
                key={name}
                src={`/optimized/ressources/dessin/${name}`}
                className="w-full rounded-[15px] md:rounded-[10px]"
                onClick={() => setLightboxIndex(i)}
              />
            ))}
          </div>
        </Reveal>

        <Reveal>
          <GalleryImage
            src="/optimized/ressources/dessin/tpe.webp"
            className="rounded-[15px] md:rounded-[10px]"
            onClick={() => setLightboxIndex(dessins.length)}
          />
        </Reveal>
      </div>

      <Lightbox
        items={allImages}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </div>
  );
}
