import { useLightbox } from './LightboxProvider';
import type { LightboxItem } from './Lightbox';

type MediaImageProps = {
  folder?: string;
  src?: string;
  alt?: string;
  className?: string;
  items: LightboxItem[];
  index: number;
};

export default function MediaImage({ folder = "/optimized/ressources/", src, alt, className = '', items, index }: MediaImageProps) {
  const { open } = useLightbox();
  const item = items[index];
  return (
    <img
      src={folder + (src || item.src)}
      alt={alt || item.alt || ''}
      className={`cursor-zoom-in ${className}`}
      onClick={() => open(items, index)}
    />
  );
}
