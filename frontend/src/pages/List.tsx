import styled from "styled-components";
import { useState } from "react";

import Color, { Palette } from "color-thief-react";

import hoverItems from "../data/HoverItems";

type imgItem = {
  imgUrl: string;
};

type specItem = {
  specList: string;
};

type funcItem = {
  functionList: string;
};

type DataType = {
  pcImg?: imgItem[];
  spec?: specItem[];
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
    if ("startViewTransition" in document) {
      document.startViewTransition(() => {
        setSelectedItem(item);
      });
    } else {
      setSelectedItem(item);
    }
  };

  const [color, setColor] = useState<string | null>(null); // 배경색 상태

  const handleColorExtract = (color: string | undefined) => {
    if (color) {
      setColor(color); // 추출된 색상으로 상태 업데이트
    }
  };

  return (
    <Layout style={{ backgroundColor: color || "" }}>
      <LayoutInner>
        <ItemListWrap>
          <ItemList>
            {hoverItems.map((item, index) => (
              <ListItem key={index} onClick={() => ItemClick(item)}>
                <ItemTitle $isSelected={selectedItem?.title === item.title}>
                  {item.title}
                </ItemTitle>
              </ListItem>
            ))}
          </ItemList>
        </ItemListWrap>

        <ContentsWrap>
          {selectedItem && (
            <Contents>
              <Description>{selectedItem.state}</Description>
              {selectedItem.imageUrl ? (
                <>
                  <ItemBanner src={selectedItem.imageUrl} alt="" />
                  <Color
                    src={selectedItem.imageUrl}
                    crossOrigin="anonymous"
                    format="hex"
                  >
                    {({ data }) => {
                      handleColorExtract(data); // 색상 추출 시 상태 업데이트
                      return "";
                    }}
                  </Color>
                  <Palette
                    src={selectedItem.imageUrl}
                    crossOrigin="anonymous"
                    format="hex"
                    colorCount={3}
                  >
                    {({ data }) => {
                      return "";
                    }}
                  </Palette>
                </>
              ) : selectedItem.videoUrl ? (
                <ItemVideo src={selectedItem.videoUrl} autoPlay muted />
              ) : (
                ""
              )}
              <Img>
                {selectedItem.pcImg?.map((imgItem, index) => (
                  <img key={index} src={imgItem.imgUrl} alt="pc 이미지" />
                ))}
              </Img>
              <Spec>
                {selectedItem.spec?.map((specItem, index) => (
                  <p key={index}>{specItem.specList}</p>
                ))}
              </Spec>
              <Function>
                {selectedItem.function?.map((funcItem, index) => (
                  <p key={index}>{funcItem.functionList}</p>
                ))}
              </Function>
            </Contents>
          )}
        </ContentsWrap>
      </LayoutInner>
    </Layout>
  );
};

export default List;

const Layout = styled.article`
  color: #fff;
  transition: background-color 0.3s ease-in-out;
`;

const LayoutInner = styled.section`
  display: flex;
  justify-content: space-between;
  width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  box-sizing: border-box;
`;

const ItemListWrap = styled.section`
  margin-top: 100px;
`;

const ItemList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  position: sticky;
  top: 50px;
  mix-blend-mode: difference;
  counter-reset: item;
`;

const ContentsWrap = styled.section`
  width: 700px;
  margin: 100px 0px;
  font-size: 12px;
`;

const ItemBanner = styled.img`
  width: 100%;
`;

const ItemVideo = styled.video`
  width: 100%;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: flex-end;
  height: 16px;
  cursor: pointer;
  counter-increment: item;
`;

const ItemTitle = styled.p<{ $isSelected: any }>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 14px;
  &:after {
    content: "";
    width: 15px;
    height: 11px;
    background-image: ${({ $isSelected }) =>
      $isSelected ? `url("/assets/images/icon/i-more-arrow.svg")` : "none"};
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 10px;
  }

  &:before {
    content: "[ " counter(item) " ]";
    font-size: 10px;
  }
`;

const Contents = styled.section``;

const Description = styled.section`
  margin: 0px 0px 20px;
  font-size: 14px;
`;

const Img = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  img {
    width: 100%;
  }
`;

const Spec = styled.section``;
const Function = styled.section``;
