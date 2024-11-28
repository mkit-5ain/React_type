import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useAddClassObserver } from "../assets/js/useAddClassObserver";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Title from "./Title";

gsap.registerPlugin(ScrollTrigger);

const HorizontalLayout = styled.div`
  overflow: hidden;
`;

const HorizontalContainer = styled.div`
  display: flex;
`;

const HorizontalWrap = styled.div`
  display: flex;
  gap: 26.04167vw;
  padding-left: 2.60417vw;
`;

const HorizontalTitle = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 100vh;
  font-size: 50vw;
  font-weight: bold;
  text-transform: capitalize;
  background: linear-gradient(227deg, #fffce1 30%, #fffbb0 70%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0.52083vw 0.52083vw 0.52083vw black);
  @media ${(props) => props.theme.device.mobile} {
  }
`;

const HorizontalBubble = styled.div`
  position: absolute;
  padding: 1.5625vw 2.60417vw;
  font-size: 4.16667vw;
  font-weight: bold;
  border: 2px solid var(--white);
  border-radius: 2.08333vw;
  background: var(--black);
  box-shadow: 0.26042vw 0.26042vw 0.52083vw 0vw #000;
  -webkit-text-fill-color: initial;
  transition: 1s var(--bezier);
  opacity: 0;
  &.active {
    opacity: 1;
  }
`;

const HorizontalBubbleA = styled(HorizontalBubble)`
  top: 55%;
  left: 17%;
  transform: translate(-0.52083vw, -25vw) rotate(720deg);
  &.active {
    transform: translate(0px, 0px) rotate(15deg);
  }
`;

const HorizontalBubbleB = styled(HorizontalBubble)`
  top: 35%;
  right: 46%;
  transform: translateX(20vw);
  &.active {
    transform: translateX(0px);
  }
`;

const HorizontalBubbleC = styled(HorizontalBubble)`
  bottom: 30%;
  right: 23%;
  transform: scale(2);
  &.active {
    transform: scale(1) rotate(-25deg);
  }
`;

const HorizontalService = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const HorizontalWrapRef = useRef<HTMLDivElement>(null);

  const HorizontalBubbleRefA = useRef<HTMLDivElement>(null);
  const HorizontalBubbleRefB = useRef<HTMLDivElement>(null);
  const HorizontalBubbleRefC = useRef<HTMLDivElement>(null);

  useAddClassObserver("active", HorizontalBubbleRefA, true);
  useAddClassObserver("active", HorizontalBubbleRefB, true);
  useAddClassObserver("active", HorizontalBubbleRefC, true);

  const scrollHorizontal = () => {
    const sections = gsap.utils.toArray(HorizontalWrapRef.current!);
    const scrollTween = gsap.to(sections, {
      xPercent: -55 * sections.length,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: true,
        end: "+=2000",
      },
    });
  };

  useEffect(() => {
    scrollHorizontal();
  }, []);

  return (
    <>
      <Title titleName="자네, 일은 어디까지 해봤나?" />
      <HorizontalLayout>
        <HorizontalContainer ref={containerRef}>
          <HorizontalWrap ref={HorizontalWrapRef}>
            <HorizontalTitle>
              services
              <HorizontalBubbleA ref={HorizontalBubbleRefA}>
                Role
              </HorizontalBubbleA>
              <HorizontalBubbleB ref={HorizontalBubbleRefB}>
                Position
              </HorizontalBubbleB>
              <HorizontalBubbleC ref={HorizontalBubbleRefC}>
                Function
              </HorizontalBubbleC>
            </HorizontalTitle>
          </HorizontalWrap>
        </HorizontalContainer>
      </HorizontalLayout>
    </>
  );
};

export default HorizontalService;
