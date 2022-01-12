import React, { useEffect } from "react";
import { io } from "socket.io-client";

let socket;
const CONNECTION_PORT = "http://192.168.0.104:4000/";

function Result() {
  useEffect(() => {
    socket = io(CONNECTION_PORT);
  }, [CONNECTION_PORT]);

  return (
    <div className="Result-finance">
      <div className="header-Section">
        <header className="header">
          <img src="https://ssl.gstatic.com/finance/images/landingpage4.svg" />
          <div className="vReuC">
            <div className="lkR3Y"></div>
            <div className="lkR3Y"></div>
            <div className="lkR3Y"></div>
            <div className="lkR3Y"></div>
            <div className="lkR3Y"></div>
            <div className="lkR3Y"></div>
          </div>
        </header>
      </div>
      <div className="hr">
        <hr />
      </div>
    </div>
  );
}

export default Result;
