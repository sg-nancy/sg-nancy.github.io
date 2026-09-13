import { useState } from 'react';
import { Play } from 'lucide-react';

type VideoPlayerProps = {
  youtubeId: string;
  className?: string;
  aspectClassName?: string;
};

export default function VideoPlayer({
  youtubeId,
  className = 'w-full',
  aspectClassName = 'aspect-video',
}: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className={`${aspectClassName} overflow-hidden rounded-[10px] ${className}`}>
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`}
          title="Vidéo YouTube"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label="Lire la vidéo"
      className={`group relative block ${aspectClassName} overflow-hidden rounded-[10px] cursor-pointer ${className}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/20" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-black shadow-lg transition-transform duration-300 group-hover:scale-110">
          <Play className="h-7 w-7 fill-current" strokeWidth={0} />
        </span>
      </div>
    </button>
  );
}
