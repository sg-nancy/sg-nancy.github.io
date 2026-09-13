type PauseFn = () => void;

const players = new Set<PauseFn>();

export function registerPlayer(pause: PauseFn): () => void {
  players.add(pause);
  return () => {
    players.delete(pause);
  };
}

export function pauseAllVideos(except?: PauseFn) {
  players.forEach((pause) => {
    if (pause !== except) pause();
  });
}
