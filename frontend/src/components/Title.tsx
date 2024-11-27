import React, { useRef } from "react";
import styled from "styled-components";
import { useAddClassObserver } from "../assets/js/useAddClassObserver";

const TitleLayout = styled.div`
  max-width: 1200px;
  padding: 300px calc(${(props) => props.theme.contentGutter} * 2) 20px;
  margin: 0 auto;
  overflow: hidden;

  @media ${(props) => props.theme.device.tablet} {
    padding: 150px 50px 10px;
  }
  @media ${(props) => props.theme.device.mobile} {
    padding: 101px 30px 11px;
  }
`;

const TitleLayoutInner = styled.div`
  display: flex;
  gap: 5px;
  transform: translateY(115%);
  transition: 1s ${(props) => props.theme.defaultBezier};
  &.active {
    transform: translateY(0%);
  }
`;

const Text = styled.div`
  font-size: 50px;
  font-weight: bold;
  color: #8a8a8a;
  text-transform: capitalize;
  overflow: hidden;

  @media ${(props) => props.theme.device.tablet} {
    font-size: 40px;
  }
  @media ${(props) => props.theme.device.mobile} {
    font-size: 30px;
  }
`;

const Number = styled.div`
  margin-top: 0vw;
  font-size: 1.04167vw;
`;

const Animation = styled.div`
  align-self: end;

  @keyframes underScore {
    0%,
    100% {
      background: transparent;
    }
    50% {
      background: #fffce1;
    }
  }

  &::before {
    content: "";
    display: block;
    width: 15px;
    height: 1px;
    background: #fffce1;
    animation: 1.2s underScore step-end infinite;
  }
`;

interface TitleProps {
  listItemLength?: number;
  titleName?: string;
  overlay?: string;
}

const Title = ({ listItemLength, titleName }: TitleProps) => {
  const targetRef = useRef<HTMLDivElement>(null);

  useAddClassObserver("active", targetRef, true);
  return (
    <TitleLayout>
      <TitleLayoutInner ref={targetRef}>
        <Text>{titleName}</Text>
        <Number>
          {listItemLength !== undefined ? `(${listItemLength})` : ""}
        </Number>
        <Animation />
      </TitleLayoutInner>
    </TitleLayout>
  );
};

export default Title;
