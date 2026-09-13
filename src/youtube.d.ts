declare namespace YT {
  enum PlayerState {
    UNSTARTED = -1,
    ENDED = 0,
    PLAYING = 1,
    PAUSED = 2,
    BUFFERING = 3,
    CUED = 5,
  }

  interface OnStateChangeEvent {
    target: Player;
    data: PlayerState;
  }

  interface PlayerOptions {
    videoId?: string;
    playerVars?: {
      autoplay?: 0 | 1;
    };
    events?: {
      onStateChange?: (event: OnStateChangeEvent) => void;
    };
  }

  class Player {
    constructor(id: string, options?: PlayerOptions);
    pauseVideo(): void;
    destroy(): void;
  }
}

interface YouTubeAPI {
  Player: typeof YT.Player;
  PlayerState: typeof YT.PlayerState;
}

interface Window {
  YT?: YouTubeAPI;
  onYouTubeIframeAPIReady?: () => void;
}
