"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Play } from 'lucide-react'
import { CirclePause } from 'lucide-react'
interface Props {
    videoSrc: string,
    thumbnail: string
}
function VideoPlayer(props: Props) {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPaused, setIsPaused] = useState(false)
    const [videoDuration, setVideoDuration] = useState<number>();
    const [videoProggress, setVideoProgress] = useState<number>(0);
    useEffect(() => {
        const video = videoRef.current
        if (video) {
            setVideoDuration(video.duration)
        }
    }, [])
    useEffect(() => {
        if (isPaused) {
            return
        }
        const currentTime = videoRef.current?.currentTime
        if (videoDuration != null && currentTime != null) {
            let loadingTimeout = setTimeout(() => {
                if (videoProggress == currentTime / videoDuration) {
                    setVideoProgress((prev) => prev + 0.000001)
                }
                else {

                    setVideoProgress(currentTime / videoDuration)
                }
            }, 10);
            return () => {
                clearTimeout(loadingTimeout)
            }
        }
    }, [videoProggress, videoDuration, isPaused])
    function toggleVideoPlayer() {
        const video = videoRef.current;
        if (video) {
            setIsPaused(!video.paused);
            video.paused ? video.play() : video.pause();
        }
    }
    {

    }
    return (
        <div >
            <div className='absolute inset-0  opacity-0 group-hover:opacity-100 text-gray-300 transition-opacity bg-black bg-opacity-50  h-full w-full flex justify-center items-center'>
            </div>
            <video className='rounded-[.7rem] ' ref={videoRef} src={props.videoSrc} autoPlay loop muted preload="none" controls poster={props.thumbnail} ></video>
        </div>
    )
}

VideoPlayer.propTypes = {

}

export default VideoPlayer

