let apiPromise: Promise<YouTubeAPI> | null = null;

export function loadYouTubeAPI(): Promise<YouTubeAPI> {
  if (!apiPromise) {
    apiPromise = new Promise<YouTubeAPI>((resolve) => {
      const existing = window.YT;
      if (existing?.Player) {
        resolve(existing);
        return;
      }

      const previous = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        previous?.();
        const api = window.YT;
        if (api) resolve(api);
      };

      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(tag);
    });
  }
  return apiPromise;
}
