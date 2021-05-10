import { FaTimes } from "react-icons/fa";
import {
  SidebarContainer,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SideBarLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
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
    <SideBarLink key={i} to={itemsEng[i]} onClick={toggle}>
      {item}
    </SideBarLink>
  ));
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <FaTimes />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>{renderItems}</SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;

//1:13:02
