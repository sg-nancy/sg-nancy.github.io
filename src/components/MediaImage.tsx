import { useLightbox } from './LightboxProvider';
import type { LightboxItem } from './Lightbox';

type MediaImageProps = {
  src: string;
  alt?: string;
  className?: string;
  items: LightboxItem[];
  index: number;
};

export default function MediaImage({ src, alt = '', className = '', items, index }: MediaImageProps) {
  const { open } = useLightbox();
  return (
    <img
      src={src}
      alt={alt}
      className={`cursor-zoom-in ${className}`}
      onClick={() => open(items, index)}
    />
  );
}
