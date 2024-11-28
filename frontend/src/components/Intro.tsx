import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const IntroLayout = styled.div`
  position: relative;
`;

const IntroWrap = styled.div`
  height: 100vh;
`;

const IntroZoom = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const IntroImage = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Intro = () => {
  const IntroZoomRef = useRef<HTMLDivElement>(null);
  const IntroZoomImageRefA = useRef<HTMLDivElement>(null);
  const IntroZoomImageRefB = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ScrollTrigger.defaults({
      toggleActions: "restart pause resume pause",
      // markers: true,
    });

    const timelineHeader = gsap.timeline({
      scrollTrigger: {
        id: "ZOOM",
        trigger: IntroZoomRef.current,
        scrub: 1,
        start: "top top",
        end: "+=100% 0%",
        pin: true,
      },
    });

    timelineHeader
      .to(
        IntroZoomImageRefA.current,
        {
          scale: 1.5,
        },
        "sameTime"
      )
      .to(
        IntroZoomImageRefB.current,
        {
          scale: 2,
        },
        "sameTime"
      );
  }, []);
  return (
    <>
      <IntroLayout>
        <IntroWrap ref={IntroZoomRef}>
          <IntroZoom>
            <IntroImage ref={IntroZoomImageRefA}>
              <img src="/assets/images/zoom/zoom.png" />
            </IntroImage>
            <IntroImage ref={IntroZoomImageRefB}>
              <img src="/assets/images/zoom/zoom-bg.png" />
            </IntroImage>
          </IntroZoom>
        </IntroWrap>
      </IntroLayout>
    </>
  );
};

export default Intro;
