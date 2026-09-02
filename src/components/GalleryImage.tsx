type GalleryImageProps = {
  src: string;
  alt?: string;
  className?: string;
  onClick?: () => void;
};

export default function GalleryImage({ src, alt = '', className = '', onClick }: GalleryImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={`${
        onClick ? 'hover:cursor-zoom-in' : ''
      } ${className}`}
      onClick={onClick}
    />
  );
}
