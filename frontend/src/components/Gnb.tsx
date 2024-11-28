import { Link } from "react-router-dom";
import styled from "styled-components";

const NavLayout = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 10;
  width: 100%;

  @keyframes navFadeIn {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0%);
    }
  }

  animation: 1s cubic-bezier(0.99, -0.02, 0, 1.25) navFadeIn forwards;
`;

const NavList = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 40px;
  padding: 30px 50px;
  color: #fffce1;
  border-radius: 10px;
  box-sizing: border-box;
  backdrop-filter: blur(4px);
`;

const Gnb = () => {
  return (
    <>
      <NavLayout>
        <NavList>
          <Link to="/">HHHHH</Link>
          <Link to="/experience">EEEEE</Link>
        </NavList>
      </NavLayout>
    </>
  );
};

export default Gnb;
