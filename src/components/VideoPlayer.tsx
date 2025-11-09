import { useEffect, useRef } from "react";
import Hls from "hls.js";

export type VideoSource = {
  src: string;           // URL del video (mp4/webm/m3u8)
  type?: string;         // opcional
};

type Props = {
  source: VideoSource;
  poster?: string;       // ej: "/poster.jpg" (en /public)
  muted?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  controls?: boolean;
  className?: string;
  subtitlesSrc?: string; // ej: "/subs.vtt" (en /public)
  subtitlesLang?: string;
  subtitlesLabel?: string;
};

export default function VideoPlayer({
  source,
  poster,
  muted = false,
  autoPlay = false,
  loop = false,
  controls = true,
  className = "w-full max-w-3xl rounded-2xl shadow",
  subtitlesSrc,
  subtitlesLang = "es",
  subtitlesLabel = "Español",
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const isHls =
      source.src.endsWith(".m3u8") || source.type === "application/vnd.apple.mpegurl";

    // Safari/iOS: HLS nativo
    if (isHls && video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = source.src;
      return;
    }

    let hls: Hls | null = null;
    if (isHls && Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(source.src);
      hls.attachMedia(video);
    } else {
      // MP4/WebM normal
      video.src = source.src;
    }

    return () => hls?.destroy();
  }, [source.src, source.type]);

  return (
    <div className="flex flex-col items-center">
      <video
        ref={ref}
        poster={poster}
        controls={controls}
        muted={muted}
        autoPlay={autoPlay}
        loop={loop}
        playsInline
        className={className}
      >
        {subtitlesSrc && (
          <track
            default
            kind="subtitles"
            srcLang={subtitlesLang}
            label={subtitlesLabel}
            src={subtitlesSrc}
          />
        )}
      </video>
    </div>
  );
}
