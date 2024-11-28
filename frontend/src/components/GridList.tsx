import styled from "styled-components";
import hoverItems from "../data/HoverItems";

const GridLayout = styled.div``;

const ListTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: calc(${(props) => props.theme.primaryGutter} * 2)
    ${(props) => props.theme.primaryGutter};
`;

const ListWrap = styled.ul`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 60px 46px;
  padding: 0px ${(props) => props.theme.primaryGutter};
  margin-top: 60px;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

const ListItem = styled.li`
  &:nth-child(3) {
    grid-column: 4 / span 1;
  }
  &:nth-child(4) {
    grid-column: 7 / span 1;
  }
  &:nth-child(7) {
    grid-column: 3 / span 1;
  }
  &:nth-child(8) {
    grid-column: 6 / span 1;
  }
  &:nth-child(9) {
    grid-column: 3 / span 1;
  }
  &:nth-child(10) {
    grid-column: 8 / span 1;
  }
`;

const GridList = () => {
  return (
    <GridLayout>
      <ListWrap>
        {hoverItems.slice(0, 10).map((item, index) => (
          <ListItem key={index}>
            {item.imageUrl && <img src={item.imageUrl} alt="" />}
          </ListItem>
        ))}
      </ListWrap>
      <ListWrap>
        {hoverItems.slice(10, 20).map((item, index) => (
          <ListItem key={index}>
            {item.imageUrl && <img src={item.imageUrl} alt="" />}
          </ListItem>
        ))}
      </ListWrap>
      <ListWrap>
        {hoverItems.slice(20, 30).map((item, index) => (
          <ListItem key={index}>
            {item.imageUrl && <img src={item.imageUrl} alt="" />}
          </ListItem>
        ))}
      </ListWrap>
    </GridLayout>
  );
};

export default GridList;
