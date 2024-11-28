import { createGlobalStyle } from "styled-components";

const resetStyled = `
    body,p,dl,ol,ul,li,dd,input,h1,h2,h3,h4,h5,h6,article,section { 
        margin: 0px; 
        padding: 0px; 
    }

    body {
        font-family: 'font';
        background: #f3f3f3;
        &::-webkit-scrollbar {
            display: none;
        }
    }

    textarea { 
        padding: 0px; 
        resize: none; 
    }

    img { 
        vertical-align: top; 
    }

    table th,
    table td { 
        font-weight: normal; 
    }

    a { 
        color: inherit; 
        text-decoration: auto; 
    }

    i { 
        font-style: normal; 
    }

    ol,ul,li { 
        list-style: none;
    }

    li,ul,ol {
        padding: 0px;
        margin: 0px;
        list-style: none;
    }
`;

const fontStyled = `
    @font-face {
        font-family: 'Futura';
        src: local("Futura"),
        url('../assets/font/Futura-XBlk-BT.woff') format("woff"),
        url('../assets/font/Futura-XBlk-BT.woff2') format("woff2");
        unicode-range: U+0020-002F, U+003A-0040, U+005B-0060, U+007B-007E,
        U+0041-005A, U+0061-007A, U+0030-0039;
        font-display: fallback;
    }

    @font-face {
        font-family: 'font';
        font-weight: 900;
        src: local("font"),
        url('../assets/font/Montserrat-Black.woff2') format("woff2"),
        url('../assets/font/Montserrat-Black.woff') format("woff");
        unicode-range: U+0041-005a,U+0061-007a,U+0030-0039;
        font-display: fallback
    }

    @font-face {
        font-family: 'font';
        font-weight: 800;
        src: local("font"),url('../assets/font/Montserrat-ExtraBold.woff2') format("woff2"),
        url('../assets/font/Montserrat-ExtraBold.0757ee1d.woff') format("woff");
        unicode-range: U+0041-005a,U+0061-007a,U+0030-0039;
        font-display: fallback
    }

    @font-face {
        font-family: 'font';
        font-weight: 700;
        src: local("font"),url('../assets/font/AppleSDGothicNeoB.woff2') format("woff2"),
        url('../assets/font/AppleSDGothicNeoB.e2c661b5.woff') format("woff");
        unicode-range: U+0041-005a,U+0061-007a,U+0030-0039;
        font-display: fallback
    }

    @font-face {
        font-family: 'font';
        font-weight: "500";
        src: local("font"),url('../assets/font/Montserrat-Medium.woff2') format("woff2"),
        url('../assets/font/Montserrat-Medium.woff') format("woff");
        unicode-range: U+0041-005a,U+0061-007a,U+0030-0039;
        font-display: fallback
    }

    @font-face {
        font-family: 'font';
        font-weight: 400;
        src: local("font"),url('../assets/font/Montserrat-Regular.woff2') format("woff2"),
        url('../assets/font/Montserrat-Regular.woff') format("woff");
        unicode-range: U+0041-005a,U+0061-007a,U+0030-0039;
        font-display: fallback
    }

    @font-face {
        font-family: 'font';
        font-weight: 900;
        src: local("font"),url('../assets/font/AppleSDGothicNeoH.woff2') format("woff2"),
        url('../assets/font/AppleSDGothicNeoH.woff') format("woff");
        unicode-range: U+ac00-d7a3;
        font-display: fallback
    }

    @font-face {
        font-family: 'font';
        font-weight: 800;
        src: local("font"),url('../assets/font/AppleSDGothicNeoEB.woff2') format("woff2"),
        url('../assets/font/AppleSDGothicNeoEB.woff') format("woff");
        unicode-range: U+ac00-d7a3;
        font-display: fallback
    }

    @font-face {
        font-family: 'font';
        font-weight: 700;
        src: local("font"),url('../assets/font/AppleSDGothicNeoB.woff2') format("woff2"),
        url('../assets/font/AppleSDGothicNeoB.woff') format("woff");
        unicode-range: U+ac00-d7a3;
        font-display: fallback
    }

    @font-face {
        font-family: 'font';
        font-weight: 500;
        src: local("font"),url('../assets/font/AppleSDGothicNeoM.woff2') format("woff2"),
        url('../assets/font/AppleSDGothicNeoM.woff') format("woff");
        unicode-range: U+ac00-d7a3;
        font-display: fallback
    }

    @font-face {
        font-family: 'font';
        font-weight: 400;
        src: local("font"),url('../assets/font/AppleSDGothicNeoL.woff2') format("woff2"),
        url('../assets/font/AppleSDGothicNeoL.woff') format("woff");
        unicode-range: U+ac00-d7a3;
        font-display: fallback
    }
`;

const variableStyled = `
    :root {
        --white: #fffce1;
        --black: #0e100f;
        --bezier: cubic-bezier(0.99, -0.02, 0, 1.25);
        scroll-timeline: --squareTimeline y
    }
`;

const GlobalStyled = createGlobalStyle`
    ${variableStyled}
    ${resetStyled}
    ${fontStyled}
`;

export default GlobalStyled;
