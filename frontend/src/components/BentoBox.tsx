import React, { useRef } from "react";
import styled from "styled-components";
import Title from "../components/Title";
import { useAddClassObserver } from "../assets/js/useAddClassObserver";

const BentoBoxLayout = styled.div`
  display: flex;
  gap: 10px;
  height: 100vh;
  padding: 0px 5.20833vw;
`;

const BoxLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 70%;
`;

const BoxLeftTop = styled.div`
  display: flex;
  gap: 10px;
  height: 70%;
`;

const BoxLeftTopLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 30%;
  height: 100%;
  div {
    background: #fcf751;
    transition: 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
    will-change: transition clip-path;

    &.visible {
      &:nth-child(1) {
        clip-path: inset(0 0 0 0);
      }
      &:nth-child(2) {
        clip-path: inset(0 0 0 0);
      }
    }

    &:nth-child(1) {
      height: 70%;
      background: url("/assets/images/work/asof.png") center no-repeat;
      background-size: cover;
      transition-delay: 0.4s;
      clip-path: inset(0 100% 0 0);
    }
    &:nth-child(2) {
      height: 30%;
      background: url("/assets/images/work/day.jpg") center no-repeat;
      transition-delay: 0.6s;
      clip-path: inset(0 0 0 100%);
    }
  }
`;

const BoxLeftTopRight = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 70%;
  gap: 10px;
  div {
    &.visible {
      &:nth-child(1) {
        clip-path: inset(0 0 0 0);
      }
      &:nth-child(2) {
        clip-path: inset(0 0 0 0);
      }
      &:nth-child(3) {
        clip-path: inset(0 0 0 0);
      }
    }
  }
  div {
    background: #fcf751;
    transition: 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
    &:nth-child(1) {
      width: calc(50% - 5px);
      background: url("/assets/images/work/gospheres.jpg") center no-repeat;
      transition-delay: 0.3s;
      clip-path: inset(0 0 100% 0);
    }
    &:nth-child(2) {
      width: calc(50% - 5px);
      background: url("/assets/images/work/noice.jpg") center no-repeat;
      transition-delay: 0.1s;
      clip-path: inset(0 100% 0 0);
    }
    &:nth-child(3) {
      width: 100%;
      background: url("/assets/images/work/day.jpg") center no-repeat;
      transition-delay: 0.2s;
      clip-path: inset(100% 0 0 0);
    }
  }
`;

const BoxLeftBottom = styled.div`
  display: flex;
  gap: 10px;
  height: 30%;
  div {
    background: #fcf751;
    transition: 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
    &:nth-child(1) {
      width: 70%;
      transition-delay: 0.1s;
      background: url("/assets/images/work/slowglow.png") center no-repeat;
      clip-path: inset(0 100% 0 0);
    }
    &:nth-child(2) {
      width: 30%;
      transition-delay: 0.2s;
      background: url("/assets/images/work/gospheres.jpg") top center no-repeat;
      clip-path: inset(0 0 100% 0);
    }
    &.visible {
      clip-path: inset(0 0 0 0);
    }
  }
`;

const BoxRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  gap: 10px;
  div {
    height: 50%;
    background: #fcf751;
    transition: 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
    &:nth-child(1) {
      background: url("/assets/images/work/day.jpg") center no-repeat;
      transition-delay: 0.2s;
      clip-path: inset(100% 0 0 0);
    }
    &:nth-child(2) {
      background: url("/assets/images/work/carhartt.jpg") center no-repeat;
      clip-path: inset(0 0 0 100%);
      transition-delay: 0.4s;
    }
    &.visible {
      clip-path: inset(0 0 0 0);
    }
  }
`;
const BentoBox = () => {
  const Ref1 = useRef<HTMLDivElement>(null);
  const Ref2 = useRef<HTMLDivElement>(null);
  const Ref3 = useRef<HTMLDivElement>(null);
  const Ref4 = useRef<HTMLDivElement>(null);
  const Ref5 = useRef<HTMLDivElement>(null);
  const Ref6 = useRef<HTMLDivElement>(null);
  const Ref7 = useRef<HTMLDivElement>(null);
  const Ref8 = useRef<HTMLDivElement>(null);
  const Ref9 = useRef<HTMLDivElement>(null);

  useAddClassObserver("visible", Ref1, true);
  useAddClassObserver("visible", Ref2, true);
  useAddClassObserver("visible", Ref3, true);
  useAddClassObserver("visible", Ref4, true);
  useAddClassObserver("visible", Ref5, true);
  useAddClassObserver("visible", Ref6, true);
  useAddClassObserver("visible", Ref7, true);
  useAddClassObserver("visible", Ref8, true);
  useAddClassObserver("visible", Ref9, true);

  return (
    <>
      <Title titleName="b" />
      <BentoBoxLayout>
        <BoxLeft>
          <BoxLeftTop>
            <BoxLeftTopLeft>
              <div ref={Ref1}></div>
              <div ref={Ref2}></div>
            </BoxLeftTopLeft>
            <BoxLeftTopRight>
              <div ref={Ref3}></div>
              <div ref={Ref4}></div>
              <div ref={Ref5}></div>
            </BoxLeftTopRight>
          </BoxLeftTop>
          <BoxLeftBottom>
            <div ref={Ref6}></div>
            <div ref={Ref7}></div>
          </BoxLeftBottom>
        </BoxLeft>
        <BoxRight>
          <div ref={Ref8}></div>
          <div ref={Ref9}></div>
        </BoxRight>
      </BentoBoxLayout>
    </>
  );
};

export default BentoBox;
