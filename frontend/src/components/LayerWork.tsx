import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";

interface LayerWorkProps {
  onClose: () => void; // onClose 함수의 타입을 명시적으로 지정
}

interface visualProps {
  visualUrl: string;
}

const titleFadeIn = keyframes`  
  0% {
    clip-path: inset(0 0 100% 0);
  }
  100% {
    clip-path: inset(0 0 0 0);
  }
`;

const LayerWorkLayout = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 11;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Container = styled.div``;

const VisualWrap = styled.div<visualProps>`
  position: relative;
  width: 100%;
  height: 150vh;
  background: url(${(props) => props.visualUrl}) 0 0 no-repeat;
  background-size: cover;
  background-position: center;
  @keyframes visualShow {
    0% {
      transform: scale(1.2);
      clip-path: inset(100% 0 0 0);
    }
    100% {
      transform: scale(1);
      clip-path: inset(0 0 0 0);
    }
  }
  animation: 1s visualShow forwards;
`;

const Visual = styled.div``;

const VisualDescriptionWrap = styled.div`
  position: absolute;
  top: 45%;
  left: 2.60417vw;
`;

const VisualDescription = styled.div`
  padding-top: 1.30208vw;
`;

const Title = styled.div`
  display: flex;
  align-items: baseline;
  gap: 20px;
  font-size: 140px;
  font-weight: bold;
  mix-blend-mode: overlay;
  clip-path: inset(0 0 100% 0);
  animation: 1s ${titleFadeIn} forwards;
  animation-delay: 0.5s;
`;

const Svg = styled.svg`
  width: 30px;
  height: 30px;
  @keyframes arrowAnimation {
    0% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

const SvgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-size: 0px;
  border: 1px solid #fff;
  border-radius: 100%;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    ${Svg} {
      animation: 1s ${(props) => props.theme.defaultBezier} arrowAnimation
        forwards;
    }
  }
`;

const Description = styled.div`
  font-size: 25px;
  clip-path: inset(0 0 100% 0);
  animation: 1s ${titleFadeIn} forwards;
  animation-delay: 1s;
  &:nth-child(odd) {
    padding-top: 20px;
  }
`;

const LayerClose = styled.div`
  display: flex;
  justify-content: flex-end;
  position: sticky;
  top: 0px;
  z-index: 10;
  padding: 30px 45px;
  color: var(--black);
  text-align: right;
  overflow: hidden;
`;

const LayerCloseBtnSpan = styled.span`
  transition: transform 0.3s ${(props) => props.theme.defaultBezier};
`;

const LayerCloseBtn = styled.div`
  display: flex;
  position: relative;
  padding: 0px 4px 4px 4px;
  font-weight: bold;
  cursor: pointer;
  &:after {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 1px;
    background: var(--black);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 1s ${(props) => props.theme.defaultBezier};
  }

  @keyframes CloseHoverAnimation {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0%);
    }
  }

  &:hover {
    &:after {
      transform: scaleX(1);
      transform-origin: left;
    }
    ${LayerCloseBtnSpan} {
      animation: 0.3s ${(props) => props.theme.defaultBezier}
        CloseHoverAnimation;
      &:nth-child(1) {
        animation-delay: 0.1s;
      }
      &:nth-child(2) {
        animation-delay: 0.2s;
      }
      &:nth-child(3) {
        animation-delay: 0.3s;
      }
      &:nth-child(4) {
        animation-delay: 0.4s;
      }
      &:nth-child(5) {
        animation-delay: 0.5s;
      }
    }
  }
`;

const LayerWork: React.FC<LayerWorkProps> = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const items = [
    {
      id: 1,
      visualurl: "/assets/images/work/slowglow/visual.webp",
      title: "SlowGlow",
      description: [
        {
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
        },
        {
          text: "Minima deleniti cumque, quas inventore similique vitae",
        },
        {
          text: "Facilis commodi exercitationem alias impedit",
        },
        {
          text: "blanditiis eius quos odit impedit itaque, illo quidem!",
        },
        {
          text: "porro suscipit consequuntur cum temporibus",
        },
        {
          text: "soluta voluptate veniam iste iure, commodi odit",
        },
      ],
    },
  ];

  return (
    <>
      <LayerWorkLayout>
        <Container>
          {items.map((item, index) => (
            <>
              <VisualWrap key={index} visualUrl={item.visualurl}>
                <LayerClose onClick={onClose}>
                  <LayerCloseBtn>
                    <LayerCloseBtnSpan>C</LayerCloseBtnSpan>
                    <LayerCloseBtnSpan>l</LayerCloseBtnSpan>
                    <LayerCloseBtnSpan>o</LayerCloseBtnSpan>
                    <LayerCloseBtnSpan>s</LayerCloseBtnSpan>
                    <LayerCloseBtnSpan>e</LayerCloseBtnSpan>
                  </LayerCloseBtn>
                </LayerClose>
                <Visual />
                <VisualDescriptionWrap>
                  <Title>
                    {item.title}
                    <SvgWrap>
                      <Svg fill="currentColor" viewBox="0 0 256 256">
                        <path d="M198,64V168a6,6,0,0,1-12,0V78.48L68.24,196.24a6,6,0,0,1-8.48-8.48L177.52,70H88a6,6,0,0,1,0-12H192A6,6,0,0,1,198,64Z"></path>
                      </Svg>
                    </SvgWrap>
                  </Title>
                  <VisualDescription>
                    {item.description.map((desc, index) => (
                      <Description key={index}>{desc.text}</Description>
                    ))}
                  </VisualDescription>
                </VisualDescriptionWrap>
              </VisualWrap>
            </>
          ))}
        </Container>
      </LayerWorkLayout>
    </>
  );
};

export default LayerWork;
