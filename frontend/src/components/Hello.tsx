import styled from "styled-components";

const HelloLayout = styled.div`
  width: 100vw;
  box-sizing: border-box;
`;

const HelloVisual = styled.img`
  width: 100%;
  pointer-events: none;
`;

const HelloAlert = styled.div`
  padding-top: 30px;
  font-weight: bold;
`;

const Hello = () => {
  return (
    <HelloLayout>
      <HelloVisual src="../assets/images/me/hello.webp" alt="사람" />
      <HelloAlert>FRONTEND</HelloAlert>
    </HelloLayout>
  );
};

export default Hello;
