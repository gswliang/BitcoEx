import react from "react";
import { NavWrapper, NavContainer, NavItems, SiteLogo } from "./NaviElements";

const Navbar = () => {
  const items = [
    "產品服務",
    "用戶回饋",
    "常見問題",
    "選擇您的產品",
    "合作夥伴",
  ];

  const renderItems = items.map((item, i) => (
    <NavItems key={i}>{item}</NavItems>
  ));

  return (
    <>
      <SiteLogo>BitcoEx</SiteLogo>
      <NavWrapper>
        <NavContainer>{renderItems}</NavContainer>
      </NavWrapper>
    </>
  );
};

export default Navbar;
