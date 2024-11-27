import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Helmet } from "react-helmet";

import styled from "styled-components";
import ServiceDescription from "../components/service/ServiceDescription";

const LayerWorkLayout = styled.div`
  overflow: hidden;
`;

const Container = styled.div``;

// const VisualWrap = styled.div<{ imageUrl: string }>`
//   position: absolute;
//   top: 0px;
//   left: 0px;
//   z-index: -1;
//   width: 30%;
//   height: 30%;
//   background-position: center;
//   background: url(${(props) => props.imageUrl}) 0 0 / cover no-repeat;
//   filter: blur(5px);
// `;

// const Visual = styled.div``;

// const TitleWrap = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: flex-end;
//   position: relative;
//   line-height: 1;
//   font-weight: bold;
//   gap: 25px;

//   @media ${(props) => props.theme.device.mobile} {
//     padding: 0px 5.20833vw;
//   }
// `;

// const Title = styled.div``;

// const LayerClose = styled.div``;

// const LayerCloseBtnSpan = styled.span`
//   transition: transform 0.3s ${(props) => props.theme.defaultBezier};
// `;

// const LayerCloseBtn = styled.div`
//   display: flex;
//   position: relative;
//   padding: 0px 4px 4px 4px;
//   font-size: 22px;
//   font-weight: bold;
//   cursor: pointer;
//   @media ${(props) => props.theme.device.mobile} {
//     font-size: 14px;
//   }
//   &:after {
//     content: "";
//     position: absolute;
//     bottom: 0px;
//     left: 0px;
//     width: 100%;
//     height: 1px;
//     background: var(--white);
//     transform: scaleX(0);
//     transform-origin: right;
//     transition: transform 1s ${(props) => props.theme.defaultBezier};
//   }

//   @keyframes CloseHoverAnimation {
//     0% {
//       transform: translateY(-100%);
//     }
//     100% {
//       transform: translateY(0%);
//     }
//   }

//   &:hover {
//     &:after {
//       transform: scaleX(1);
//       transform-origin: left;
//     }
//     ${LayerCloseBtnSpan} {
//       animation: 0.3s ${(props) => props.theme.defaultBezier}
//         CloseHoverAnimation;
//       &:nth-child(1) {
//         animation-delay: 0.1s;
//       }
//       &:nth-child(2) {
//         animation-delay: 0.2s;
//       }
//       &:nth-child(3) {
//         animation-delay: 0.3s;
//       }
//       &:nth-child(4) {
//         animation-delay: 0.4s;
//       }
//       &:nth-child(5) {
//         animation-delay: 0.5s;
//       }
//     }
//   }
// `;

const LayerIntro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 10;
  line-height: 1;
  width: 100%;
  height: 100%;
  padding: 321px 2.60417vw 0px;
  color: ${(props) => props.theme.black};
  font-size: 10.41667vw;
  font-weight: bold;
  background: ${(props) => props.theme.white};
  clip-path: inset(100% 0 0 0);

  @media ${(props) => props.theme.device.mobile} {
    padding: 59px 5.20833vw 0px;
  }
`;

const LayerIntroWrap = styled.div`
  font-weight: bold;
  translate: 0px 20px;
  opacity: 0;
  @keyframes show {
    100% {
      translate: 0px 0px;
      opacity: 1;
    }
  }
  animation: 1s ease show forwards;
  animation-delay: 0.5s;
`;
const Service = () => {
  const [isDisplay, setIsDisplay] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const componentTimer = setTimeout(() => {
      setIsDisplay(false);
    });
    return () => clearTimeout(componentTimer);
  }, []);

  if (!location.state || !location.state.item) {
    return <div>No item found</div>;
  }

  const { item } = location.state;

  return (
    <>
      <Helmet>
        <title>Mxxement - Work</title>
      </Helmet>
      <LayerWorkLayout>
        {isDisplay && (
          <LayerIntro>
            <LayerIntroWrap>
              <p>{item.title}</p>
              <p>{item.state}</p>
            </LayerIntroWrap>
          </LayerIntro>
        )}
        {!isDisplay && (
          <Container>
            {/* <VisualWrap imageUrl={item.imageUrl} />
            <LayerClose>
              <LayerCloseBtn onClick={handleGoBack}>
                <LayerCloseBtnSpan>C</LayerCloseBtnSpan>
                <LayerCloseBtnSpan>l</LayerCloseBtnSpan>
                <LayerCloseBtnSpan>o</LayerCloseBtnSpan>
                <LayerCloseBtnSpan>s</LayerCloseBtnSpan>
                <LayerCloseBtnSpan>e</LayerCloseBtnSpan>
              </LayerCloseBtn>
            </LayerClose>
            <TitleMarqueeWrap>
              <TitleMarqueeInner>
                <TitleMarquee>{item.title}</TitleMarquee>
                <TitleMarquee>{item.title}</TitleMarquee>
                <TitleMarquee>{item.title}</TitleMarquee>
                <TitleMarquee>{item.title}</TitleMarquee>
              </TitleMarqueeInner>
            </TitleMarqueeWrap>
            <Visual />
            <TitleWrap>
              <Title>
                <p>{item.title}</p>
                <p>{item.state}</p>
              </Title>
            </TitleWrap> */}
            <ServiceDescription />
          </Container>
        )}
      </LayerWorkLayout>
    </>
  );
};

export default Service;
