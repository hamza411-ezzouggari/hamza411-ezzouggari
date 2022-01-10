import React from "react";
import { io } from "socket.io-client";

function Result() {
  const socket = io("ws://localhost:4000");
  socket.on("message", (data) => {
    socket.on("start", () => {
      trackTickers(socket);
    });
  });
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
