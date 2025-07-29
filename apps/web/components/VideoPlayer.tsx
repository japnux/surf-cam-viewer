'use client';
import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

export default function VideoPlayer({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
    } else if (Hls.isSupported()) {
      const hls = new Hls({ lowLatencyMode: true });
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.ERROR, function (event, data) {
        if (data.fatal) {
          console.error('HLS.js fatal error:', data);
        }
      });
      return () => hls.destroy();
    }
  }, [src]);

  return (
    <video
      ref={ref}
      autoPlay
      muted
      controls
      playsInline
      className="w-full h-auto rounded-xl shadow-soft"

    />
  );
}
