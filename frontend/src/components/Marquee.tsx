import styled from "styled-components";

interface MarqueeProps {
  text: string[];
  position?: string;
  top?: string;
  marginTop?: string;
  rotate?: string;
}

const MarqueeLayout = styled.div<{
  position?: string;
  top?: string;
  marginTop?: string;
  rotate?: string;
}>`
  position: ${(props) => props.position || "static"};
  top: ${(props) => props.top || "0px"};
  left: 0px;
  margin-top: ${(props) => props.marginTop || "0px"};
  transform: rotate(${(props) => props.rotate || "0deg"});
  filter: blur(10px);

  @keyframes text-marquee {
    0% {
      transform: translateX(0%);
    }

    100% {
      transform: translateX(-100%);
    }
  }
`;

const MarqueeWrap = styled.div`
  display: flex;
  width: fit-content;
  position: relative;
`;

const MarqueeText = styled.div`
  min-width: 50vw;
  line-height: 1.15;
  padding: 0 3vw;
  font-family: "logo";
  font-size: 8vw;
  font-weight: 900;
  font-style: italic;
  text-align: center;
  white-space: nowrap;
  filter: drop-shadow(0.52083vw 0.52083vw 0.52083vw black);
  animation: text-marquee 5s linear infinite;
`;

const Marquee: React.FC<MarqueeProps> = ({
  text,
  position,
  top,
  marginTop,
  rotate,
}) => {
  return (
    <>
      <MarqueeLayout
        position={position}
        top={top}
        marginTop={marginTop}
        rotate={rotate}
      >
        <MarqueeWrap>
          {text.map((text, index) => (
            <MarqueeText key={index}>{text}</MarqueeText>
          ))}
        </MarqueeWrap>
      </MarqueeLayout>
    </>
  );
};

export default Marquee;
