import React from "react";
import {
  MainContainer,
  MainContent,
  MainH1,
  MainH2,
  MainBtnWrpper,
  BtnContent,
  BtnP,
  BtnPR,
} from "./MainElements";

const Main = () => {
  return (
    <>
      <MainContainer>
        <MainContent>
          <MainH1>BitcoEX幣圈</MainH1>
          <MainH2>提供您最完整虛擬通貨服務</MainH2>
          <MainBtnWrpper>
            <BtnContent to="/">
              <BtnPR>BitcoPro</BtnPR>
              <BtnP>數位資產交易平台</BtnP>
            </BtnContent>
            <BtnContent to="/">
              <BtnPR>BitcoEX</BtnPR>
              <BtnP>虛擬貨幣錢包買賣平台</BtnP>
            </BtnContent>
          </MainBtnWrpper>
        </MainContent>
      </MainContainer>
    </>
  );
};

export default Main;
