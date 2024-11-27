import React, { useRef } from "react";
import styled from "styled-components";

import { useAddClassObserver } from "../../assets/js/useAddClassObserver";

const MySelfRoad = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 10vw auto 0px;
`;

const MySelfRoadTitle = styled.div`
  font-size: 60px;
  font-weight: bold;
`;

const MySelfRoadSubTitle = styled.div`
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #8a8a8a;
`;

const MySelfVideoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  position: relative;
  margin-top: 100px;
`;

const MySelfVideo = styled.video`
  position: relative;
  width: 990px;
  height: 476px;
  margin-top: 4px;
  border-radius: 106px;
  object-fit: cover;
  pointer-events: none;
`;

const MySelfVideoCaption = styled.div`
  align-self: center;
  position: sticky;
  bottom: 20px;
  z-index: 101;
  padding: 15px 30px;
  color: #fff;
  text-align: center;
  border-radius: 50px;
  background: #000;
  translate: 0px -5vw;
  rotate: 360deg;
  transition: 1s ${(props) => props.theme.defaultBezier};
  opacity: 0;

  &.active {
    translate: 0px 0px;
    rotate: 0deg;
    opacity: 1;
  }
`;

const MySelfVideoCase = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 100;
  width: 100%;
  height: 100%;
  background: url("/assets/images/myself/road/video-case.png") 0 0 no-repeat;
  pointer-events: none;
`;

const Road = () => {
  const MySelfVideoCaptionRef = useRef<HTMLDivElement>(null);

  useAddClassObserver("active", MySelfVideoCaptionRef, true);
  return (
    <MySelfRoad>
      <MySelfRoadTitle>
        <p>로드 러닝.</p>
        <p>운동의 근본, 체력의 근원</p>
      </MySelfRoadTitle>
      <MySelfRoadSubTitle>
        마침내, 나에게 큰 변화가 찾아왔다.
      </MySelfRoadSubTitle>
      <MySelfVideoWrap>
        <MySelfVideo
          src="/assets/video/myself/road/video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <MySelfVideoCaption ref={MySelfVideoCaptionRef}>
          2XU - Misa Rowing Stadium
        </MySelfVideoCaption>
        <MySelfVideoCase />
      </MySelfVideoWrap>
    </MySelfRoad>
  );
};

export default Road;
