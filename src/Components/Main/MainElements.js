import styled from "styled-components";
import { Link } from "react-scroll";
import background from "../../IMG/stock.jpg";

export const MainContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),
    url(${background});
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  -o-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 480px) {
    width: 120%;
  }
`;

export const MainContent = styled.div`
  z-index: 3;
  position: absolute;
  padding: 0.8rem 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainH1 = styled.h1`
  color: #fff;
  font-size: 4rem;
  text-align: center;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 468px) {
    font-size: 2rem;
  }
`;

export const MainH2 = styled.h2`
  margin-top: 1.5rem;
  color: #fff;
  font-weight: 300;
  text-align: center;
  font-size: 3rem;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 468px) {
    font-size: 1.4rem;
  }
`;

export const MainBtnWrpper = styled.div`
  margin-top: 3.2rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const BtnContent = styled(Link)`
  background: transparent;
  color: #fff;
  font-size: 1.6rem;
  cursor: pointer;
  width: 15rem;
  height: 80px;
  border-radius: 0.8rem;
  border: 1px solid #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 1rem;
  transition: all 0.3s ease-in-out;
  margin-right: 2rem;

  &:hover {
    transition: all 0.3s ease-in-out;
    color: #010101;
    background: #fff;
  }

  @media screen and (max-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 25rem;
    margin-top: 1rem;
  }

  @media screen and (max-width: 480px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 19rem;
    margin-top: 1rem;
  }
`;

export const BtnP = styled.div`
  font-size: 1rem;
  font-weight: 300;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    margin-left: 1rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const BtnPR = styled.div`
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    margin-left: 1rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;
