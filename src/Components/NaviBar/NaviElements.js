import styled from "styled-components";

export const NavWrapper = styled.nav`
  background-color: #090909;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const SiteLogo = styled.div`
  color: #eee;
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  font-style: italic;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 1rem;
  height: 4rem;
  /* height: 4rem; */
`;

export const NavContainer = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavItems = styled.li`
  color: #eee;
  margin: 1rem;
  font-size: 1rem;
`;
