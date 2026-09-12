type GalleryImageProps = {
  folder?: string;
  src: string;
  alt?: string;
  className?: string;
  onClick?: () => void;
};

export default function GalleryImage({ folder = "/optimized/ressources/", src, alt = '', className = '', onClick }: GalleryImageProps) {
  return (
    <img
      src={folder + src}
      alt={alt}
      className={`${onClick ? 'hover:cursor-zoom-in' : ''
        } ${className}`}
      onClick={onClick}
    />
  );
}
