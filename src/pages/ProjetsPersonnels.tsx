import { useState } from 'react';
import GalleryImage from '../components/GalleryImage';
import Lightbox from '../components/Lightbox';
import PageIntro from '../components/PageIntro';
import Reveal from '../components/Reveal';

const images = [
  'meduse.webp',
  'diable.webp',
  'iut-ours.webp',
  'marie.webp',
  'iut-reseaux.webp',
  'lpa.webp',
  'tank1.webp',
  'iut-parapluie.webp',
  'papillon.webp',
  'apprenti.webp',
  'ward.webp',
  'tank2.webp',
  'jlmauto.webp',
  'cremeux.webp',
];

const wideImages = ['poster.webp', 'plaquette.webp'];

const allImages = [
  ...images.map((name) => ({ src: `/optimized/ressources/design/graphic%20design/${name}` })),
  ...wideImages.map((name) => ({ src: `/optimized/ressources/design/graphic%20design/${name}` })),
];

export default function ProjetsPersonnels() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center m-6 md:my-11">
      <div className="flex flex-col lg:w-[880px] md:w-[720px] gap-8">
        <PageIntro title="Mes projets personnels dans le graphisme">
          <p>
            En jouant aux jeux vidéo, je développe un intérêt pour le monde numérique. Curieuse,
            je me penche vers le graphisme et je me forme dans ce nouveau domaine qui devient très
            vite un nouveau hobbie.
          </p>
        </PageIntro>

        <Reveal>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {images.map((name, i) => (
              <GalleryImage
                key={name}
                src={`/optimized/ressources/design/graphic%20design/${name}`}
                className="w-full rounded-[15px] md:rounded-[10px]"
                onClick={() => setLightboxIndex(i)}
              />
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2">
            {wideImages.map((name, i) => (
              <GalleryImage
                key={name}
                src={`/optimized/ressources/design/graphic%20design/${name}`}
                className="w-full rounded-[15px] md:rounded-[10px]"
                onClick={() => setLightboxIndex(images.length + i)}
              />
            ))}
          </div>
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
