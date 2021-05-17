import {
  RealtimeContainer,
  HeaderContainer,
  HeaderStripe,
  HeaderP,
  HeaderH1,
  BTCcontainer,
  BtcToUsd,
  TopContainer,
  DesP,
} from "./Realtime";

const Feedback = () => {
  const header = "及時買賣";
  const headerP = "Buy / Sell";
  let socket = new WebSocket("wss://ws.btse.com/ws/spot");

  const getData = (results) => {
    results.map((res) => {
      <DesP>{res.price}</DesP>;
    });
  };
  const BTC = () => {
    socket.onopen = () => {
      socket.send(
        JSON.stringify({
          op: "subscribe",
          args: ["orderBookL2Api:BTC-USDT_0"],
        })
      );
    };

    socket.onmessage = (e) => {
      const toObj = JSON.parse(e.data).data;

      if (toObj !== undefined) {
        const res = toObj.buyQuote.slice(0, 20);
        getData(res);
      }
    };
  };

  BTC();

  return (
    <>
      <RealtimeContainer>
        <HeaderContainer>
          <HeaderStripe />
          <HeaderH1>{header}</HeaderH1>
          <HeaderP>{headerP}</HeaderP>
        </HeaderContainer>
        <BtcToUsd>BTC/USD</BtcToUsd>
        <BTCcontainer>
          <TopContainer>
            <DesP>Price(USD)</DesP>
          </TopContainer>
          <TopContainer>
            <DesP> Size</DesP>
          </TopContainer>
          <TopContainer>
            <DesP>Total</DesP>
          </TopContainer>
        </BTCcontainer>
      </RealtimeContainer>
    </>
  );
};

export default Feedback;
