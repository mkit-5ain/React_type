import React, { useRef } from "react";
import styled from "styled-components";
import { useAddClassObserver } from "../assets/js/useAddClassObserver";

const BubbleBg = styled.div`
  position: relative;
`;

const BubbleText = styled.div`
  overflow: hidden;
`;

const BubbleTextInner = styled.span`
  display: block;
  transform: translateY(100%);
  transition: 1s ${(props) => props.theme.defaultBezier};
`;

const BubbleItem = styled.div`
  position: absolute;
  padding: 5px 10px;
  font-size: 14px;
  font-weight: bold;
  border: 2px solid ${(props) => props.theme.white};
  border-radius: 15px;
  background: ${(props) => props.theme.black};

  @media ${(props) => props.theme.device.tablet} {
    padding: 3px 8px;
    font-size: 12px;
  }
  @media ${(props) => props.theme.device.mobile} {
    padding: 2px 5px;
    font-size: 10px;
    font-weight: normal;
    border: 1px solid ${(props) => props.theme.white};
  }
`;

const BubbleA = styled(BubbleItem)`
  bottom: -10px;
  left: -30px;
  transform: translateY(-200px) rotate(360deg);
  transition: 2s ${(props) => props.theme.defaultBezier};
  opacity: 0;
`;

const BubbleB = styled(BubbleItem)`
  top: 0vw;
  right: 100px;
  opacity: 0;

  @media ${(props) => props.theme.device.tablet} {
    right: 65px;
  }
  @media ${(props) => props.theme.device.mobile} {
    top: -10px;
    right: 25px;
  }
`;

const BubbleC = styled(BubbleItem)`
  top: 20px;
  right: -20px;
  opacity: 0;
`;

const BubbleLayout = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 50px 100px;
  font-size: 50px;
  font-weight: bold;
  overflow: hidden;

  @media ${(props) => props.theme.device.tablet} {
    padding: 30px 50px 40px;
    font-size: 35px;
  }
  @media ${(props) => props.theme.device.mobile} {
    padding: 25px 25px 50px;
    font-size: 20px;
  }

  &.active {
    ${BubbleTextInner} {
      transform: translateY(0%);
    }
    ${BubbleA} {
      transform: translateY(0px) rotate(0deg);
      opacity: 1;
    }
    ${BubbleB} {
      @keyframes BubbleAnimationC {
        0% {
          transform: translate(0px, -150px) rotate(360deg);
        }
        50% {
          transform: translate(0px, 50px) rotate(180deg);
          opacity: 1;
        }
        100% {
          transform: translate(0px, 0px) rotate(-10deg);
          opacity: 1;
        }
      }
      animation: 3s ${(props) => props.theme.defaultBezier} BubbleAnimationC
        forwards;
    }
    ${BubbleC} {
      @keyframes BubbleAnimationB {
        0% {
          transform: translate(150px, 0px) rotate(180deg);
        }
        100% {
          transform: translate(0px, 0px) rotate(0deg);
          opacity: 1;
        }
      }
      animation: 2s ${(props) => props.theme.defaultBezier} BubbleAnimationB
        forwards;
      animation-delay: 1s;
    }
  }
`;

const Bubble = () => {
  const TargetRef = useRef<HTMLDivElement>(null);

  useAddClassObserver("active", TargetRef, true);

  return (
    <BubbleLayout ref={TargetRef}>
      <BubbleBg>
        <BubbleText>
          <BubbleTextInner>어서오십쇼!</BubbleTextInner>
        </BubbleText>
        <BubbleA>LXm</BubbleA>
        <BubbleB>JXXe</BubbleB>
        <BubbleC>Sx</BubbleC>
      </BubbleBg>
    </BubbleLayout>
  );
};
export default Bubble;
