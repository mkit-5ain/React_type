import styled from "styled-components";

const CircleLayout = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;
  font-size: 110px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;
  translate: -50% -50%;
  overflow: hidden;

  &:nth-child(2) {
    z-index: 20;
    width: 600px;
    height: 600px;
    border: 1px solid #d4d3d8;
    border-radius: 100%;
    box-shadow: inset 0 20px 80px 0 rgb(200 200 200);
    rotate: -1deg;
  }
  &:nth-child(3) {
    z-index: 30;
    width: 400px;
    height: 400px;
    border: 1px solid #d4d3d8;
    border-radius: 100%;
    box-shadow: inset 0 20px 80px 0 rgb(38 38 38);
    rotate: 1deg;
  }
  &:nth-child(4) {
    z-index: 40;
    width: 200px;
    height: 200px;
    border: 1px solid #d4d3d8;
    border-radius: 100%;
    box-shadow: inset 0 20px 80px 0 rgb(241 241 241);
    rotate: 2deg;
  }
`;

const CircleText = () => {
  return (
    <CircleLayout>
      <Circle>
        <p>I don't care!</p>
        <p>Let's be positive</p>
      </Circle>
      <Circle>
        <p>I don't care!</p>
        <p>Let's be positive</p>
      </Circle>
      <Circle>
        <p>I don't care!</p>
        <p>Let's be positive</p>
      </Circle>
      <Circle>
        <p>I don't care!</p>
        <p>Let's be positive</p>
      </Circle>
    </CircleLayout>
  );
};

export default CircleText;
