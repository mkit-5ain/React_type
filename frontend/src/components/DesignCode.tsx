import React, { useState } from "react";
import styled from "styled-components";
import Title from "../components/Title";

const DesignCodeLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  margin-top: 300px;
  @media ${(props) => props.theme.device.mobile} {
    height: auto;
    margin-top: 13.02083vw;
    pointer-events: none;
  }
`;

const CodeTicket = styled.div`
  display: flex;
  justify-content: space-between;
  width: 900px;
  height: 350px;
  border-radius: 50px;
  box-sizing: border-box;
  will-change: transition;

  @media ${(props) => props.theme.device.tablet} {
    width: 750px;
    height: 300px;
  }
  @media ${(props) => props.theme.device.mobile} {
    width: 91.14583vw;
    height: 39.0625vw;
    transform: perspective(1200px) rotateY(331deg) rotateX(25deg) scale(1) !important;
    filter: drop-shadow(1px 1px 1px ${(props) => props.theme.white});
  }
`;

const CodeTicketBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  padding: 30px 50px;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  border-left: 1px solid ${(props) => props.theme.white};
  border-top: 1px solid ${(props) => props.theme.white};
  border-bottom: 1px solid ${(props) => props.theme.white};
  background: #000;
  @media ${(props) => props.theme.device.mobile} {
    padding: 3.90625vw 6.51042vw;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
`;

const CodeTicketTitle = styled.div`
  font-size: 50px;
  font-weight: bold;
  color: #f7f2bd;
  text-indent: -4px;
  @media ${(props) => props.theme.device.mobile} {
    font-size: 5.20833vw;
  }
`;

const CodeTicketIntro = styled.div`
  padding-top: 10px;
  @media ${(props) => props.theme.device.tablet} {
    padding-top: 5px;
  }
`;

const CodeTicketIntroText = styled.div`
  font-size: 14px;
  color: #9b9983;
  @media ${(props) => props.theme.device.mobile} {
    font-size: 1.82292vw;
  }
`;

const CodeTicketDescription = styled.div`
  display: flex;
  gap: 100px;
  margin-top: auto;
  color: #ada879;
  @media ${(props) => props.theme.device.mobile} {
    gap: 13.02083vw;
  }
`;

const CodeTicketContentWrap = styled.div``;

const CodeTicketTit = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: #8f8d7a;
  letter-spacing: 4px;
  @media ${(props) => props.theme.device.mobile} {
    font-size: 1.5625vw;
  }
`;

const CodeTicketContent = styled.div`
  padding-top: 10px;
  font-size: 28px;
  @media ${(props) => props.theme.device.mobile} {
    font-size: 2.99479vw;
  }
`;

const CodeBarcode = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  width: 25%;
  height: 100%;
  font-weight: bold;
  background: #ada879;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  @media ${(props) => props.theme.device.mobile} {
    font-size: 1.5625vw;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  &:after {
    content: "";
    width: 106px;
    height: 30px;
    margin-top: 10px;
    background: url("/assets/images/icon/i-barcode.svg") 0 0 / cover no-repeat;
    opacity: 0.5;
    pointer-events: none;
    @media ${(props) => props.theme.device.mobile} {
      width: 13.80208vw;
      height: 3.90625vw;
      margin-top: 1.30208vw;
      font-size: 1.5625vw;
    }
  }
  span {
    font-size: 14px;
    @media ${(props) => props.theme.device.mobile} {
      font-size: 1.82292vw;
    }
  }
`;

const CodeTicketOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  background: linear-gradient(
    105deg,
    transparent 40%,
    rgb(123 123 123) 45%,
    rgb(140 140 140) 50%,
    transparent 54%
  );
  background-size: 150% 150%;
  background-position: 100%;
  filter: brightness(1.1) opacity(0.8);
  mix-blend-mode: color-dodge;
  will-change: transition, opacity;
`;

const CodeTickets = () => {
  const [isHover, setIsHover] = useState(false);
  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);
  const [x, setPositionX] = useState<number>(0);
  const [y, setPositionY] = useState<number>(0);

  const MouseMove = (e: React.MouseEvent) => {
    let x = e.nativeEvent.offsetX;
    let y = e.nativeEvent.offsetY;
    let newRotateX = (4 / 100) * y - 5;
    let newRotateY = (1.4 / 100) * x - 5;

    setIsHover(true);

    setRotateX(newRotateX);
    setRotateY(newRotateY);

    setPositionX(x);
    setPositionY(y);
  };

  const MouseMoveLeave = () => {
    setIsHover(false);
    setRotateX(0);
    setRotateY(0);
    setPositionX(0);
    setPositionY(0);
  };

  const getTransformValue = () => {
    const rotateYValue = isHover ? rotateY : 0;
    const rotateXValue = isHover ? rotateX : 0;
    return `perspective(300px) rotateY(${rotateYValue}deg) rotateX(${rotateXValue}deg) scale(1)`;
  };

  const overlayTransformValue = () => {
    return `${x / 3 + y / 3}%`;
  };

  return (
    <CodeTicket
      onMouseMove={MouseMove}
      onMouseLeave={MouseMoveLeave}
      style={{
        transition: isHover ? "0s" : ".5s",
        transitionDelay: isHover ? "0s" : ".1s",
        transform: getTransformValue(),
      }}
    >
      <CodeTicketOverlay
        style={{
          opacity: isHover ? 1 : 0,
          transition: isHover ? "0s" : "1s",
          backgroundPosition: overlayTransformValue(),
        }}
      />
      <CodeTicketBox>
        <CodeTicketTitle>DESIGN TO CODE</CodeTicketTitle>
        <CodeTicketIntro>
          <CodeTicketIntroText>
            UI Develop, UI Design, PC Web + Mobile Web Markup
          </CodeTicketIntroText>
          <CodeTicketIntroText>
            React, Typescript, Javascript, Styled Components, UX Writing
          </CodeTicketIntroText>
        </CodeTicketIntro>
        <CodeTicketDescription>
          <CodeTicketContentWrap>
            <CodeTicketTit>DATE</CodeTicketTit>
            <CodeTicketContent>
              Mar 29, <br />
              2024
            </CodeTicketContent>
          </CodeTicketContentWrap>
          <CodeTicketContentWrap>
            <CodeTicketTit>PASSENGER</CodeTicketTit>
            <CodeTicketContent>Junesu Lim</CodeTicketContent>
          </CodeTicketContentWrap>
        </CodeTicketDescription>
      </CodeTicketBox>
      <CodeBarcode>
        Mar 29, 2024
        <br />
        <span>Junesu Lim</span>
      </CodeBarcode>
    </CodeTicket>
  );
};

const DesignCode = () => {
  return (
    <>
      <Title titleName="Made by" />
      <DesignCodeLayout>
        <CodeTickets />
      </DesignCodeLayout>
    </>
  );
};

export default DesignCode;
