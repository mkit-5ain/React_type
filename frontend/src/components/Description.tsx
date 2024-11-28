import React, { useRef } from "react";
import styled from "styled-components";

import { useAddClassObserver } from "../assets/js/useAddClassObserver";

const DescriptionLayout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-end;
  padding: 250px 5.20833vw 0;
`;

const InnerText = styled.div`
  transition: 1s ${(props) => props.theme.defaultBezier};
  translate: 0% 100%;
`;

const AnimationText = styled.div`
  display: flex;
  gap: 50px;
  font-size: 80px;
  letter-spacing: -5px;
  text-transform: uppercase;
  overflow: hidden;

  @media ${(props) => props.theme.device.tablet} {
    gap: 30px;
    font-size: 60px;
  }

  @media ${(props) => props.theme.device.mobile} {
    gap: 10px;
    font-size: 30px;
    letter-spacing: -1px;
  }

  &.active {
    ${InnerText} {
      translate: 0% 0%;
      &:nth-child(2) {
        transition-delay: 0.2s;
      }
      &:nth-child(3) {
        transition-delay: 0.4s;
      }
    }
  }
`;

const AnimationDescription = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 40px;
  scroll-snap-type: y mandatory;
  @media ${(props) => props.theme.device.tablet} {
    font-size: 25px;
  }
  @media ${(props) => props.theme.device.mobile} {
    font-size: 20px;
    &:after {
      content: "";
      overflow: hidden;
    }
  }
`;

const Eng = styled.p`
  display: flex;
  align-items: center;
  height: 58px;
`;
const Kor = styled.p`
  display: flex;
  align-items: center;
  height: 58px;
  opacity: 0.3;
`;

const DescriptionInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: sticky;
  top: 0px;
  width: calc(100% + 1px);
  height: 100vh;
  margin-left: -1px;
  background: #0e100f;
  overflow: hidden;
  scroll-snap-align: start;
  @media ${(props) => props.theme.device.tablet} {
    height: 100%;
  }
`;

const Text = styled.div`
  display: flex;
  gap: 20px;
  height: 100px;
  align-items: center;
  @media ${(props) => props.theme.device.mobile} {
    height: 60px;
  }
`;

const Video = styled.video`
  width: 75vw;
  height: calc(100vh - 7.39583vw);
  object-fit: cover;
  @media ${(props) => props.theme.device.tablet} {
    width: 100%;
  }
  @media ${(props) => props.theme.device.mobile} {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 75vw;
  height: calc(100vh - 7.39583vw);
  object-fit: cover;
  @media ${(props) => props.theme.device.tablet} {
    width: 100%;
  }
  @media ${(props) => props.theme.device.mobile} {
    width: 100%;
  }
`;

const Description = () => {
  const items = [
    {
      textKor: "크로스핏",
      textEng: "CROSSFIT",
      video: "/assets/video/swimming.mp4",
    },
    {
      textKor: "트레일러닝",
      textEng: "TRAIL RUNNING",
      bg: "/assets/images/me/trail.webp",
    },
    {
      textKor: "러닝",
      textEng: "RUNNING",
      bg: "/assets/images/me/js_01.jpg",
    },
    {
      textKor: "축구",
      textEng: "SOCCER",
      bg: "/assets/images/me/js_01.jpg",
    },
    {
      textKor: "수영",
      textEng: "SWIMMING",
      video: "/assets/video/swimming.mp4",
    },
  ];

  const TextTargetRef = useRef<HTMLDivElement>(null);
  useAddClassObserver("active", TextTargetRef, true);

  return (
    <>
      <DescriptionLayout>
        <AnimationText ref={TextTargetRef}>
          <InnerText>My</InnerText>
          <InnerText>favorite</InnerText>
          <InnerText>things</InnerText>
        </AnimationText>
        <AnimationDescription>
          {items.map((item, index) => (
            <DescriptionInner key={index}>
              <Text>
                <Eng>{item.textEng}</Eng>
                <Kor>{item.textKor}</Kor>
              </Text>
              {item.video ? (
                <Video src={item.video} autoPlay muted loop playsInline />
              ) : (
                <Image src={item.bg}></Image>
              )}
            </DescriptionInner>
          ))}
        </AnimationDescription>
      </DescriptionLayout>
    </>
  );
};

export default Description;
