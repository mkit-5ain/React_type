import { useLocation } from "react-router-dom";
import DOMPurify from "dompurify";
import React, { useRef } from "react";
import styled from "styled-components";

// import hoverItems from "../../data/HoverItems";

import { useAddClassObserver } from "../../assets/js/useAddClassObserver";

const Visual = styled.div`
  margin: 0px 150px 0px;
  font-size: 0px;
  border: 1px solid #000;
  @keyframes showing {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
  animation: 1s cubic-bezier(0.87, 0, 0.13, 1) showing alternate forwards;
`;

const VisualImage = styled.img`
  width: 100%;
  height: 600px;
  object-fit: cover;
`;

const VisualVideo = styled.video`
  width: 100%;
  height: 600px;
  object-fit: cover;
`;

const BoxAnimation = styled.div`
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Title = styled.div`
  display: flex;
  margin-bottom: -1px;
  padding: 50px 30px;
  font-size: 60px;
  font-weight: 900;
  box-sizing: border-box;
  span {
    translate: 0px 50%;
    transition: 0.5s ease;
    opacity: 0;
  }
`;

const TitleWrap = styled.div`
  position: relative;
  margin: 0px 150px 0px;
  &.active {
    ${Title} {
      span {
        translate: 0px;
        opacity: 1;
        ${Array.from(
          { length: 15 },
          (_, index) => `
          &:nth-child(${index + 1}) {
            transition-delay: ${0.05 * index}s;
          }
        `
        ).join("")}
      }
    }
    ${BoxAnimation} {
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
          animation: 1s cubic-bezier(0.4, 0, 0.2, 1) intro3 alternate forwards;
          @keyframes intro3 {
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
    }
  }
`;

const VisualDescription = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0px 150px 100px;
`;

const VisualDescriptionContent = styled.div`
  display: flex;
  align-items: center;
  align-self: baseline;
  gap: 10px;
  position: relative;

  @media ${(props) => props.theme.device.mobile} {
    font-size: 10px;
  }
`;

const VisualContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 0px 0px -1px 0px;
  padding: 15px;
  border: 1px solid #000;
`;

const VisualInner = styled.div`
  width: 50%;
  box-sizing: border-box;
  &:nth-child(odd) {
    ${VisualContent} {
      border-right: 0px;
    }
  }
`;

const WorkArea = styled.div`
  display: flex;
  margin: 100px 150px 0px;
  margin-bottom: -1px;
  > div {
    margin-right: -1px;
    padding: 20px 30px;
    font-size: 20px;
    border: 1px solid #000;
  }
`;

const WorkDetailImage = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 100px;
  margin: 0px 150px 0px;
`;

const ImageWrap = styled.div`
  display: flex;
  gap: 100px;
`;

const ImageInner = styled.div`
  width: 100%;
  border: 1px solid #000;
  img {
    width: 100%;
    object-fit: cover;
  }
`;

const WorkDetailDescription = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 100px 150px 100px;
  > div {
    width: 50%;
    align-self: baseline;
    position: relative;
    padding: 25px;
    border-top: 1px solid #000;
    border-left: 1px solid #000;
    box-sizing: border-box;
    &:before {
      content: "";
      position: absolute;
      top: -1px;
      right: 0px;
      width: 1px;
      height: calc(100% + 2px);
      background: #000;
    }
    &:after {
      content: "";
      position: absolute;
      left: -1px;
      bottom: -1px;
      width: calc(100% + 2px);
      height: 1px;
      background: #000;
    }
    &:last-child {
      border-left: 0px;
    }
  }
`;

const BeforeBtn = styled.div`
  margin: 100px;
`;

const ServiceDescription = () => {
  const TitleRef = useRef<HTMLDivElement>(null);

  useAddClassObserver("active", TitleRef, true);

  const location = useLocation();

  if (!location.state || !location.state.item) {
    return <div>No item found</div>;
  }

  const { item } = location.state;

  const titleElement = item.title;
  const spannedTitle = titleElement
    .split("")
    .map((text: any) => `<span>${text}</span>`)
    .join("");
  const sanitizedTitle = () => ({
    __html: DOMPurify.sanitize(spannedTitle),
  });

  // const RandomItem = (items: any, count = 2) => {
  //   const RandomNumber = [...items].sort(() => 0.5 - Math.random());
  //   return RandomNumber.slice(0, count);
  // };

  // const [randomItems, setRandomItems] = useState([]);

  // useEffect(() => {
  //   const selectedItems = RandomItem(hoverItems);
  //   setRandomItems(selectedItems);
  // });

  return (
    <>
      <Visual>
        {item.imageUrl ? (
          <VisualImage src={item.imageUrl} />
        ) : (
          <VisualVideo src={item.videoUrl} autoPlay muted loop playsInline />
        )}
      </Visual>
      <WorkArea>
        <div>Type</div>
        <div>{item.state}</div>
      </WorkArea>
      <TitleWrap ref={TitleRef}>
        <Title dangerouslySetInnerHTML={sanitizedTitle()} />
        <BoxAnimation>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </BoxAnimation>
      </TitleWrap>
      <VisualDescription>
        <VisualInner>
          <VisualContent>
            {item.descriptions.map(
              (descriptionItem: any, descriptionIndex: any) => (
                <VisualDescriptionContent key={descriptionIndex}>
                  {descriptionItem.descriptionList}
                </VisualDescriptionContent>
              )
            )}
          </VisualContent>
        </VisualInner>
        <VisualInner>
          <VisualContent>
            {item.spec.map((specItem: any, specIndex: any) => (
              <VisualDescriptionContent key={specIndex}>
                {specItem.specList}
              </VisualDescriptionContent>
            ))}
          </VisualContent>
        </VisualInner>
        <VisualInner>
          <VisualContent>
            {item.function.map((functionItem: any, functionIndex: any) => (
              <VisualDescriptionContent key={functionIndex}>
                {functionItem.functionList}
              </VisualDescriptionContent>
            ))}
          </VisualContent>
        </VisualInner>
        <VisualInner>
          <VisualContent>
            {item.function.map((functionItem: any, functionIndex: any) => (
              <VisualDescriptionContent key={functionIndex}>
                {functionItem.functionList}
              </VisualDescriptionContent>
            ))}
          </VisualContent>
        </VisualInner>
      </VisualDescription>
      <WorkDetailImage>
        <ImageWrap>
          <ImageInner>
            <img src={item.imgList[0].imgListUrl} alt="" />
          </ImageInner>
        </ImageWrap>
        <ImageWrap>
          <ImageInner>
            <img src={item.imgList[1].imgListUrl} alt="" />
          </ImageInner>
          <ImageInner>
            <img src={item.imgList[2].imgListUrl} alt="" />
          </ImageInner>
        </ImageWrap>
      </WorkDetailImage>
      <WorkDetailDescription>
        <div>
          오늘날 불리고 있는 애국가 노랫말은 우리나라가 외세의 침략으로 위기에
          처해있던 시기(1907년 전후)에 나라 사랑하는 마음과 우리 민족의
          자주의식을 북돋우기 위해 만들어진 것으로 보여져요. 그 후 여러 선각자의
          손을 거쳐 현재와 같은 내용을 담게 되었는데 이 노랫말에 붙여진 곡조는
          스코틀랜드 민요 ‘올드 랭 사인 (Auld Lang Syne)’ 이었답니다. 당시
          해외에서 활동 중이던 작곡가 안익태(安益泰) 선생은 애국가에 남의 나라
          곡을 붙여 부르는 것을 안타깝게 여겨 1935년에 오늘날의 애국가를
          작곡하였다고 해요.
        </div>
        <div>
          1948년 대한민국 정부가 수립된 이후 현재의 애국가가 정부의 공식행사에서
          불려지고, 교과서에도 실리면서 전국적으로 불려지기 시작했답니다. 한
          세기 가까운 세월 동안 슬플 때나 기쁠 때나 우리 겨레와 운명을 같이 해
          온 애국가를 부를 때마다 우리 모두 선조들의 나라 사랑 정신을 새롭게
          되새겨보아요.
        </div>
      </WorkDetailDescription>
      <WorkDetailImage>
        <ImageWrap>
          <ImageInner>
            <img src={item.imgList[3].imgListUrl} alt="" />
          </ImageInner>
        </ImageWrap>
        <ImageWrap>
          <ImageInner>
            <img src={item.imgList[4].imgListUrl} alt="" />
          </ImageInner>
          <ImageInner>
            <img src={item.imgList[5].imgListUrl} alt="" />
          </ImageInner>
        </ImageWrap>
      </WorkDetailImage>
      <BeforeBtn>
        {/* {randomItems.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <img
              src={item.imageUrl || item.imgList?.[0]?.imgListUrl}
              alt={item.title}
            />
          </div>
        ))} */}
      </BeforeBtn>
    </>
  );
};

export default ServiceDescription;
