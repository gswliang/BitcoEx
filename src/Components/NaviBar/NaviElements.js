import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const NavWrapper = styled.nav`
  background-color: transparent;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavContainer = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 1rem;
  z-index: 1;
  padding: 0 24px;
  max-width: 1100px;
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
  left: 1rem;
  height: 4rem;
  cursor: pointer;
  z-index: 10;
`;

export const NavItems = styled(LinkS)`
  color: #eee;
  margin: 1rem;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #bec1bf;
    transition: 0.3s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Icon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    position: absolute;
    display: block;
    font-size: 2rem;
    color: #fff;
    right: 1rem;
    top: 1rem;
    cursor: pointer;
    z-index: 2;
  }

  @media screen and (max-width: 480px) {
    margin-left: auto;
    display: block;
    font-size: 2rem;
    color: #fff;

    cursor: pointer;
    z-index: 2;
  }
`;
