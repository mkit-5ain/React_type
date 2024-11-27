import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";
import React, { useState } from "react";

import hoverItems from "../data/HoverItems";

type SpecItem = {
  specList: string;
};

type DataType = {
  spec: SpecItem[];
  title: string;
  state: string;
  imageUrl?: string;
  videoUrl?: string;
};

const List = () => {
  const [selectedItem, setSelectedItem] = useState<DataType | null>(null);

  const ItemClick = (item: DataType) => {
    setSelectedItem(item);
  };

  return (
    <Layout>
      <LayoutInner>
        <ItemList>
          {hoverItems.map((item, index) => (
            <ListItem key={index} onClick={() => ItemClick(item)}>
              <ItemTitle data-title={item.title}>{item.title}</ItemTitle>
            </ListItem>
          ))}
        </ItemList>
        <ContentsWrap>
          <ContentsInner>
            {selectedItem && (
              <Contents
                key={selectedItem.title} // 고유 키 필요
                timeout={1500} // 애니메이션 지속 시간
              >
                <div>
                  <p>{selectedItem.title}</p>
                  {selectedItem.imageUrl ? (
                    <ItemBanner src={selectedItem.imageUrl} alt="" />
                  ) : selectedItem.videoUrl ? (
                    <ItemVideo src={selectedItem.videoUrl} autoPlay muted />
                  ) : (
                    <p>없음</p>
                  )}
                  {selectedItem.spec.map((specItem, index) => (
                    <div key={index}>{specItem.specList}</div>
                  ))}
                </div>
              </Contents>
            )}
          </ContentsInner>
        </ContentsWrap>
      </LayoutInner>
    </Layout>
  );
};

export default List;

const Layout = styled.article`
  color: #fff;
  background: linear-gradient(#fd7024, #cd4d07);
`;

const LayoutInner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  box-sizing: border-box;
`;

const ItemList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;
  counter-reset: item;
`;

const ContentsWrap = styled.section`
  width: 700px;
`;

const ContentsInner = styled(TransitionGroup)`
  position: relative;
  .enter {
    opacity: 0;
    transition: 0.5s linear;
  }
  .enter-active {
    opacity: 1;
    transition: 0.5s linear;
    transition-delay: 0.5s;
  }
  .exit {
    position: absolute;
    top: 0px;
    left: 0px;
    transition: 0.5s linear;
    opacity: 0;
  }
  .exit-active {
    opacity: 0;
    transition: 0.5s linear;
  }
`;

const Contents = styled(CSSTransition)``;

const ItemBanner = styled.img`
  width: 100%;
`;

const ItemVideo = styled.video`
  width: 100%;
`;

const ItemTitle = styled.span`
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  transition: 0.3s linear;
  &:after {
    content: attr(data-title);
  }
`;

const ListItem = styled.li`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 5px;
  height: 16px;
  color: #fff0b3;
  overflow: hidden;
  cursor: pointer;
  counter-increment: item;
  &:before {
    content: "[ " counter(item) " ]";
    font-size: 10px;
    font-weight: 010;
  }
  &:hover {
    ${ItemTitle} {
      translate: 0% -50%;
    }
  }
`;
