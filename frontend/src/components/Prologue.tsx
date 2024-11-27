import { useRef } from "react";
import styled from "styled-components";
import { useAddClassObserver } from "../assets/js/useAddClassObserver";

const PrologueDot = styled.span`
  position: absolute;
  bottom: 1.5625vw;
  right: -6.5vw;
  width: 4vw;
  height: 3.4vw;
  border-radius: 100%;
  background: linear-gradient(317deg, #0093ff 10%, #00ffba 90%);
  transition: 1s cubic-bezier(0.32, 0.18, 0.26, 0.84);
  opacity: 0;
  box-shadow: 1px 1px 10px 0px #151414;
`;

const PrologueItem = styled.div`
  position: relative;
  line-height: 15.625vw;
  font-size: 15.625vw;
  font-family: "Futura";
  letter-spacing: 0.78125vw;
  text-transform: uppercase;
  background: linear-gradient(235deg, #00ffba 30%, #0093ff 70%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0;
`;
const PrologueFirstItem = styled(PrologueItem)``;

const PrologueSecondItem = styled(PrologueItem)`
  &:after {
    content: "";
    position: absolute;
    bottom: -4.16667vw;
    left: 29vw;
    width: 30vw;
    height: 8vw;
    border-radius: 100px;
    background: linear-gradient(45deg, #00ffba 10%, #0093ff 90%);
    box-shadow: 1px 1px 1px 0px #151414;
    opacity: 0;
  }
`;

const PrologueThirdItem = styled(PrologueItem)``;

const PrologueLayout = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin: 300px 0px 0px 0;
  padding: 2.60417vw 0px;
  overflow: hidden;
  filter: drop-shadow(0.52083vw 0.52083vw 0.52083vw black);
  @media ${(props) => props.theme.device.mobile} {
    margin-top: 13.02083vw;
  }
  &.active {
    ${PrologueFirstItem} {
      animation: 1s introTextAnimation forwards;
    }
    ${PrologueSecondItem} {
      animation: 1s introTextAnimation forwards;
      animation-delay: 0.2s;
      &:after {
        animation: 1s TopBottomAnimation forwards;
        animation-delay: 2s;
      }
    }
    ${PrologueThirdItem} {
      animation: 1s introTextAnimation forwards;
      animation-delay: 0.4s;
    }
    ${PrologueDot} {
      animation: 1.5s dotAnimation forwards;
      animation-delay: 1s;
    }
  }
  @keyframes introTextAnimation {
    from {
      opacity: 0;
      transform: translate(-500px, -100px);
    }
    to {
      opacity: 1;
      transform: translate(-80px, 0px);
    }
  }
  @media screen and (max-width: 1250px) {
    @keyframes introTextAnimation {
      from {
        opacity: 0;
        transform: translate(-700px, -150px);
      }
      to {
        opacity: 1;
        transform: translate(-5vw, 0px);
      }
    }
  }
  @keyframes TopBottomAnimation {
    from {
      opacity: 0;
      transition: 1s cubic-bezier(0.99, -0.02, 0, 1.25);
    }
    to {
      opacity: 1;
      transition: 1s cubic-bezier(0.99, -0.02, 0, 1.25);
    }
  }
  @keyframes dotAnimation {
    10% {
      right: 0px;
      opacity: 0;
    }
    100% {
      right: 39.0625vw;
      opacity: 1;
    }
  }
`;

const Prologue = () => {
  const layoutRef = useRef<HTMLDivElement>(null);

  useAddClassObserver("active", layoutRef, true);

  return (
    <>
      <PrologueLayout ref={layoutRef}>
        <PrologueFirstItem>
          hello
          <PrologueDot />
        </PrologueFirstItem>
        <PrologueSecondItem>my style</PrologueSecondItem>
        <PrologueThirdItem>trust me.</PrologueThirdItem>
      </PrologueLayout>
    </>
  );
};

export default Prologue;
