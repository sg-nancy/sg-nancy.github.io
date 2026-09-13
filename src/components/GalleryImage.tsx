type GalleryImageProps = {
  folder?: string;
  src: string;
  alt?: string;
  className?: string;
  onClick?: () => void;
  [key: `data-${string}`]: string | undefined;
};

export default function GalleryImage({ folder = "/optimized/ressources/", src, alt = '', className = '', onClick, ...rest }: GalleryImageProps) {
  return (
    <img
      src={folder + src}
      alt={alt}
      loading="lazy"
      className={`${onClick ? 'hover:cursor-zoom-in' : ''
        } ${className}`}
      onClick={onClick}
      {...rest}
    />
  );
}
