"use client";
import React, { useEffect, useRef, useState } from "react";
import { Play, CirclePause } from "lucide-react";

interface Props {
  videoSrc: string;
  thumbnail: string;
}

function VideoPlayer({ videoSrc, thumbnail }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [videoDuration, setVideoDuration] = useState<number>();
  const [videoProgress, setVideoProgress] = useState<number>(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPaused(false);
    const handlePause = () => setIsPaused(true);
    const handleLoadedMetadata = () => setVideoDuration(video.duration);
    const handleTimeUpdate = () => {
      if (videoDuration) {
        setVideoProgress(video.currentTime / videoDuration);
      }
    };

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [videoDuration]);

  function toggleVideoPlayer() {
    const video = videoRef.current;
    if (video) {
      video.paused ? video.play() : video.pause();
    }
  }

  return (
    <div onClick={toggleVideoPlayer} className="relative group w-fit">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 text-gray-300 transition-opacity bg-black bg-opacity-50 flex justify-center items-center z-10">
        {isPaused ? (
          <Play className="h-8 w-8 lg:h-11 lg:w-11" />
        ) : (
          <CirclePause className="h-8 w-8 lg:h-11 lg:w-11" />
        )}
      </div>

      <video
        ref={videoRef}
        className="rounded-[.7rem]"
        src={videoSrc}
        autoPlay
        loop
        muted
        preload="auto"
        controls // optional: remove if using custom-only
        poster={thumbnail}
      />
    </div>
  );
}

export default VideoPlayer;
