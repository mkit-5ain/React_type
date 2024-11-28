import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 150px 100px;
`;

const LinkWrap = styled.div`
  display: flex;
  width: 100%;
  background: #000;
  a {
    display: flex;
    align-items: center;
    z-index: 10;
    gap: 10px;
    width: 100%;
    padding: 25px;
    font-weight: bold;
    border: 1px solid #000;
    box-sizing: border-box;
    background: #f1f1f1;
    transition: translate 0.1s cubic-bezier(0.87, 0, 0.13, 1);
    overflow: hidden;
    &:nth-child(2) {
      margin-left: -1px;
      margin-right: -1px;
    }
    p {
      transition: 0.4s ease;
      translate: -30px 0;
    }
    &:before {
      content: "";
      width: 26px;
      height: 26px;
      background: url("../assets/images/icon/i-more-arrow.png") center no-repeat;
      background-size: 20px;
      transition: 0.3s ease;
      translate: -200% 0%;
    }
    &:after {
      content: "";
      width: 25px;
      height: 25px;
      margin-left: auto;
      background: url("../assets/images/icon/i-start-04.png") center no-repeat;
      background-size: 25px;
      transition: 0.3s ease;
      translate: 0% 0%;
    }
    &:hover {
      z-index: 20;
      translate: 15px -15px;
      transition-duration: 0.1s;
      p {
        translate: 0%;
      }
      &:before {
        translate: 0% 0%;
      }
      &:after {
        translate: 200% 0%;
      }
    }
  }
`;

const CopyrightWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: -1px;
  padding: 25px;
  font-size: 12px;
  text-align: center;
  border: 1px solid #000;
  box-sizing: border-box;
`;

const Footer = () => {
  return (
    <FooterLayout>
      <LinkWrap>
        <Link to="/">
          <p>제육볶음</p>
        </Link>
        <Link to="exp">
          <p>쟁반짜장</p>
        </Link>
        <Link to="contact">
          <p>순살양념치킨</p>
        </Link>
      </LinkWrap>
      <CopyrightWrap>MXXEMENT © All Rights Reserved.</CopyrightWrap>
    </FooterLayout>
  );
};

export default Footer;
