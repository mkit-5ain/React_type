import styled from "styled-components";
import Title from "../components/Title";

const WorkLayout = styled.div``;

const WorkWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0px 5.20833vw;
  border-bottom: 1px solid #fffce1;
`;

const WorkItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5.20833vw 0px;
  margin-bottom: -1px;
  border: 1px solid #fffce1;
  border-left: 0px;
  box-sizing: border-box;
  &:nth-child(1) {
    width: 65%;
    border-right: 1px solid #fffce1;
  }
  &:nth-child(2) {
    align-items: flex-end;
    width: 35%;
    border-right: 0px;
  }
  &:nth-child(3) {
    align-items: flex-start;
    width: 35%;
    border-right: 0px;
  }
  &:nth-child(4) {
    align-items: flex-end;
    width: 65%;
    border-left: 1px solid #fffce1;
    border-right: 0px;
  }
`;

const WorkItemImg = styled.img`
  width: calc(100% - 5.20833vw);
`;

const WorkItemDescription = styled.div`
  width: calc(100% - 5.20833vw);
  padding-top: 0.52083vw;
  text-transform: capitalize;
`;

const WorkMore = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const WorkMoreBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 35%;
  height: 200px;
  border-right: 1px solid #fffce1;
  text-indent: 100px;
  cursor: pointer;
  &:hover {
    transition: 0.5s linear;
  }
  &:after {
    content: "";
    display: block;
    height: 200px;
    width: 200px;
    border-left: 1px solid #000;
    background: url(/assets/images/icon/i-arrow.svg) center center no-repeat;
    transition: 0.5s linear;
    filter: invert();
  }
`;

const Work = () => {
  const ListItem = [
    {
      imageUrl: "/assets/images/work/slowglow.png",
      title: "gospheres",
    },
    {
      imageUrl: "/assets/images/work/slowglow.png",
      title: "noice",
    },
    {
      imageUrl: "/assets/images/work/slowglow.png",
      title: "a-sof",
    },
    {
      imageUrl: "/assets/images/work/slowglow.png",
      title: "slowglow",
    },
  ];

  const ListItemLength = ListItem.length;

  return (
    <WorkLayout>
      <>
        <Title titleName="c" listItemLength={ListItemLength} />
        <WorkWrap>
          {ListItem.map((item, index) => (
            <WorkItem key={index}>
              <WorkItemImg src={item.imageUrl} alt="" />
              <WorkItemDescription>{item.title}</WorkItemDescription>
            </WorkItem>
          ))}
          <WorkMore>
            <WorkMoreBtn>All Cases</WorkMoreBtn>
          </WorkMore>
        </WorkWrap>
      </>
    </WorkLayout>
  );
};

export default Work;
