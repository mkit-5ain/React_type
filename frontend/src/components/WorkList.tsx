import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useAddClassObserver } from "../assets/js/useAddClassObserver";

import hoverItems from "../data/HoverItems";

const WorkList: React.FC = () => {
  const [selectItem, setSelectItem] = useState<any>(
    hoverItems.length > 0 ? hoverItems[0] : null
  );

  const ItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const ItemClick = (item: any) => {
    setSelectItem(item);
    // console.log(ItemRefs.current[hoverItems.indexOf(item)]);
  };

  const ItemMove = (item: any) => {
    const itemIndex = hoverItems.indexOf(item);
    if (ItemRefs.current[itemIndex]) {
      console.log(ItemRefs.current[itemIndex]); // 클릭한 아이템의 DOM 요소만 출력
    }
  };

  // ItemRefs.addEventListener("mousemove", (event: any) => {
  //   let x = 20 - event.client.X * 0.1;
  //   let y = 20 - event.client.Y * 0.1;
  // });

  console.log(hoverItems);

  useEffect(() => {
    hoverItems.forEach((item) => {
      if (item.imageUrl) {
        const img = new Image();
        img.src = item.imageUrl;
      }
    });

    hoverItems.forEach((item) => {
      if (item.videoUrl) {
        const video = document.createElement("video");
        video.src = item.videoUrl;
        video.preload = "auto";
        video.load();
      }
    });
  }, []);

  const TargetRef = useRef<HTMLDivElement>(null);

  useAddClassObserver("active", TargetRef, true);

  return (
    <>
      <ExCardWrap>
        <ExCardTitleWrap>
          <BoxAnimation>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </BoxAnimation>
          <TitleAlert>
            Project <img src="../assets/images/icon/i-alert.png" alt="" />
            Showcase
          </TitleAlert>
          <ExCardTitle>
            <div>Txx</div>
            <div>Traxx</div>
          </ExCardTitle>
          <p>Creative solutions for modern brands</p>
        </ExCardTitleWrap>
        <ExCardItemWrap>
          <ItemList ref={TargetRef}>
            {hoverItems.map((item, index) => (
              <>
                <StyleLink to={`/Service`} state={{ item }}>
                  <ListItem
                    key={index}
                    ref={(el) => (ItemRefs.current[index] = el)}
                    onMouseMove={ItemMove}
                    onClick={() => ItemClick(item)}
                    className={selectItem === item ? "active" : ""}
                  >
                    <ItemTitleInner data-title={item.title}>
                      <ListItemEnvironment>
                        <img src={item.environment} alt="" />
                      </ListItemEnvironment>
                      <ItemTitleElement>{item.title}</ItemTitleElement>
                      {/* {item.imageUrl ? (
                          <ItemImage
                            className={selectItem === item ? "active" : ""}
                            src={item.imageUrl}
                          />
                        ) : (
                          <ItemVideo
                            className={selectItem === item ? "active" : ""}
                            src={item.videoUrl}
                            autoPlay
                            muted
                            loop
                            playsInline
                          />
                        )} */}
                      <ItemSpec>
                        {item.spec.map((specItem: any, specIndex: number) => (
                          <p key={specIndex}>{specItem.specList}</p>
                        ))}
                      </ItemSpec>
                    </ItemTitleInner>
                  </ListItem>
                </StyleLink>
              </>
            ))}
          </ItemList>
        </ExCardItemWrap>
      </ExCardWrap>
    </>
  );
};

export default WorkList;

const ExCardWrap = styled.div`
  margin: -1px 150px 100px;
`;

const ExCardTitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  gap: 20px;
  position: relative;
  padding: 100px;
  font-weight: bold;
  text-align: center;
`;

const BoxAnimation = styled.div`
  width: 100%;
  height: 100%;
  pointer-events: none;
  span {
    &:nth-child(1) {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 1px;
      background: #111;
      transform: scaleX(0);
      transform-origin: left;
      animation: 1s cubic-bezier(0.4, 0, 0.2, 1) intro1 alternate forwards;
      @keyframes intro1 {
        form {
          transform: scaleX(0);
        }
        to {
          transform: scaleX(1);
        }
      }
    }
    &:nth-child(2) {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 1px;
      height: 0%;
      background: #000;
      animation: 1s cubic-bezier(0.4, 0, 0.2, 1) intro2 alternate forwards;
      @keyframes intro2 {
        form {
          height: 0%;
        }
        to {
          height: 100%;
        }
      }
    }
    &:nth-child(3) {
      position: absolute;
      top: 0px;
      right: 0px;
      width: 1px;
      height: 100%;
      background: #000;
      transform: scaleY(0);
      transform-origin: bottom;
      animation: 1s cubic-bezier(0.4, 0, 0.2, 1) fq1 alternate forwards;
      @keyframes fq1 {
        form {
          transform: scaleY(0);
        }
        to {
          transform: scaleY(1);
        }
      }
    }
    &:nth-child(4) {
      position: absolute;
      bottom: 0px;
      left: 0px;
      width: 100%;
      height: 1px;
      background: #000;
      animation: 1s cubic-bezier(0.4, 0, 0.2, 1) intro4 alternate forwards;
      transform: scaleX(0);
      transform-origin: right;
      @keyframes intro4 {
        form {
          transform: scaleX(0);
        }
        to {
          transform: scaleX(1);
        }
      }
    }
  }
`;

const TitleAlert = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  img {
    width: 45px;
  }
`;

const ItemTitleElement = styled.p`
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 30px;
  font-weight: 900;
  letter-spacing: -1px;
  transition: translate 0.1s cubic-bezier(0.87, 0, 0.13, 1);
  text-shadow: 0px 2px 1px #0e100f, 0px -1px 1px #0e100f, -1px 0px 1px #0e100f,
    1px -1px 1px #0e100f, 3px 5px 1px #0e100f, 4px 6px 1px #0e100f,
    5px 7px 1px #0e100f;
  color: ${(props) => props.theme.PrimaryColor};
  &:before {
    content: "";
    width: 26px;
    height: 26px;
    background: url("../assets/images/icon/i-more-arrow.png") center no-repeat;
    background-size: 20px;
    transition: 0.3s ease;
    transform: translate(-50%, 0px);
    opacity: 0;
  }
  &:after {
    content: "";
    width: 26px;
    height: 26px;
    background: url("../assets/images/icon/i-more-arrow.png") center no-repeat;
    background-size: 20px;
    transition: 0.3s ease;
    transform: translate(-50%, 0px);
    rotate: 180deg;
    opacity: 0;
  }
`;

const ListItem = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-right: 1px solid #000;
  border-bottom: 1px solid #000;
  box-sizing: border-box;
  transition: translate 0.1s cubic-bezier(0.87, 0, 0.13, 1);
  &:before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 10;
    width: 100%;
    height: 100%;
    border-top: 1px solid #111;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0px;
    left: -1px;
    z-index: 10;
    width: 100%;
    height: 100%;
    border-left: 1px solid #111;
  }

  &:hover {
    z-index: 11;
    translate: 20px -20px;
    transition-duration: 0.1s;
    ${ItemTitleElement} {
      &:before {
        content: "";
        transform: translate(0px, 0px);
        opacity: 1;
      }
      &:after {
        content: "";
        transform: translate(0px, 0px);
        opacity: 1;
      }
    }
  }
`;

const ExCardItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;

const ItemList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

// const ItemImage = styled.img`
//   width: 100%;
//   height: 100%;
//   transition: translate 0.2s cubic-bezier(0.87, 0, 0.13, 1);
//   object-fit: cover;
// `;

// const ItemVideo = styled.video`
//   width: 100%;
//   height: 100%;
//   transition: translate 0.2s cubic-bezier(0.87, 0, 0.13, 1);
//   object-fit: cover;
// `;

const ItemSpec = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
  width: 100%;
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: 10px;
  font-weight: bold;
`;

const ItemTitleInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  border-top: 0px;
  border-left: 0px;
  box-sizing: border-box;
  background: #f1f1f1;
  transition: translate 0.3s cubic-bezier(0.87, 0, 0.13, 1);
`;

const StyleLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 33.3333%;
  height: 300px;
  margin-bottom: -1px;
  background: #000;
`;

const ListItemEnvironment = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  img {
    height: 20px;
  }
`;

const ExCardTitle = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  width: 100%;
  color: #f1f1f1;
  font-weight: 900;
  font-size: 80px;
  letter-spacing: -5px;
  text-shadow: -1px -1px 1px #0e100f, 1px 1px 1px #0e100f, -1px -1px 1px #0e100f,
    -1px 2px 1px #0e100f, -2px 1px 1px #0e100f, -3px 2px 1px #0e100f,
    -4px 3px 1px #0e100f, -5px 4px 1px #0e100f, -6px 5px 1px #0e100f,
    -7px 6px 1px #0e100f, -8px 7px 1px #0e100f, -9px 8px 1px #0e100f,
    -10px 9px 1px #0e100f, 1px -1px 1px #0e100f;
  > div {
    opacity: 0;
    animation: 1s ease jackInTheBox alternate forwards;
    &:last-child {
      animation-delay: 0.1s;
    }
  }

  @keyframes jackInTheBox {
    0% {
      opacity: 0;
      -webkit-transform: scale(0.1) rotate(30deg);
      transform: scale(0.1) rotate(30deg);
      -webkit-transform-origin: center bottom;
      transform-origin: center bottom;
    }

    50% {
      -webkit-transform: rotate(-10deg);
      transform: rotate(-10deg);
    }

    70% {
      -webkit-transform: rotate(3deg);
      transform: rotate(3deg);
    }

    to {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;
