import "./App.css";
import React, { useState } from "react";
import Result from "./Result";
import LineChart from "./financeChart/FinanceChart";

function App() {
  const [bids, setBids] = useState([0]);
  const ws = new WebSocket("wss://localhost:4000/");

  const apiCall = {
    event: "bts:subscribe",
    data: { channel: "order_book_btcusd" },
  };

  ws.onopen = (event) => {
    ws.send(JSON.stringify(apiCall));
  };

  console.log(ws);

  ws.onmessage = function (event) {
    const json = JSON.parse(event.data);
    try {
      if ((json.event = "data")) {
        setBids(json.data.bids.slice());
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <Result />
      <LineChart />
    </div>
  );
}

export default App;
