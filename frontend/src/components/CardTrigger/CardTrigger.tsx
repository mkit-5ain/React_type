import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import Title from "../Title";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CardLayout = styled.div`
  opacity: 0;
  transition: 1s ${(props) => props.theme.defaultBezier};
  position: relative;
  margin-top: 200px;
  overflow: hidden;
  @media ${(props) => props.theme.device.tablet} {
    margin-top: 150px;
  }
  @media ${(props) => props.theme.device.mobile} {
    margin-top: 100px;
  }

  --100px: 100px;
`;

const CardImageLayout = styled.div`
  height: 1850px;
  margin-bottom: 200px;
  @media ${(props) => props.theme.device.tablet} {
    height: 1700px;
    margin-bottom: 150px;
  }
  @media ${(props) => props.theme.device.mobile} {
    height: 1550px;
    margin-bottom: 100px;
  }
`;

const CardImageWrap = styled.div`
  position: absolute;
  top: 0px;
  left: 50%;
  z-index: 10;
  width: 500px;
  height: 500px;
  margin-left: -250px;
  @media ${(props) => props.theme.device.tablet} {
    width: 350px;
    height: 350px;
    margin-left: -175px;
  }
  @media ${(props) => props.theme.device.mobile} {
    width: 200px;
    height: 200px;
    margin-left: -100px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: drop-shadow(2px 4px 6px var(--black));
`;

const CardTrigger = () => {
  const cardParentRefA = useRef<HTMLDivElement>(null);
  const cardParentRefB = useRef<HTMLDivElement>(null);
  const cardParentRefC = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const cardRefA = useRef<HTMLImageElement>(null);
  const cardRefB = useRef<HTMLImageElement>(null);
  const cardRefC = useRef<HTMLImageElement>(null);

  const windowWidth = window.innerWidth;

  useEffect(() => {
    let xOffset = "150px";

    if (windowWidth < 768) {
      xOffset = "75px";
    } else if (windowWidth < 1280) {
      xOffset = "100px";
    }

    if (cardRef.current) {
      cardRef.current.style.opacity = "1";
    }

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(cardRefA.current, {
      rotate: -20,
      scale: 0.95,
      x: "-" + xOffset,
      width: "100%",
      transformOrigin: "bottom center",
      scrollTrigger: {
        trigger: cardParentRefA.current,
        start: "center center",
        end: "+=1350",
        pin: true,
        pinSpacing: true,
        scrub: true,
      },
    });

    gsap.to(cardRefB.current, {
      scale: 1.2,
      width: "100%",
      scrollTrigger: {
        trigger: cardParentRefB.current,
        start: "center center",
        end: "+=1350",
        pin: true,
        pinSpacing: true,
        scrub: true,
      },
    });

    gsap.to(cardRefC.current, {
      rotate: 20,
      scale: 0.95,
      x: xOffset,
      width: "100%",
      transformOrigin: "bottom center",
      scrollTrigger: {
        trigger: cardParentRefC.current,
        start: "center center",
        end: "+=1350",
        pin: true,
        pinSpacing: true,
        scrub: true,
      },
    });
  }, [windowWidth]);

  return (
    <>
      <Title titleName="잠깐, 들여다보기 전에." />
      <CardLayout ref={cardRef}>
        <CardImageLayout>
          <CardImageWrap ref={cardParentRefA}>
            <CardImage
              ref={cardRefA}
              src="/assets/images/trigger/card-trigger-01.avif"
            />
          </CardImageWrap>
          <CardImageWrap ref={cardParentRefB}>
            <CardImage
              ref={cardRefB}
              src="/assets/images/trigger/card-trigger-02.avif"
            />
          </CardImageWrap>
          <CardImageWrap ref={cardParentRefC}>
            <CardImage
              ref={cardRefC}
              src="/assets/images/trigger/card-trigger-03.avif"
            />
          </CardImageWrap>
        </CardImageLayout>
      </CardLayout>
    </>
  );
};

export default CardTrigger;
