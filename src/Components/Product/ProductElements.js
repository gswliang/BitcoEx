import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 100%;
  height: 800px;

  @media screen and (max-width: 480px) {
    width: 120%;
  }
`;

export const HeaderContainer = styled.div`
  height: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderStripe = styled.div`
  width: 4rem;
  height: 1rem;
  border-bottom: 2px #1c83bc double;
`;

export const HeaderH1 = styled.div`
  color: #010101;
  font-size: 1.8rem;
  font-weight: 300;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const HeaderP = styled.div`
  color: #9aa0a3;
  font-size: 0.6rem;
  text-transform: uppercase;
`;

export const BitcoProContainter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    align-items: flex-end;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column-reverse;
    width: 100%;
  }
`;

export const BitcoEXContainter = styled.div`
  margin-top: 7rem;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    align-items: flex-end;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column-reverse;
    width: 100%;
  }
`;

export const PhoneImg = styled.img`
  width: 20%;
  height: 20%;
  margin-right: 5rem;
  margin-left: 3rem;

  @media screen and (max-width: 768px) {
    flex-basis: 30%;
  }
  @media screen and (max-width: 480px) {
    width: 60%;
  }
`;

export const ProContainer = styled.div`
  width: 30%;
  @media screen and (max-width: 768px) {
    flex-basis: 40%;
  }
  @media screen and (max-width: 480px) {
    width: 90%;
    display: block;
  }
`;

export const LogoImg = styled.img`
  width: 25%;
  height: 25%;
  border-radius: 0.3rem;
`;

export const MainProduct = styled.h1`
  font-size: 2rem;
  color: #2f3335;
`;

export const ProdctDtl = styled.p`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 1rem;
`;

export const Detail = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
