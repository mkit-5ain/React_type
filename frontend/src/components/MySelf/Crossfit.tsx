import React, { useState } from "react";
import styled from "styled-components";

const CrossFitLayout = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 10vw auto 0px;
`;

const CrossFitTitle = styled.div`
  font-size: 60px;
  font-weight: bold;
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 100px;
`;

const Text = styled.div`
  font-size: 50px;
  font-weight: bold;
  text-transform: capitalize;
  color: #8a8a8a;
  transition: 0.1s ease;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.white};
    animation: 0.4s shake alternate;
  }
  &.active {
    color: ${(props) => props.theme.white};
    &:hover {
      color: ${(props) => props.theme.pointColor};
    }
  }
  @keyframes shake {
    10% {
      transform: rotate(2deg);
    }
    20% {
      transform: rotate(-2deg);
    }
    30% {
      transform: rotate(2deg);
    }
    40% {
      transform: rotate(-2deg);
    }
  }
`;

const MenuView = styled.div``;

const CrossFit = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleClass = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const SkillText = [
    {
      text: "클린",
      content: "클린에 대한 설명입니다.",
    },
    {
      text: "스내치",
      content: "스내치에 대한 설명입니다.",
    },
    {
      text: "토투바",
      content: "토투바에 대한 설명입니다.",
    },
    {
      text: "핸드스탠드푸시업",
      content: "핸드스탠드푸시업에 대한 설명입니다.",
    },
    {
      text: "바머슬업",
      content: "바머슬업에 대한 설명입니다.",
    },
    {
      text: "케틀벨스윙",
      content: "케틀벨스윙에 대한 설명입니다.",
    },
    {
      text: "데드리프트",
      content: "데드리프트에 대한 설명입니다.",
    },
    {
      text: "버피박스점프오버",
      content: "버피박스점프오버에 대한 설명입니다.",
    },
    {
      text: "월워크",
      content: "월워크에 대한 설명입니다.",
    },
    {
      text: "월볼",
      content: "월볼에 대한 설명입니다.",
    },
    {
      text: "풀업",
      content: "풀업에 대한 설명입니다.",
    },
    {
      text: "데빌프레스",
      content: "데빌프레스에 대한 설명입니다.",
    },
    {
      text: "핸드스탠드워크",
      content: "핸드스탠드워크에 대한 설명입니다.",
    },
    {
      text: "브이업",
      content: "브이업에 대한 설명입니다.",
    },
    {
      text: "더블언더",
      content: "더블언더에 대한 설명입니다.",
    },
    {
      text: "쓰러스터",
      content: "쓰러스터에 대한 설명입니다.",
    },
  ];

  return (
    <CrossFitLayout>
      <CrossFitTitle>
        <p>크로스핏.</p>
        <p>상상 이상의 심박수</p>
        <p>힘들어도 견뎌.</p>
      </CrossFitTitle>
      <TextSection>
        {SkillText.map((item, index) => (
          <>
            <Text
              key={index}
              className={activeIndex === index ? "active" : ""}
              dangerouslySetInnerHTML={{ __html: item.text }}
              onClick={() => toggleClass(index)}
            />
            {activeIndex === index ? <MenuView>{item.content}</MenuView> : null}
          </>
        ))}
      </TextSection>
    </CrossFitLayout>
  );
};

export default CrossFit;
