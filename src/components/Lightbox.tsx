import { useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export type LightboxItem = {
  src: string;
  alt?: string;
  poster?: string;
  type?: 'image' | 'video' | 'youtube';
};

type LightboxProps = {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export default function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const open = index !== null;

  const prev = useCallback(() => {
    if (index === null) return;
    onNavigate((index - 1 + items.length) % items.length);
  }, [index, items.length, onNavigate]);

  const next = useCallback(() => {
    if (index === null) return;
    onNavigate((index + 1) % items.length);
  }, [index, items.length, onNavigate]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose, prev, next]);

  if (!open || index === null) return null;

  const item = items[index];
  const isVideo = item.type === 'video';
  const isYoutube = item.type === 'youtube';

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 z-10 rounded-full p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
        onClick={onClose}
        aria-label="Fermer"
      >
        <X className="h-6 w-6" strokeWidth={2.5} />
      </button>

      {items.length > 1 && (
        <>
          <button
            className="absolute left-3 z-10 rounded-full p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white md:left-6 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Image précédente"
          >
            <ChevronLeft className="h-8 w-8" strokeWidth={2.5} />
          </button>
          <button
            className="absolute right-3 z-10 rounded-full p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white md:right-6 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Image suivante"
          >
            <ChevronRight className="h-8 w-8" strokeWidth={2.5} />
          </button>
        </>
      )}

      <div
        className="flex max-h-[90vh] max-w-[90vw] flex-col items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        {isYoutube ? (
          <iframe
            className="aspect-video w-[90vw] max-w-[80vh] rounded-[10px] object-contain shadow-2xl"
            src={`https://www.youtube-nocookie.com/embed/${item.src}`}
            title={item.alt ?? 'Vidéo YouTube'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : isVideo ? (
          <video
            src={item.src}
            poster={item.poster}
            controls
            autoPlay
            playsInline
            className="max-h-[82vh] max-w-[90vw] rounded-[10px] object-contain shadow-2xl"
          />
        ) : (
          <img
            src={item.src}
            alt={item.alt ?? ''}
            className="max-h-[82vh] max-w-[90vw] rounded-[10px] object-contain shadow-2xl"
          />
        )}
        {items.length > 1 && (
          <p className="text-sm text-white/70">
            {index + 1} / {items.length}
          </p>
        )}
      </div>
    </div>
  );
}
