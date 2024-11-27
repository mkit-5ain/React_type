import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Marquee from "../components/Marquee";

interface MarqueeProps {
  text: any;
  position: any;
  marginTop: any;
}

const objAnimation = keyframes`
  from {
    transform: translate3d(0px, 0px, 0px);
  }

  to {
    transform: translate3d(0px,20px,0px)
  }
`;

const TimelineLayout = styled.div`
  position: relative;
  width: 100vw;
  height: 200vh;
`;

const TimelineBox = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const TimelineImage = styled.img`
  width: 26.04167vw;
  transition: 0.4s cubic-bezier(0.99, -0.02, 0, 1.25);
  filter: drop-shadow(5px 5px 5px #000);
`;

const TimelineDate = styled.div<{ bgColor?: string }>`
  position: absolute;
  top: 50%;
  z-index: 5;
  padding: 0.78125vw 1.30208vw;
  border-radius: 1.04167vw;
  font-weight: bold;
  font-size: 25px;
  background: ${(props) => props.bgColor || "transparent"};
  transition: 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
  transform: perspective(3em) rotateX(-90deg) translate3d(0, 100%, 0)
    scale3d(0.75, 1, 1);
  filter: drop-shadow(10px 10px 10px #000);
`;

const TimelineTitle = styled.div<{ bgColor?: string }>`
  position: absolute;
  bottom: -15%;
  color: ${(props) => props.bgColor || "transparent"};
  font-size: 2.60417vw;
  font-weight: bold;
  transition: 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
  transform: perspective(3em) rotateX(-90deg) translate3d(0, 100%, 0)
    scale3d(0.75, 1, 1);
  transition-delay: 0.1s;
  filter: drop-shadow(0.26042vw 0.26042vw 0.26042vw #000);
`;

const TimelineSvg = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 4;
  opacity: 0;
`;

const TimelineSvgA = styled(TimelineSvg)`
  @keyframes svgMoveA {
    0% {
      transform: translate(0px, 0px) rotate(0deg);
      opacity: 0;
    }

    20% {
      transform: translate(-0.52083vw, -1.04167vw) rotate(20deg);
      opacity: 1;
    }

    40% {
      transform: translate(-1.04167vw, -2.08333vw) rotate(40deg);
      opacity: 1;
    }

    60% {
      transform: translate(-1.5625vw, -3.125vw) rotate(60deg);
      opacity: 0.7;
    }

    80% {
      transform: translate(-2.08333vw, -4.16667vw) rotate(80deg);
      opacity: 0.3;
    }

    100% {
      transform: translate(-2.60417vw, -5.20833vw) rotate(100deg);
      opacity: 0;
    }
  }
`;

const TimelineSvgB = styled(TimelineSvg)`
  @keyframes svgMoveB {
    0% {
      transform: translate(0px, 0px) rotate(0deg);
      opacity: 0;
    }

    20% {
      transform: translate(0.52083vw, -0.78125vw) rotate(40deg);
      opacity: 1;
    }

    40% {
      transform: translate(1.04167vw, -1.5625vw) rotate(80deg);
      opacity: 1;
    }

    60% {
      transform: translate(1.5625vw, -2.34375vw) rotate(120deg);
      opacity: 0.7;
    }

    80% {
      transform: translate(2.08333vw, -3.125vw) rotate(160deg);
      opacity: 0.3;
    }

    100% {
      transform: translate(2.60417vw, -3.90625vw) rotate(200deg);
      opacity: 0;
    }
  }
`;

const TimelineSvgC = styled(TimelineSvg)`
  @keyframes svgMoveC {
    0% {
      transform: translate(0px, 0px) rotate(0deg);
      opacity: 0;
    }

    20% {
      transform: translate(0.26042vw, -1.04167vw) rotate(40deg);
      opacity: 1;
    }

    40% {
      transform: translate(0.52083vw, -2.08333vw) rotate(80deg);
      opacity: 1;
    }

    60% {
      transform: translate(0.78125vw, -3.125vw) rotate(120deg);
      opacity: 0.7;
    }

    80% {
      transform: translate(1.04167vw, -4.16667vw) rotate(160deg);
      opacity: 0.3;
    }

    100% {
      transform: translate(1.30208vw, -5.20833vw) rotate(200deg);
      opacity: 0;
    }
  }
`;

const TimelineSvgD = styled(TimelineSvg)`
  @keyframes svgMoveD {
    0% {
      transform: translate(0px, 0px) rotate(0deg);
      opacity: 0;
    }

    20% {
      transform: translate(-1.5625vw, -0.52083vw) rotate(40deg);
      opacity: 1;
    }

    40% {
      transform: translate(-2.08333vw, -0.78125vw) rotate(60deg);
      opacity: 1;
    }

    60% {
      transform: translate(-2.60417vw, -1.04167vw) rotate(80deg);
      opacity: 0.7;
    }

    80% {
      transform: translate(-3.125vw, -1.30208vw) rotate(100deg);
      opacity: 0.3;
    }

    100% {
      transform: translate(-3.64583vw, -1.5625vw) rotate(120deg);
      opacity: 0;
    }
  }
`;

const TimelineImageWrap = styled.div<{ bgColor?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-content: center;
  position: relative;
  flex: 1 1 0;
  animation: 2s ease-in-out ${objAnimation} infinite alternate;
  will-change: transform;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    width: 22.13542vw;
    height: 22.13542vw;
    border-radius: 100%;
    background-color: ${(props) => props.bgColor || "transparent"};
    transition: 0.4s cubic-bezier(0.99, -0.02, 0, 1.25);
    transform: scale(0);
  }

  &:hover {
    transition: 0.4s cubic-bezier(0.99, -0.02, 0, 1.25);

    &:before {
      transform: scale(1);
    }

    ${TimelineImage} {
      transform: scale(1.2) rotate(5deg);
    }

    ${TimelineDate} {
      transition: 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
      transform: perspective(10000px) rotate3d(0, 0, 0, 0) translateZ(0)
        scaleZ(1);
    }

    ${TimelineTitle} {
      transition: 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
      transform: perspective(10000px) rotate3d(0, 0, 0, 0) translateZ(0)
        scaleZ(1);
      transition-delay: 0.1s;
    }

    ${TimelineSvgA} {
      animation: 1s linear svgMoveA forwards alternate;
    }
    ${TimelineSvgB} {
      animation: 1s linear svgMoveB forwards alternate;
    }
    ${TimelineSvgC} {
      animation: 1s linear svgMoveC forwards alternate;
    }
    ${TimelineSvgD} {
      animation: 1s linear svgMoveD forwards alternate;
    }
  }
`;

const TimelineImageRef = styled.div`
  display: flex;
  height: 100%;
  position: relative;
  flex: 1 1 0;
`;

const ScrollTimeLine = () => {
  const ParallaxTriggerRef = useRef<HTMLDivElement>(null);
  const ParallaxRef = useRef<Array<HTMLDivElement | null>>([]);
  // *위 소스코드 HTMLDivElement나 null 값을 가지는 배열임을 명시

  const TimeLineData = [
    {
      imageUrl: "/assets/images/trigger/milk-01.png",
      color: "#a1c474",
      date: "2020.12.31",
      title: "Crossfit",
    },
    {
      imageUrl: "/assets/images/trigger/milk-02.png",
      color: "#ff8a00",
      date: "2020.12.31",
      title: "Running",
    },
    {
      imageUrl: "/assets/images/trigger/milk-03.png",
      color: "#ff3916",
      date: "2020.12.31",
      title: "Trail Running",
    },
  ];

  const TimelineParallax = () => {
    gsap.to(ParallaxRef.current[0], {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: ParallaxTriggerRef.current,
        end: "+=5000",
        scrub: true,
      },
    });

    gsap.to(ParallaxRef.current[1], {
      yPercent: 50,
      ease: "none",
      scrollTrigger: {
        trigger: ParallaxTriggerRef.current,
        end: "+=5000",
        scrub: true,
      },
    });

    gsap.to(ParallaxRef.current[2], {
      yPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: ParallaxTriggerRef.current,
        end: "+=5000",
        scrub: true,
      },
    });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    TimelineParallax();
  }, []);

  return (
    <>
      <TimelineLayout>
        <TimelineBox ref={ParallaxTriggerRef}>
          <Marquee
            position="absolute"
            top="50%"
            marginTop="-72px"
            text={["Energetic", "Energetic", "Energetic", "Energetic"]}
          />
          {TimeLineData.map((item, index) => (
            <TimelineImageRef
              key={index}
              ref={(element) => (ParallaxRef.current[index] = element)}
            >
              {/* 
                  ParallaxRef.current[index]는 배열 ParallaxRef의 index 위치에 있는 요소를 가리킵니다.
                  ParallaxRef.current[index] = element는 현재 처리 중인 DOM 요소에 대한 참조를 
                  배열 ParallaxRef의 index 위치에 저장합니다. */}
              <TimelineImageWrap bgColor={item.color}>
                <TimelineSvgA
                  fill="none"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  aria-hidden="true"
                >
                  <path
                    fill="url(#paint0_radial_2146_58993)"
                    fill-rule="evenodd"
                    d="M7.959 10.053a4.368 4.368 0 0 1-.889-.17c-2.327-.7-3.64-3.174-2.933-5.527C4.845 2.002 7.305.662 9.632 1.36c2.327.7 3.64 3.174 2.933 5.528-.06.197-.131.387-.214.57l.46.138c.032-.198.078-.396.137-.593.707-2.353 3.167-3.694 5.494-2.995 2.328.7 3.64 3.175 2.933 5.528-.707 2.353-3.167 3.694-5.494 2.995a4.377 4.377 0 0 1-.745-.3l-.1.333c.261.029.525.082.786.16 2.328.7 3.64 3.175 2.933 5.528-.707 2.353-3.167 3.694-5.494 2.995-2.327-.7-3.64-3.175-2.933-5.528a4.51 4.51 0 0 1 .35-.845l-.54-.163c-.03.265-.085.531-.164.796-.708 2.353-3.168 3.694-5.495 2.994-2.327-.7-3.64-3.174-2.933-5.527.708-2.354 3.168-3.694 5.495-2.995.295.089.574.206.835.349l.083-.276Z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill="url(#pattern-home-hero-btn-circles-0)"
                    fill-opacity=".6"
                    fill-rule="evenodd"
                    d="M7.959 10.053a4.368 4.368 0 0 1-.889-.17c-2.327-.7-3.64-3.174-2.933-5.527C4.845 2.002 7.305.662 9.632 1.36c2.327.7 3.64 3.174 2.933 5.528-.06.197-.131.387-.214.57l.46.138c.032-.198.078-.396.137-.593.707-2.353 3.167-3.694 5.494-2.995 2.328.7 3.64 3.175 2.933 5.528-.707 2.353-3.167 3.694-5.494 2.995a4.377 4.377 0 0 1-.745-.3l-.1.333c.261.029.525.082.786.16 2.328.7 3.64 3.175 2.933 5.528-.707 2.353-3.167 3.694-5.494 2.995-2.327-.7-3.64-3.175-2.933-5.528a4.51 4.51 0 0 1 .35-.845l-.54-.163c-.03.265-.085.531-.164.796-.708 2.353-3.168 3.694-5.495 2.994-2.327-.7-3.64-3.174-2.933-5.527.708-2.354 3.168-3.694 5.495-2.995.295.089.574.206.835.349l.083-.276Z"
                    clip-rule="evenodd"
                  ></path>
                  <defs>
                    <radialGradient
                      id="paint0_radial_2146_58993"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientTransform="rotate(-31.559 22.628 3.049) scale(17.064 11.3981)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FFD9B0"></stop>
                      <stop offset=".807" stop-color="#FD9F3B"></stop>
                      <stop offset="1" stop-color="#FF8709"></stop>
                    </radialGradient>
                    <pattern
                      id="pattern-home-hero-btn-circles-0"
                      width="5.556"
                      height="5.556"
                      patternContentUnits="objectBoundingBox"
                    >
                      <use transform="scale(.01111)"></use>
                    </pattern>
                  </defs>
                </TimelineSvgA>
                <TimelineSvgB
                  fill="none"
                  width="62"
                  height="63"
                  viewBox="0 0 62 63"
                  aria-hidden="true"
                >
                  <path
                    fill="url(#paint0_radial_2771_42684)"
                    d="m34.246 27.525 10.197-13.201a.26.26 0 0 1 .362-.047L61.76 27.372a.26.26 0 0 1 .046.366c-7.386 9.336-20.882 11.074-30.391 3.919l16.975 13.112c.112.087.133.25.046.362L35.34 62.085a.26.26 0 0 1-.365.046c-9.41-7.444-11.1-21.093-3.746-30.616l-13.255 17.16a.259.259 0 0 1-.362.046L.658 35.626a.26.26 0 0 1-.046-.365c7.386-9.337 20.881-11.074 30.391-3.92l-16.935-13.08a.259.259 0 0 1-.047-.363L27.117.944a.26.26 0 0 1 .365-.046c8.08 6.393 10.469 17.361 6.326 26.362-.129.278.25.508.439.264l-.001.001Z"
                  ></path>
                  <path
                    fill="url(#pattern-home-hero-btn-windmill-0)"
                    fill-opacity=".6"
                    d="m34.246 27.525 10.197-13.201a.26.26 0 0 1 .362-.047L61.76 27.372a.26.26 0 0 1 .046.366c-7.386 9.336-20.882 11.074-30.391 3.919l16.975 13.112c.112.087.133.25.046.362L35.34 62.085a.26.26 0 0 1-.365.046c-9.41-7.444-11.1-21.093-3.746-30.616l-13.255 17.16a.259.259 0 0 1-.362.046L.658 35.626a.26.26 0 0 1-.046-.365c7.386-9.337 20.881-11.074 30.391-3.92l-16.935-13.08a.259.259 0 0 1-.047-.363L27.117.944a.26.26 0 0 1 .365-.046c8.08 6.393 10.469 17.361 6.326 26.362-.129.278.25.508.439.264l-.001.001Z"
                  ></path>
                  <defs>
                    <radialGradient
                      id="paint0_radial_2771_42684"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientTransform="rotate(-142.317 24.316 16.274) scale(34.5669)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#F0FCFF"></stop>
                      <stop offset=".672" stop-color="#9BEDFF"></stop>
                      <stop offset=".76" stop-color="#98ECFF"></stop>
                      <stop offset=".849" stop-color="#5BE1FF"></stop>
                      <stop offset=".948" stop-color="#00BAE2"></stop>
                    </radialGradient>
                    <pattern
                      id="pattern-home-hero-btn-windmill-0"
                      width="2.279"
                      height="2.279"
                      patternContentUnits="objectBoundingBox"
                    >
                      <use transform="scale(.00456)"></use>
                    </pattern>
                  </defs>
                </TimelineSvgB>
                <TimelineSvgC
                  fill="none"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  aria-hidden="true"
                >
                  <path
                    fill="url(#paint0_linear_2771_24471)"
                    d="M.27 7.683a1 1 0 0 1 .372-1.364L10.995.409a1 1 0 0 1 1.364.373l5.91 10.352a1 1 0 0 1-.373 1.365l-10.353 5.91a1 1 0 0 1-1.364-.373L.27 7.683Z"
                  ></path>
                  <path
                    fill="url(#pattern-home-hero-btn-square-0)"
                    fill-opacity=".6"
                    d="M.27 7.683a1 1 0 0 1 .372-1.364L10.995.409a1 1 0 0 1 1.364.373l5.91 10.352a1 1 0 0 1-.373 1.365l-10.353 5.91a1 1 0 0 1-1.364-.373L.27 7.683Z"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear_2771_24471"
                      x1="24.297"
                      x2="3.329"
                      y1="7.113"
                      y2="17.933"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset=".144" stop-color="#FFE9FE"></stop>
                      <stop offset="1" stop-color="#FF96F9"></stop>
                    </linearGradient>
                    <pattern
                      id="pattern-home-hero-btn-square-0"
                      width="5.08"
                      height="5.08"
                      patternContentUnits="objectBoundingBox"
                    >
                      <use transform="scale(.01016)"></use>
                    </pattern>
                  </defs>
                </TimelineSvgC>
                <TimelineSvgD
                  fill="none"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  aria-hidden="true"
                >
                  <path
                    fill="url(#paint0_linear_2771_24384)"
                    fill-rule="evenodd"
                    d="m6.324 7.326-4.936-.849a1.078 1.078 0 0 0-.374 2.124l4.93.887-4.091 2.89a1.078 1.078 0 0 0 1.238 1.766l4.112-2.858-.849 4.936a1.078 1.078 0 0 0 2.124.374l.887-4.93 2.89 4.09a1.078 1.078 0 0 0 1.766-1.238l-2.858-4.111 4.936.848a1.078 1.078 0 0 0 .374-2.124l-4.93-.887 4.09-2.89a1.078 1.078 0 0 0-1.238-1.766l-4.111 2.858.848-4.935a1.078 1.078 0 0 0-2.124-.374l-.886 4.93-2.89-4.091a1.078 1.078 0 0 0-1.766 1.238l2.858 4.112Z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill="url(#pattern-home-hero-btn-star-0)"
                    fill-opacity=".6"
                    fill-rule="evenodd"
                    d="m6.324 7.326-4.936-.849a1.078 1.078 0 0 0-.374 2.124l4.93.887-4.091 2.89a1.078 1.078 0 0 0 1.238 1.766l4.112-2.858-.849 4.936a1.078 1.078 0 0 0 2.124.374l.887-4.93 2.89 4.09a1.078 1.078 0 0 0 1.766-1.238l-2.858-4.111 4.936.848a1.078 1.078 0 0 0 .374-2.124l-4.93-.887 4.09-2.89a1.078 1.078 0 0 0-1.238-1.766l-4.111 2.858.848-4.935a1.078 1.078 0 0 0-2.124-.374l-.886 4.93-2.89-4.091a1.078 1.078 0 0 0-1.766 1.238l2.858 4.112Z"
                    clip-rule="evenodd"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear_2771_24384"
                      x1="24.729"
                      x2="25.351"
                      y1="8.665"
                      y2="20.075"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0AE448"></stop>
                      <stop offset="1" stop-color="#0085D0"></stop>
                    </linearGradient>
                  </defs>
                </TimelineSvgD>
                <TimelineImage src={item.imageUrl} />
                <TimelineDate bgColor={item.color}>{item.date}</TimelineDate>
                <TimelineTitle bgColor={item.color}>{item.title}</TimelineTitle>
              </TimelineImageWrap>
            </TimelineImageRef>
          ))}
        </TimelineBox>
      </TimelineLayout>
    </>
  );
};

export default ScrollTimeLine;
