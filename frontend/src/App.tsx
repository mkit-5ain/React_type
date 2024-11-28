import React from "react";
import { ThemeProvider } from "styled-components";
import {
  Route,
  Routes,
  useLocation,
  // useNavigationType,
} from "react-router-dom";
// import { TransitionGroup, CSSTransition } from "react-transition-group";

import Variable from "./assets/styled/Variable";
import GlobalStyled from "./assets/styled/GlobalStyle";

// import Header from "./components/Header";
// import Footer from "./components/Footer";

import Home from "./pages/Home";
import Service from "./pages/Service";
import MySelf from "./pages/MySelf";
import Exp from "./pages/Exp";
import List from "./pages/List";

// 페이지 전환시 스크롤 상단 고정
import ScrollTop from "./assets/js/scrollTop";

// const GridWrap = styled.div`
//   position: fixed;
//   top: 0px;
//   left: 0px;
//   z-index: -1;
//   display: flex;
//   width: 100%;
//   height: 100%;
//   justify-content: space-between;
//   padding: 0px 150px;
//   box-sizing: border-box;
//   pointer-events: none;
// `;

// const Grid = styled.div`
//   width: 1px;
//   height: 0%;
//   background: #ddd;
//   animation: 2s GridIntro alternate forwards;
//   @keyframes GridIntro {
//     from {
//       height: 0%;
//     }
//     to {
//       height: 100%;
//     }
//   }
//   &:nth-child(2) {
//     animation-delay: 0.2s;
//   }
//   &:nth-child(4) {
//     animation-delay: 0.4s;
//   }
// `;

const App = () => {
  const location = useLocation();
  // const navigationType = useNavigationType();

  return (
    <ThemeProvider theme={Variable}>
      {/* <GridWrap>
        <Grid />
        <Grid />
        <Grid />
        <Grid />
        <Grid />
      </GridWrap> */}
      <ScrollTop />
      <GlobalStyled />
      {/* <Header /> */}
      {/* <TransitionGroup> */}
      {/* <CSSTransition key={location.pathname} timeout={1000}> */}
      {/* <div className={navigationType === "POP" ? "pop" : "push"}> */}
      <Routes location={location}>
        <Route path="/" element={<Home theme={Variable} />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Exp" element={<Exp />} />
        <Route path="/MySelf" element={<MySelf />} />
        <Route path="/List" element={<List />} />
      </Routes>
      {/* </div> */}
      {/* </CSSTransition> */}
      {/* </TransitionGroup> */}
      {/* <Footer /> */}
    </ThemeProvider>
  );
};

export default App;
