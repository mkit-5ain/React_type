import styled from "styled-components";
import React, { useEffect } from "react";

const DescriptionLayout = styled.div`
  max-width: 1000px;
  margin: 200px auto 0px;
`;

const DescriptionTitle = styled.div`
  font-size: 60px;
  font-weight: bold;
`;

const ShortDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 50px;
  font-size: 25px;
  font-weight: bold;
  color: ${(props) => props.theme.outColor};
`;

const Text = styled.p`
  span {
    display: inline-block;
    color: #fff;
    scale: 2;
    opacity: 0;
    transition: 1s ${(props) => props.theme.defaultBezier};
  }
`;

const InnerDescription = styled.div`
  &.active {
    ${Text} {
      span {
        scale: 1;
        opacity: 1;
      }
    }
  }
`;

const CardTriggerDescription = () => {
  const listData = [
    {
      textWrap: [
        {
          text: "믿을수 없는 <span>부지런</span> 함과,",
        },
        {
          text: "강인한 <span>체력</span>으로.",
        },
      ],
    },
    {
      textWrap: [
        {
          text: "진정 <span>프로</span>다운",
        },
        {
          text: "책임감",
        },
      ],
    },
    {
      textWrap: [
        {
          text: "<span>취향</span>을 듬뿍.",
        },
        {
          text: "<span>작업물</span>을 뚝딱.",
        },
        {
          text: "<span>센스</span>는 착착.",
        },
      ],
    },
    {
      textWrap: [
        {
          text: "더 나은 <span>작업물</span>을 위한 <span>설계</span>",
        },
        {
          text: "각각의 <span>작업물</span>은 <span>소중</span>하니까.",
        },
      ],
    },
    {
      textWrap: [
        {
          text: "<span>마법</span>같은 공간.",
        },
        {
          text: "생생한 <span>사용자 경험</span>",
        },
      ],
    },
    {
      textWrap: [
        {
          text: "<span>지루</span>하지 않게.",
        },
        {
          text: "<span>웹</span>를 더욱 돋보이게,",
        },
      ],
    },
    {
      textWrap: [
        {
          text: "<span>디테일</span>하고 <span>풍부</span>한<span>표현력</span>.",
        },
        {
          text: " 함께 <span>일</span>하고 싶은 <span>작업자</span>.",
        },
      ],
    },
    {
      textWrap: [
        {
          text: "중요한건? 늘 <span>긍정적</span>으로!",
        },
        {
          text: "이제 <span>자세히</span> 알아보자.",
        },
      ],
    },
  ];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "100px",
      threshold: 1,
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

    document.querySelectorAll(".InnerDescription").forEach((item) => {
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <DescriptionLayout>
      <DescriptionTitle>
        <p>소개 준비완료,</p>
        <p>일단 간략하게.</p>
      </DescriptionTitle>
      <ShortDescription>
        {listData.map((item, index) => (
          <InnerDescription className="InnerDescription" key={index}>
            {item.textWrap.map((textItem, textIndex) => (
              <Text
                key={textIndex}
                dangerouslySetInnerHTML={{ __html: textItem.text }}
              />
            ))}
          </InnerDescription>
        ))}
      </ShortDescription>
    </DescriptionLayout>
  );
};

export default CardTriggerDescription;
