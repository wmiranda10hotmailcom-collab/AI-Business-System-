"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Minimize, 
  VideoOff
} from "lucide-react";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

interface CustomVideoPlayerProps {
  videoId: string;
  title?: string;
  className?: string;
  onEnded?: () => void;
}

export function CustomVideoPlayer({
  videoId,
  title,
  className,
  onEnded
}: CustomVideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const playerContainerId = `yt-player-${videoId}`;
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const hideControlsTimer = useRef<NodeJS.Timeout | null>(null);

  // If videoId is not provided
  if (!videoId || videoId === "PEGAR_LINK_AQUI" || videoId.trim() === "") {
    return (
      <div className={cn("relative w-full aspect-video flex flex-col items-center justify-center p-8 text-center border border-zinc-800/80 bg-zinc-950 shadow-2xl rounded-2xl select-none", className)}>
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-900 text-zinc-400 mb-4 border border-zinc-800">
          <VideoOff className="h-8 w-8" />
        </div>
        <h3 className="text-lg font-medium text-zinc-200 mb-1">
          Esta clase estará disponible próximamente.
        </h3>
        <p className="text-sm text-zinc-400 max-w-md">
          El material de video para esta lección se habilitará muy pronto.
        </p>
      </div>
    );
  }

  // Load YouTube IFrame API script
  useEffect(() => {
    let isMounted = true;

    const initPlayer = () => {
      if (!isMounted || !window.YT || !window.YT.Player) return;

      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch {
          // Ignore
        }
      }

      playerRef.current = new window.YT.Player(playerContainerId, {
        videoId: videoId,
        width: "100%",
        height: "100%",
        playerVars: {
          controls: 0,
          modestbranding: 1,
          rel: 0,
          iv_load_policy: 3,
          showinfo: 0,
          disablekb: 1,
          playsinline: 1,
          enablejsapi: 1,
          fs: 0
        },
        events: {
          onReady: (event: any) => {
            if (!isMounted) return;
            setIsReady(true);
          },
          onStateChange: (event: any) => {
            if (!isMounted) return;
            // 1: PLAYING, 2: PAUSED, 0: ENDED
            if (event.data === 1) {
              setIsPlaying(true);
            } else if (event.data === 2) {
              setIsPlaying(false);
            } else if (event.data === 0) {
              setIsPlaying(false);
              if (onEnded) onEnded();
            }
          }
        }
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      const existingScript = document.getElementById("youtube-iframe-api");
      if (!existingScript) {
        const tag = document.createElement("script");
        tag.id = "youtube-iframe-api";
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
      }

      const prevHandler = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (prevHandler) prevHandler();
        initPlayer();
      };
    }

    return () => {
      isMounted = false;
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch {
          // Ignore
        }
      }
    };
  }, [videoId, onEnded]);

  // Track playback time for scrubber progress
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isPlaying && playerRef.current) {
      interval = setInterval(() => {
        try {
          const cur = playerRef.current.getCurrentTime();
          const dur = playerRef.current.getDuration();
          if (dur && dur > 0 && cur >= 0) {
            setProgressPercent((cur / dur) * 100);
          }
        } catch {
          // Ignore
        }
      }, 400);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying]);

  // Fullscreen change listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  // Auto-hide controls
  const handleMouseMove = useCallback(() => {
    setShowControls(true);
    if (hideControlsTimer.current) clearTimeout(hideControlsTimer.current);
    if (isPlaying) {
      hideControlsTimer.current = setTimeout(() => {
        setShowControls(false);
      }, 2500);
    }
  }, [isPlaying]);

  const togglePlay = () => {
    if (!playerRef.current) return;
    try {
      if (isPlaying) {
        playerRef.current.pauseVideo();
        setIsPlaying(false);
      } else {
        playerRef.current.playVideo();
        setIsPlaying(true);
      }
    } catch {
      // Ignore
    }
  };

  const toggleMute = () => {
    if (!playerRef.current) return;
    try {
      if (isMuted) {
        playerRef.current.unMute();
        setIsMuted(false);
      } else {
        playerRef.current.mute();
        setIsMuted(true);
      }
    } catch {
      // Ignore
    }
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!playerRef.current) return;
    try {
      const rect = e.currentTarget.getBoundingClientRect();
      const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      const dur = playerRef.current.getDuration();
      if (dur && dur > 0) {
        const targetTime = pos * dur;
        playerRef.current.seekTo(targetTime, true);
        setProgressPercent(pos * 100);
      }
    } catch {
      // Ignore
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isPlaying && setShowControls(false)}
      className={cn(
        "group relative w-full aspect-video rounded-2xl overflow-hidden bg-black select-none border border-zinc-800/80 shadow-2xl",
        isFullscreen ? "rounded-none border-none" : "",
        className
      )}
    >
      {/* YouTube IFrame Cropping Box - responsive framing without any masks or overlays */}
      <div className="absolute -top-[22%] -bottom-[18%] -left-[4%] -right-[4%] w-[108%] h-[140%] sm:-top-[12%] sm:-bottom-[12%] sm:-left-[2%] sm:-right-[2%] sm:w-[104%] sm:h-[124%] overflow-hidden pointer-events-none [&_iframe]:w-full [&_iframe]:h-full [&_iframe]:border-0 [&_iframe]:pointer-events-none">
        <div 
          id={playerContainerId} 
          className="w-full h-full pointer-events-none" 
        />
      </div>

      {/* Full Video Area Click Layer to Play/Pause on Center Click */}
      <div 
        onClick={togglePlay}
        className="absolute inset-0 z-20 cursor-pointer flex items-center justify-center transition-all"
        role="button"
        tabIndex={0}
        aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
        onKeyDown={(e) => {
          if (e.key === " " || e.key === "Enter") {
            e.preventDefault();
            togglePlay();
          }
        }}
      >
        {/* Large Center Play Button when Paused */}
        {!isPlaying && (
          <div className="flex h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-black/70 hover:bg-black/85 border border-white/25 text-white shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 group/btn">
            <Play className="h-8 w-8 sm:h-9 sm:w-9 md:h-11 md:w-11 fill-white text-white ml-1 transition-transform group-hover/btn:scale-105" />
          </div>
        )}
      </div>

      {/* Clean Bottom Control Bar (No Minutes / Duration displayed) */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 z-30 p-3 sm:p-4 bg-gradient-to-t from-black/95 via-black/70 to-transparent transition-all duration-300",
          showControls || !isPlaying ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        )}
      >
        {/* Scrubber / Progress Bar */}
        <div 
          onClick={(e) => {
            e.stopPropagation();
            handleSeek(e);
          }}
          className="relative group/bar w-full h-1.5 hover:h-2.5 bg-zinc-800/80 rounded-full mb-3 cursor-pointer transition-all overflow-hidden"
          role="slider"
          aria-label="Barra de avance"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progressPercent)}
        >
          <div 
            className="absolute top-0 left-0 bottom-0 bg-white group-hover/bar:bg-zinc-100 transition-all rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Minimal Controls Row */}
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Play/Pause */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              aria-label={isPlaying ? "Pausar" : "Reproducir"}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/60 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 cursor-pointer"
            >
              {isPlaying ? (
                <Pause className="h-4 w-4 fill-white" />
              ) : (
                <Play className="h-4 w-4 fill-white ml-0.5" />
              )}
            </button>

            {/* Mute/Unmute */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleMute();
              }}
              aria-label={isMuted ? "Activar sonido" : "Silenciar"}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/60 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 cursor-pointer"
            >
              {isMuted ? (
                <VolumeX className="h-4 w-4 text-zinc-300" />
              ) : (
                <Volume2 className="h-4 w-4 text-zinc-300" />
              )}
            </button>
          </div>

          <div className="flex items-center space-x-2">
            {/* Fullscreen */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleFullscreen();
              }}
              aria-label={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/60 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 cursor-pointer"
            >
              {isFullscreen ? (
                <Minimize className="h-4 w-4" />
              ) : (
                <Maximize className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
