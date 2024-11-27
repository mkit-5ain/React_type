// import React, { useState, useEffect } from "react";

import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import React, { useEffect, useRef } from "react";

import styled from "styled-components";

import Prologue from "../components/Prologue";

import CardTrigger from "../components/CardTrigger/CardTrigger";
import CardTriggerDescription from "../components/CardTrigger/CardTriggerDescription";
import Bubble from "../components/Bubble";
import CircleText from "../components/CircleText";
// import GridList from "../components/GridList";
import DesignCode from "../components/DesignCode";
import Description from "../components/Description";
import MySelf from "../components/MySelf";
import LottieIntro from "../components/LottieIntro";
import WorkList from "../components/WorkList";

const HomeLayout = styled.div`
  width: 100%;
  height: 100%;
`;

// const StickyText = styled.p`
//   display: flex;
//   justify-content: space-between;
//   align-items: baseline;
//   width: 100%;
//   font-size: 30.02604vw;
//   font-weight: 900;
//   translate: 0 -105%;
//   @keyframes StickyIntro {
//     0% {
//       translate: 0 -105%;
//     }
//     100% {
//       translate: 0 0;
//     }
//   }
//   animation: 1s StickyIntro forwards alternate;
//   animation-delay: 0.5s;
// `;

// const TextInner = styled.div`
//   display: flex;
// `;

// const LinkTitle = styled.p`
//   transition: translate 0.5s cubic-bezier(0.87, 0, 0.13, 1);
// `;

// const BtnLink = styled(Link)`
//   position: relative;
//   overflow: hidden;

//   &:before {
//     content: attr(data-title);
//     position: absolute;
//     top: 0px;
//     left: 0px;
//     transition: translate 0.5s cubic-bezier(0.87, 0, 0.13, 1);
//     translate: 0px 100%;
//   }

//   &:after {
//     content: "";
//     position: absolute;
//     bottom: -10px;
//     left: 0px;
//     width: 0%;
//     transition: 1s ease;
//   }

//   &:hover {
//     ${LinkTitle} {
//       translate: 0px -100%;
//     }
//     &:before {
//       translate: 0px 0px;
//     }
//   }
// `;

// const TopIntro = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   font-size: 12px;
//   font-weight: bold;
//   text-align: center;
//   letter-spacing: -0.5px;
// `;

// const IntroLayout = styled.div`
//   display: flex;
//   width: 100vw;
//   height: 100vh;
//   font-size: 100px;
// `;

const Home = ({ theme }: { theme: any }) => {
  // const [isDisplay, setIsDisplay] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsDisplay(false);
  //   }, 5400);
  //   return () => clearTimeout(timer);
  // }, []);

  const animateRef = useRef<HTMLDivElement>(null);
  const areaRef = useRef<HTMLDivElement>(null);

  // const animate = () => {
  //   if (areaRef.current) {
  //     const scrollPosition = window.scrollY;
  //     const rect = areaRef.current.getBoundingClientRect();

  //     const elementTop = rect.top + scrollPosition;
  //     const elementHeight = rect.height;
  //     const progress = Math.min(
  //       Math.max((scrollPosition - elementTop) / elementHeight, 0),
  //       1
  //     );

  //     // 회전 각도 계산
  //     const rotation = progress * 180;
  //     areaRef.current.style.transform = `rotate(${rotation}deg)`;
  //   }
  // };

  useEffect(() => {
    // const observer = new IntersectionObserver(
    //   (entries) => {
    //     entries.forEach((entry) => {
    //       if (entry.isIntersecting) {
    //         animate();
    //       }
    //     });
    //   },
    //   {
    //     threshold: 0,
    //     root: null,
    //     rootMargin: "0px 0px 0px 0px",
    //   }
    // );
  }, []);

  return (
    <HomeLayout>
      <Helmet>
        <title>Mxxement - Home</title>
      </Helmet>
      <BoxWrap>
        <BoxInner>
          <BoxAnimation>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </BoxAnimation>
          <TitleAlert>
            CxexQxxe <img src="../assets/images/icon/i-start-01.png" alt="" />
            QevxAoxex
          </TitleAlert>
          <ExCardTitle>
            <div>
              On a <Extrude>mission</Extrude> to get high up
            </div>
            <div>
              <p>
                I'm headed to the <Extrude>stars</Extrude>
              </p>
              {/* <p>별 들을 향해 멀리 갈 준비 됐지</p> */}
            </div>
          </ExCardTitle>
          <p>Harder Better Faster Stronger</p>
        </BoxInner>
        <BoxBtnWrap>
          <BoxBtnInner>
            <BoxBtn to="exp">
              <p>VXAQ OQXE WXQ1</p>
            </BoxBtn>
          </BoxBtnInner>
        </BoxBtnWrap>
      </BoxWrap>
      <VideoWrap>
        <VideoBadge />
        <video
          poster="/assets/video/video-poster.png"
          src="/assets/video/gospheres.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </VideoWrap>
      <ScrollTimeLine ref={animateRef}>
        <ScrollObject />
        <ScrollArea ref={areaRef} />
      </ScrollTimeLine>
      <GridBoxWrap>
        <div>
          <GridBoxImage src="/assets/images/work/goshepres.webp" alt="" />
          <GridBoxContentsAbso>
            <GridBoxTitle>MNZN</GridBoxTitle>
            <GridBoxIconWrap>
              <GridBoxIcon src="/assets/images/me/i-run.png" alt="" />
              <GridBoxIcon src="/assets/images/me/i-crossfit.png" alt="" />
            </GridBoxIconWrap>
          </GridBoxContentsAbso>
        </div>
        <div>
          <GridBoxImage src="/assets/images/work/goshepres.webp" alt="" />
          <GridBoxContents>
            <GridBoxTitle>QFASXZ</GridBoxTitle>
            <GridBoxIconWrap>
              <GridBoxIcon src="/assets/images/me/i-run.png" alt="" />
              <GridBoxIcon src="/assets/images/me/i-trail.png" alt="" />
            </GridBoxIconWrap>
          </GridBoxContents>
        </div>
        <div>
          <GridBoxImage src="/assets/images/work/goshepres.webp" alt="" />
          <GridBoxContents>
            <GridBoxTitle>FXZC</GridBoxTitle>
            <GridBoxIconWrap>
              <GridBoxIcon src="/assets/images/me/i-run.png" alt="" />
            </GridBoxIconWrap>
          </GridBoxContents>
        </div>
      </GridBoxWrap>
      <LottieIntro />
      {/* <StickyText>
        <TextInner>
          <span>M</span>
          <span>O</span>
          <span>V</span>
          <span>E</span>
        </TextInner>
      </StickyText>
      {LinkData.map((data, index) => (
          <BtnLink key={index} to={data.path} data-title={data.title}>
            <LinkTitle>{data.title}</LinkTitle>
          </BtnLink>
        ))}
      <TopIntro>
        <p>마법 같은 공간, 생생한 사용자 경험</p>
        <p>지루하지 않게, 웹을 더욱 돋보이게</p>
      </TopIntro>
      <Link to="/myself">myself</Link>
      <Link to="/exp">ex</Link>

      <Hello />
      <GridList /> */}
      <CircleText />
      <Bubble />
      <CardTrigger />
      <CardTriggerDescription />
      <MySelf />
      <Description />
      <DesignCode />
      <Prologue />
      <WorkList />
    </HomeLayout>
  );
};

export default Home;

const BoxWrap = styled.div`
  margin: -1px 150px 100px;
`;

const BoxAnimation = styled.div`
  width: 100%;
  height: 100%;
  pointer-events: none;
  span {
    &:nth-child(1) {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 1px;
      background: #111;
      transform: scaleX(0);
      transform-origin: left;
      animation: 1s cubic-bezier(0.4, 0, 0.2, 1) intro1 alternate forwards;
      @keyframes intro1 {
        form {
          transform: scaleX(0);
        }
        to {
          transform: scaleX(1);
        }
      }
    }
    &:nth-child(2) {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 1px;
      height: 0%;
      background: #000;
      animation: 1s cubic-bezier(0.4, 0, 0.2, 1) intro2 alternate forwards;
      @keyframes intro2 {
        form {
          height: 0%;
        }
        to {
          height: 100%;
        }
      }
    }
    &:nth-child(3) {
      position: absolute;
      top: 0px;
      right: 0px;
      width: 1px;
      height: 100%;
      background: #000;
      transform: scaleY(0);
      transform-origin: bottom;
      animation: 1s cubic-bezier(0.4, 0, 0.2, 1) fq1 alternate forwards;
      @keyframes fq1 {
        form {
          transform: scaleY(0);
        }
        to {
          transform: scaleY(1);
        }
      }
    }
    &:nth-child(4) {
      position: absolute;
      bottom: 0px;
      left: 0px;
      width: 100%;
      height: 1px;
      background: #000;
      animation: 1s cubic-bezier(0.4, 0, 0.2, 1) intro4 alternate forwards;
      transform: scaleX(0);
      transform-origin: right;
      @keyframes intro4 {
        form {
          transform: scaleX(0);
        }
        to {
          transform: scaleX(1);
        }
      }
    }
  }
`;

const BoxInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  position: relative;
  padding: 100px;
  font-weight: bold;
  text-align: center;
`;

const Extrude = styled.span`
  color: #f1f1f1;
  letter-spacing: -5px;
  text-shadow: -1px -1px 1px #0e100f, 1px 1px 1px #0e100f, -1px -1px 1px #0e100f,
    -1px 2px 1px #0e100f, -2px 1px 1px #0e100f, -3px 2px 1px #0e100f,
    -4px 3px 1px #0e100f, -5px 4px 1px #0e100f, -6px 5px 1px #0e100f,
    -7px 6px 1px #0e100f, -8px 7px 1px #0e100f, -9px 8px 1px #0e100f,
    -10px 9px 1px #0e100f, 1px -1px 1px #0e100f;
  > div {
    opacity: 0;
    &:last-child {
      animation-delay: 0.1s;
    }
  }
`;

const BoxBtnWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: -1px;
  animation: 1s fadeIn forwards;
  animation-delay: 0.7s;
  opacity: 0;
  @keyframes fadeIn {
    from {
      translate: 0% 100%;
    }
    to {
      translate: 0%;
      opacity: 1;
    }
  }
`;
const BoxBtnInner = styled.div`
  grid-column: 2;
  background: #000;
`;

const BoxBtn = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  width: calc(100% + 2px);
  margin-left: -1px;
  padding: 25px;
  font-weight: bold;
  border: 1px solid #000;
  box-sizing: border-box;
  background: #f3f3f3;
  transition: translate 0.1s cubic-bezier(0.87, 0, 0.13, 1);
  overflow: hidden;
  &:before {
    content: "";
    width: 26px;
    height: 26px;
    background: url("../assets/images/icon/i-more-arrow.png") center no-repeat;
    background-size: 20px;
    transition: 0.3s ease;
    translate: -200% 0%;
  }
  &:after {
    content: "";
    width: 25px;
    height: 25px;
    margin-left: auto;
    background: url("../assets/images/icon/i-start-04.png") center no-repeat;
    background-size: 25px;
    transition: 0.3s ease;
    translate: 0% 0%;
  }
  p {
    transition: 0.4s ease;
    translate: -30px 0px;
  }
  &:hover {
    z-index: 20;
    translate: 15px -15px;
    transition-duration: 0.1s;
    p {
      translate: 0%;
    }
    &:before {
      translate: 0% 0%;
    }
    &:after {
      translate: 200% 0%;
    }
  }
`;

const ExCardTitle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0px 25px;
  width: 100%;
  font-size: 80px;
  font-weight: 900;
`;

const TitleAlert = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  img {
    width: 45px;
  }
`;

const VideoWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0px 150px 100px;
  video {
    width: 100%;
    padding: 40px;
    font-size: 0px;
    border: 1px solid #000;
    box-sizing: border-box;
    vertical-align: top;
  }
`;

const VideoBadge = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0px 0px -1px auto;
  padding: 45px;
  border: 1px solid #000;
  background: url("../assets/images/icon/i-video.png") center no-repeat;
  background-size: 40px;
`;

const GridBoxWrap = styled.div`
  display: grid;
  margin: 0px 150px 100px;
  grid-template-columns: repeat(4, 1fr);
  > div {
    position: relative;
    &:nth-child(1) {
      grid-column: 1 / 3 span;
    }
    &:nth-child(2) {
      grid-column: 3 / 2 span;
    }
    &:nth-child(3) {
      margin-top: 75%;
      grid-column: 1 / 2 span;
      grid-row: 2 / 2 span;
    }
  }
`;

const GridBoxImage = styled.img`
  width: 100%;
`;

const GridBoxContents = styled.div``;
const GridBoxContentsAbso = styled(GridBoxContents)`
  position: absolute;
  bottom: -164px;
  width: 100%;
`;

const GridBoxIconWrap = styled.div`
  display: flex;
  margin-top: -1px;
`;

const GridBoxTitle = styled.div`
  padding: 25px;
  border: 1px solid #000;
`;

const GridBoxIcon = styled.img`
  width: 40px;
  padding: 25px;
  border: 1px solid #000;
  margin-right: -1px;
`;

const ScrollTimeLine = styled.div``;
const ScrollObject = styled.div`
  background-color: deeppink;
  width: 100px;
  height: 100px;
  animation-name: rotateAnimation;
  animation-duration: 1ms;
  animation-timeline: --squareTimeline;

  @keyframes rotateAnimation {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;
const ScrollArea = styled.div`
  width: 250px;
  height: 250px;
  background: blue;
`;
