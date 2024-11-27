import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Title from "../components/Title";

const VideoLayout = styled.div`
  height: 250vh;
`;

const Video = styled.video`
  display: block;
  position: sticky;
  top: 0px;
  width: 100vw;
  height: 100vh;
  transition: scale 0.1s linear;
  object-fit: cover;
  will-change: scale, sticky;
`;

const VideoScroll = () => {
  // useRef를 사용하여 videoRef 변수를 생성하고 초기값으로 null을 할당
  const videoRef = useRef<HTMLVideoElement>(null);

  const scrollVideo = () => {
    ScrollTrigger.create({
      trigger: videoRef.current,
      start: "top top",
      end: "bottom top",
      onUpdate: (self) => {
        const progress = self.progress;
        const scale = 1 - progress * 0.104;
        // '!'를 사용하여 TypeScript에게 null이 아님을 명시
        videoRef.current!.style.transform = `scale(${scale})`;
      },
    });
  };

  useEffect(() => {
    scrollVideo();
  }, [videoRef]);

  return (
    <>
      <Title titleName="v" />
      <VideoLayout>
        <Video
          ref={videoRef}
          poster="/assets/video/video-poster.png"
          src="/assets/video/box-video.mp4"
          autoPlay
          muted
          loop
          playsInline
        ></Video>
      </VideoLayout>
    </>
  );
};

export default VideoScroll;
