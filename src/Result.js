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
      <div className="title">
        <h3>Vous pourriez être intéressé par ces actions</h3>
      </div>
      <div className="hr">
        <hr />
      </div>
    </div>
  );
}

export default Result;
