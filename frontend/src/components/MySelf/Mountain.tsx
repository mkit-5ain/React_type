import React, { useRef, useEffect } from "react";
import styled from "styled-components";

import { useAddClassObserver } from "../../assets/js/useAddClassObserver";

const MySelfMountain = styled.div`
  max-width: 1000px;
  margin: 10vw auto 0px;
`;

const MySelfMountainImageBox = styled.div`
  column-count: 5;
  column-gap: 25px;
  margin-top: 100px;
  img {
    width: 100%;
    border-radius: 25px;
  }
`;

const ImageBoxTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  padding: 15px;
  border-radius: 25px;
  box-sizing: border-box;
  background: rgb(0 0 0 / 50%);
  transition: 0.3s ease-in-out;
  opacity: 0;
`;

const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  position: relative;
  margin-bottom: 25px;
  break-inside: avoid;
  transition: 0.3s ease-in-out;
  scale: 1.1;
  opacity: 0;
  filter: drop-shadow(4px 4px 4px #000);
  &:hover {
    ${ImageBoxTitle} {
      opacity: 1;
    }
  }

  &.active {
    scale: 1;
    opacity: 1;
  }
`;

const MySelfMountainTitle = styled.div`
  font-size: 60px;
  font-weight: bold;
`;

const Mountain = () => {
  const MySelfVideoCaptionRef = useRef<HTMLDivElement>(null);

  useAddClassObserver("active", MySelfVideoCaptionRef, true);

  const imageBoxData = [
    {
      imageUrl: "/assets/images/myself/mountain/1.webp",
      imageTitle: "영축산",
    },
    {
      imageUrl: "/assets/images/myself/mountain/2.webp",
      imageTitle: "간월재",
    },
    {
      imageUrl: "/assets/images/myself/mountain/3.webp",
      imageTitle: "배내봉",
    },
    {
      imageUrl: "/assets/images/myself/mountain/4.webp",
      imageTitle: "신불산",
    },
    {
      imageUrl: "/assets/images/myself/mountain/5.webp",
      imageTitle: "간월산",
    },
    {
      imageUrl: "/assets/images/myself/mountain/6.webp",
      imageTitle: "배내고개",
    },
    {
      imageUrl: "/assets/images/myself/mountain/7.webp",
      imageTitle: "불암산",
    },
    {
      imageUrl: "/assets/images/myself/mountain/8.webp",
      imageTitle: "불암산",
    },
    {
      imageUrl: "/assets/images/myself/mountain/9.webp",
      imageTitle: "수락산",
    },
    {
      imageUrl: "/assets/images/myself/mountain/10.webp",
      imageTitle: "수락산",
    },
    {
      imageUrl: "/assets/images/myself/mountain/11.webp",
      imageTitle: "수락산",
    },
    {
      imageUrl: "/assets/images/myself/mountain/12.webp",
      imageTitle: "수락산",
    },
    {
      imageUrl: "/assets/images/myself/mountain/13.webp",
      imageTitle: "수락산",
    },
    {
      imageUrl: "/assets/images/myself/mountain/14.webp",
      imageTitle: "덕유산",
    },
    {
      imageUrl: "/assets/images/myself/mountain/15.webp",
      imageTitle: "덕유산",
    },
    {
      imageUrl: "/assets/images/myself/mountain/16.webp",
      imageTitle: "덕유산",
    },
    {
      imageUrl: "/assets/images/myself/mountain/17.webp",
      imageTitle: "불암산",
    },
    {
      imageUrl: "/assets/images/myself/mountain/18.webp",
      imageTitle: "수락산",
    },
    {
      imageUrl: "/assets/images/myself/mountain/19.webp",
      imageTitle: "사패산",
    },
    {
      imageUrl: "/assets/images/myself/mountain/20.webp",
      imageTitle: "도봉산",
    },
    {
      imageUrl: "/assets/images/myself/mountain/21.webp",
      imageTitle: "도봉산",
    },
    {
      imageUrl: "/assets/images/myself/mountain/22.webp",
      imageTitle: "북한산",
    },
    {
      imageUrl: "/assets/images/myself/mountain/23.webp",
      imageTitle: "도봉산",
    },
    {
      imageUrl: "/assets/images/myself/mountain/24.webp",
      imageTitle: "수락산",
    },
    {
      imageUrl: "/assets/images/myself/mountain/25.webp",
      imageTitle: "불암산",
    },
    {
      imageUrl: "/assets/images/myself/mountain/26.webp",
      imageTitle: "사패산",
    },
  ];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.25,
    };

    const callback: IntersectionObserverCallback = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    document.querySelectorAll(".image-box").forEach((item) => {
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <MySelfMountain>
      <MySelfMountainTitle>
        <p>등산.</p>
        <p>나무만 보지말고</p>
        <p>숲을 보라고해서 숲 보러감.</p>
      </MySelfMountainTitle>
      <MySelfMountainImageBox>
        {imageBoxData.map((item, index) => (
          <ImageBox key={index} className="image-box">
            <img src={item.imageUrl} alt="" />
            <ImageBoxTitle>{item.imageTitle}</ImageBoxTitle>
          </ImageBox>
        ))}
      </MySelfMountainImageBox>
    </MySelfMountain>
  );
};

export default Mountain;
