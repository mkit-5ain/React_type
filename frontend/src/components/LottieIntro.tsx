import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import lottie from "lottie-web";
import LottieData from "../assets/lottie/work2-lottie.json";

const LottieLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @keyframes opacity {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
  animation: 1s opacity forwards;
  animation-delay: 7s;
`;

const Lottie = styled.div`
  width: 52.08333vw;
  height: 52.08333vw;
`;

const LottieIntro = () => {
  const lottieRef = useRef<HTMLDivElement>(null);

  const lottieFunction = () => {
    if (lottieRef.current) {
      const anim = lottie.loadAnimation({
        container: lottieRef.current,
        renderer: "svg",
        autoplay: true,
        animationData: LottieData,
        loop: true,
      });

      anim.setSpeed(1.7);

      return () => {
        anim.destroy();
      };
    }
  };

  useEffect(() => {
    lottieFunction();
  }, []);

  return (
    <>
      <LottieLayout>
        <Lottie ref={lottieRef} />
      </LottieLayout>
    </>
  );
};

export default LottieIntro;
