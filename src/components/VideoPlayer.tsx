type VideoPlayerProps = {
  youtubeId: string;
  className?: string;
  aspectClassName?: string;
};

export default function VideoPlayer({ youtubeId, className = '', aspectClassName = 'aspect-video' }: VideoPlayerProps) {
  return (
    <div className={`w-full ${aspectClassName} overflow-hidden rounded-[10px] ${className}`}>
      <iframe
        className="h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
        title="Vidéo YouTube"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}
