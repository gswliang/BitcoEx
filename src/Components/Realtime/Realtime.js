import styled from "styled-components";

export const RealtimeContainer = styled.div`
  background: #042b52;
  height: 1300px;
  clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const HeaderContainer = styled.div`
  height: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 9rem;
`;

export const HeaderStripe = styled.div`
  width: 4rem;
  height: 1rem;
  border-bottom: 2px #fff double;
`;

export const HeaderH1 = styled.div`
  color: #fff;
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

export const BtcToUsd = styled.h3`
  font-size: 2rem;
  text-align: center;
  color: #fff;
`;

export const BTCcontainer = styled.div`
  height: 70vh;
  width: 70%;
  margin-top: 2rem;
  background: #11365b;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-top: 1rem;
`;

export const DesP = styled.p`
  text-align: center;
  color: #8b8f92;
`;
