const BTC = () => {
  let socket = new WebSocket("wss://ws.btse.com/ws/spot");

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

  socket.onclose = (e) => {
    console.log("Connection closed!");
  };

  socket.onerror = (err) => {
    console.log("Error:", err);
  };
};

export default BTC;
