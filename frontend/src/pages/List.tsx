import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";
import React, { useState } from "react";

import hoverItems from "../data/HoverItems";

type SpecItem = {
  specList: string;
};

type funcItem = {
  functionList: string;
};

type DataType = {
  spec?: SpecItem[];
  function?: funcItem[];
  title?: string;
  state?: string;
  imageUrl?: string;
  videoUrl?: string;
};

const List = () => {
  const [selectedItem, setSelectedItem] = useState<DataType | null>(
    hoverItems.length > 0 ? hoverItems[0] : null
  );

  const ItemClick = (item: DataType) => {
    setSelectedItem(item);
  };

  return (
    <Layout>
      <LayoutInner>
        <div>
          <ItemList>
            {hoverItems.map((item, index) => (
              <ListItem
                isSelected={selectedItem?.title === item.title}
                key={index}
                onClick={() => ItemClick(item)}
              >
                <ItemTitle data-title={item.title}>{item.title}</ItemTitle>
              </ListItem>
            ))}
          </ItemList>
        </div>
        <ContentsWrap>
          <ContentsInner>
            {selectedItem && (
              <Contents key={selectedItem.title} timeout={1500}>
                <div>
                  {selectedItem.imageUrl ? (
                    <ItemBanner src={selectedItem.imageUrl} alt="" />
                  ) : selectedItem.videoUrl ? (
                    <ItemVideo src={selectedItem.videoUrl} autoPlay muted />
                  ) : (
                    <p>없음</p>
                  )}
                  <p>{selectedItem.state}</p>
                  <div>
                    {selectedItem.spec?.map((specItem, index) => (
                      <p key={index}>{specItem.specList}</p>
                    ))}
                  </div>
                  <div>
                    {selectedItem.function?.map((funcItem, index) => (
                      <p key={index}>{funcItem.functionList}</p>
                    ))}
                  </div>
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
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  counter-reset: item;
`;

const ContentsWrap = styled.section`
  margin: 100px 0px;
  width: 700px;
  font-size: 12px;
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

const ListItem = styled.li<{ isSelected: any }>`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 5px;
  height: 16px;
  color: ${(props) => (props.isSelected ? "#111" : "#fff0b3")};
  overflow: hidden;
  cursor: pointer;
  counter-increment: item;
  &:before {
    content: "[ " counter(item) " ]";
    font-size: 10px;
    font-weight: 010;
    transition: 0.3s linear;
  }
  &:hover {
    ${ItemTitle} {
      translate: 0% 50%;
    }
  }
`;
