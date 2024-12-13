import { keyframes } from "styled-components";

export const VisualDescriptionFadeIn = keyframes`
  from {
    translate: 0px 40px;
    opacity: 0;
  }
  to {
      translate: 0px;
      opacity: 1;
    }
`;

export const clipPathFadeIn = keyframes`
  to {
    clip-path: inset(0);
  }
`;

// ~ 480px: 모바일 세로
// 481px ~ 768px: 모바일 가로, 태블릿 세로
// 769px ~ 1024px 또는 1280px: 태블릿 가로, 노트북
// 1025px 및 1281px ~: 데스크탑

export const deviceSizes = {
  mobile: 768,
  tablet: 1280,
};

export const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile}px)`,
  tablet: `screen and (max-width: ${deviceSizes.tablet}px)`,
};

const variable = {
  white: "#fffce1",
  PrimaryColor: "#f1f1f1",
  black: "#0e100f",
  outColor: "#8a8a8a",
  pointColor: "#fff",
  primaryGutter: "46px",

  defaultBezier: "cubic-bezier(0.99, -0.02, 0, 1.25)",
  contentGutter: "50px",

  size: {
    w100: "100px",
    h100: "100px",
  },

  VisualDescriptionFadeIn: VisualDescriptionFadeIn,
  clipPathFadeIn: clipPathFadeIn,
  deviceSizes: deviceSizes,
  device: device,
  global: global,
};

export const btnA = {
  width: variable.size.w100,
  height: variable.size.h100,
};

export default variable;
