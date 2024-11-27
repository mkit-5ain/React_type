import React, { useRef } from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";

import { useAddClassObserver } from "../../assets/js/useAddClassObserver";

const SlideTitle = styled.div`
  opacity: 0;
`;

const MySelfTrail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: 1000px;
  margin: 10vw auto 0px;
  img {
    width: 100%;
  }
`;

const MySelfTrailTitle = styled.div`
  font-size: 60px;
  font-weight: bold;
`;

const MySelfImageBox = styled.div`
  display: flex;
  gap: 25px;
`;

const SectionAlert = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  position: sticky;
  bottom: 20px;
  left: 0px;
  translate: 0px -5vw;
  rotate: 360deg;
  transition: 1s ${(props) => props.theme.defaultBezier};
  opacity: 0;
  &.active {
    translate: 0px 0px;
    rotate: 0deg;
    opacity: 1;
  }
`;

const Alert = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 30px;
  border-radius: 50px;
  color: #fff;
  background: #000;

  @keyframes AlertIn {
    100% {
      clip-path: inset(0 0 0 0);
    }
  }

  &.active {
    clip-path: inset(0 50% 0 50%);
    animation: 1.5s cubic-bezier(0.18, 0.89, 0.32, 1.28) AlertIn forwards
      alternate;
  }
`;

const AlertText = styled.div``;

const MySelfTrailPhoto = styled.div`
  .swiper {
    width: 100%;
    height: 100%;
    margin-top: 100px;
    overflow: inherit;
    .swiper-slide {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 25px;
      text-align: center;
      width: 450px;
      height: 100%;
      transition: 0.5s ease-in-out;
      opacity: 0.1;

      &.swiper-slide-active {
        opacity: 1;
        ${SlideTitle} {
          opacity: 1;
        }
      }

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .swiper-button-prev {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      bottom: 0px;
      right: 50%;
      z-index: 100;
      width: 40px;
      height: 40px;
      border-radius: 100%;
      background: #424242;
      translate: 175px 10px;
      cursor: pointer;
      &:after {
        content: "";
        width: 7px;
        height: 14px;
        margin-right: 3px;
        background: url("/assets/images/icon/i_prev.svg") 0 0 no-repeat;
        background-size: cover;
      }
      &.swiper-button-disabled {
        pointer-events: none;
        opacity: 0.5;
      }
    }
    .swiper-button-next {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      bottom: 0px;
      right: 50%;
      z-index: 100;
      width: 40px;
      height: 40px;
      border-radius: 100%;
      background: #424242;
      cursor: pointer;
      translate: 225px 10px;
      &:after {
        content: "";
        width: 7px;
        height: 14px;
        margin-left: 3px;
        background: url("/assets/images/icon/i_next.svg") 0 0 no-repeat;
        background-size: cover;
      }
      &.swiper-button-disabled {
        pointer-events: none;
        opacity: 0.5;
      }
    }
  }
`;
const MySelfTrailPhotoTitle = styled.div`
  max-width: 1000px;
  margin: 10vw auto 0px;
  font-size: 25px;
  font-weight: bold;
  color: #8a8a8a;
`;

const Trail = () => {
  const selfAlertRef = useRef<HTMLDivElement>(null);
  useAddClassObserver("active", selfAlertRef, true);
  return (
    <>
      <MySelfTrail>
        <MySelfTrailTitle>
          <p>트레일 러닝.</p>
          <p>자연을 두르다.</p>
        </MySelfTrailTitle>
        <div>
          <img src="/assets/images/myself/trail/1.webp" alt="" />
        </div>
        <MySelfImageBox>
          <p>
            <img src="/assets/images/myself/trail/2.webp" alt="" />
          </p>
          <p>
            <img src="/assets/images/myself/trail/3.webp" alt="" />
          </p>
        </MySelfImageBox>
        <SectionAlert ref={selfAlertRef}>
          <Alert>
            <AlertText>2024 Jangsu Trail Race</AlertText>
          </Alert>
        </SectionAlert>
      </MySelfTrail>

      <MySelfTrailPhoto>
        <MySelfTrailPhotoTitle>
          <p>등산도 안하던 내가</p>
          <p>산을 뛰어 다닐줄은 몰랐지</p>
          <p>쓰레기는 집으로.</p>
        </MySelfTrailPhotoTitle>
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={25}
          navigation={true}
          modules={[Navigation]}
        >
          <SwiperSlide>
            <img src="/assets/images/myself/trail/5.webp" alt="" />
            <SlideTitle>KOREA 50K 1/4</SlideTitle>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/images/myself/trail/6.webp" alt="" />
            <SlideTitle>KOREA 50K 2/4</SlideTitle>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/images/myself/trail/7.webp" alt="" />
            <SlideTitle>KOREA 50K 3/4</SlideTitle>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/images/myself/trail/8.webp" alt="" />
            <SlideTitle>KOREA 50K 4/4</SlideTitle>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/images/myself/trail/9.webp" alt="" />
            <SlideTitle>Jangsu Trail Race 1/3</SlideTitle>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/images/myself/trail/10.webp" alt="" />
            <SlideTitle>Jangsu Trail Race 2/3</SlideTitle>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/images/myself/trail/11.webp" alt="" />
            <SlideTitle>Jangsu Trail Race 3/3</SlideTitle>
          </SwiperSlide>
        </Swiper>
      </MySelfTrailPhoto>
    </>
  );
};

export default Trail;
