import { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { loadYouTubeAPI } from '../lib/youtube';
import { pauseAllVideos, registerPlayer } from '../lib/videoManager';

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
  const containerId = useRef(`yt-${Math.random().toString(36).slice(2)}`).current;
  const playerRef = useRef<YT.Player | null>(null);

  useEffect(() => {
    if (!playing) return;

    const pause = () => playerRef.current?.pauseVideo();
    const unregister = registerPlayer(pause);

    let cancelled = false;

    loadYouTubeAPI().then((api) => {
      if (cancelled) return;

      playerRef.current = new api.Player(containerId, {
        videoId: youtubeId,
        playerVars: { autoplay: 1 },
        events: {
          onStateChange: (event) => {
            if (event.data === api.PlayerState.PLAYING) {
              pauseAllVideos(pause);
            }
          },
        },
      });
    });

    return () => {
      cancelled = true;
      unregister();
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, [playing, youtubeId, containerId]);

  if (playing) {
    return (
      <div className={`${aspectClassName} overflow-hidden rounded-[10px] ${className}`}>
        <div id={containerId} className="h-full w-full" />
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
