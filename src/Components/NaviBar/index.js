import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  NavWrapper,
  NavContainer,
  NavItems,
  SiteLogo,
  Icon,
} from "./NaviElements";

const Navbar = ({ toggle }) => {
  const itemsEng = [
    "product-services",
    "feedback",
    "questions",
    "choose-product",
    "partners",
  ];

  const items = [
    "產品服務",
    "用戶回饋",
    "常見問題",
    "選擇您的產品",
    "合作夥伴",
  ];

  const renderItems = items.map((item, i) => (
    <NavItems key={itemsEng[i]} to={itemsEng[i]}>
      {item}
    </NavItems>
  ));

  return (
    <>
      <NavWrapper>
        <SiteLogo onClick={() => scroll.scrollToTop()}>BitcoEx</SiteLogo>
        <Icon onClick={toggle}>
          <FaBars />
        </Icon>
        <NavContainer>{renderItems}</NavContainer>
      </NavWrapper>
    </>
  );
};

export default Navbar;
