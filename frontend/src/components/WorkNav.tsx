import styled from "styled-components";

interface NavItemProps {
  $imageUrl?: string;
  $bg?: string;
}

const NavLayout = styled.nav`
  display: flex;
  position: fixed;
  top: 0px;
  left: 50px;
  z-index: 10;
  height: 100vh;
  align-items: center;
`;

const NavList = styled.ul`
  display: flex;
  gap: 15px;
  flex-direction: column;
  flex-wrap: wrap;
`;

const NavItemInfo = styled.div<NavItemProps>`
  display: flex;
  position: absolute;
  top: -5px;
  left: -5px;
  z-index: -1;
  width: 0px;
  height: 50px;
  font-size: 20px;
  border-radius: 40px;
  background-color: ${({ $bg = "#fff" }) => $bg};
  box-sizing: border-box;
  text-align: center;
  transition: 0.4s cubic-bezier(0.17, -0.52, 0.42, 1.39);
  text-transform: capitalize;
  align-items: center;
  overflow: hidden;
  opacity: 0;
`;

const NavItemTitle = styled.div`
  font-weight: bold;
  transform: translateX(-100%);
  transition: 0.4s cubic-bezier(0.17, -0.52, 0.42, 1.39);
  mix-blend-mode: overlay;
  opacity: 0;
`;

const NavItem = styled.li<NavItemProps>`
  position: relative;
  width: 40px;
  height: 40px;
  padding: 10px;
  border-radius: 100%;
  box-sizing: border-box;
  background-image: ${({
    $imageUrl = "../../assets/images/icon/nav-work-01.png",
  }) => `url(${$imageUrl})`};
  background-position: center center;
  background-size: 40px;
  cursor: pointer;
  &:hover {
    ${NavItemInfo} {
      width: 200px;
      opacity: 1;
      ${NavItemTitle} {
        transform: translateX(100%);
        transition-delay: 0.2s;
        opacity: 1;
      }
    }
  }
`;

const imageInfos = [
  {
    $imageUrl: "../../assets/images/icon/nav-work-01.png",
    text: "evTJhU",
    $bg: "#535053",
  },
  {
    $imageUrl: "../../assets/images/icon/nav-work-01.png",
    text: "jqUxyz",
    $bg: "#8b1427",
  },
  {
    $imageUrl: "../../assets/images/icon/nav-work-01.png",
    text: "iNZSdS",
    $bg: "#d7dce0",
  },
  {
    $imageUrl: "../../assets/images/icon/nav-work-01.png",
    text: "cwuHhZ",
    $bg: "#859082",
  },
  {
    $imageUrl: "../../assets/images/icon/nav-work-01.png",
    text: "bLyTnA",
    $bg: "#9c989d",
  },
  {
    $imageUrl: "../../assets/images/icon/nav-work-01.png",
    text: "gGzHEf",
    $bg: "#c0eeff",
  },
  {
    $imageUrl: "../../assets/images/icon/nav-work-01.png",
    text: "gdFcjy",
    $bg: "#29c3f4",
  },
];

const Nav = () => {
  return (
    <NavLayout>
      <NavList>
        {imageInfos.map((info, index) => (
          <NavItem key={index} $imageUrl={info.$imageUrl}>
            <NavItemInfo $bg={info.$bg}>
              <NavItemTitle className="title">{info.text}</NavItemTitle>
            </NavItemInfo>
          </NavItem>
        ))}
      </NavList>
    </NavLayout>
  );
};

export default Nav;
