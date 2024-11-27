import Title from "../components/Title";
import Road from "../components/MySelf/Road";
import Trail from "../components/MySelf/Trail";
import Mountain from "../components/MySelf/Mountain";
import Crossfit from "../components/MySelf/Crossfit";

const MySelf = () => {
  return (
    <>
      <Title titleName="본격적으로 들여다 보기." />
      <Road />
      <Trail />
      <Mountain />
      <Crossfit />
    </>
  );
};

export default MySelf;
