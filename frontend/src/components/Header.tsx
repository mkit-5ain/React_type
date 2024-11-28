import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderLayout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 100px 0px -1px;
  padding: 0px 150px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 30px;
    margin-right: -1px;
    font-size: 20px;
    font-weight: 900;
    border: 1px solid #000;
    box-sizing: border-box;
    background: #f1f1f1;
    transition: translate 0.1s cubic-bezier(0.87, 0, 0.13, 1);
    &:hover {
      translate: 15px -15px;
      transition-duration: 0.1s;
    }
  }
`;

const StickyHeadline = styled.p`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  font-size: 12px;
  translate: 0 -200px;
  text-transform: uppercase;

  @keyframes HeadlineIntro {
    0% {
      translate: 0 -200px;
    }
    100% {
      translate: 0 0;
    }
  }
  animation: 1s cubic-bezier(0.87, 0, 0.13, 1) HeadlineIntro forwards alternate;
`;

const LinkWrap = styled.div`
  display: flex;
  background: #000;
`;

const Header = () => {
  return (
    <>
      <HeaderLayout>
        <StickyHeadline>
          <LinkWrap>
            <Link to="/">BLIND STAR</Link>
            <Link to="exp">CHRISTIAN</Link>
            <Link to="contact">MOVIE STAR</Link>
          </LinkWrap>
        </StickyHeadline>
      </HeaderLayout>
    </>
  );
};

export default Header;
