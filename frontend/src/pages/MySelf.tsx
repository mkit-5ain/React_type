import styled from "styled-components";

const MySelfLayout = styled.div``;

const TextWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  width: 100vw;
  height: 50vh;
  font-size: 30vw;
  font-weight: bold;
  &:nth-child(odd) {
    animation: 2s animateA cubic-bezier(0.87, 0, 0.13, 1) infinite forwards;
  }
  &:nth-child(even) {
    //animation: 2s animateB cubic-bezier(0.87, 0, 0.13, 1) infinite forwards;
  }
  @keyframes animateA {
    0% {
      translate: 0% 0;
    }
    25% {
      translate: 5% 0%;
    }
    50% {
      translate: 10% 0%;
    }
    75% {
      translate: 15% 0%;
    }
    100% {
      translate: 20% 0%;
    }
  }

  @keyframes animateB {
    0% {
      translate: -30% 0;
    }
    25% {
      translate: -25% 0%;
    }
    50% {
      translate: -20% 0%;
    }
    75% {
      translate: -15% 0%;
    }
    100% {
      translate: -10% 0%;
    }
  }
`;

const MySelf = () => {
  return (
    <MySelfLayout>
      <TextWrap>
        <Text>가나다라마바사</Text>
        <Text>아자차카타파하</Text>
      </TextWrap>
    </MySelfLayout>
  );
};

export default MySelf;
