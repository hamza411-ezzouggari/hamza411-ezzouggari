import React, { useEffect, useState, useCallback } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";

function Tester() {
  const [socketUrl, setSocketUrl] = useState("wss//localhost:4000");
  const [messageHistory, setMessageHistory] = useState([]);
  const handleClickChangeSocketUrl = useCallback(
    () => setSocketUrl("wss//localhost:4000"),
    []
  );

  const handleClickSendMessage = useCallback(() => sendMessage("Hello"), []);

  useEffect(() => {
    var lastMessage;
    if (lastMessage !== null) {
      setMessageHistory((prev) => prev.concat(lastMessage));
    }
  }, [lastMessage, setMessageHistory]);
  const [sendMessage, lastMessage, readyState] = useWebSocket(socketUrl);

  return (
    <div>
      <p>hamza</p>
      <button onClick={handleClickChangeSocketUrl}>
        Click Me to change Socket Url
      </button>
      <button
        onClick={handleClickSendMessage}
        disabled={readyState !== ReadyState.OPEN}
      >
        Click Me to send 'Hello'
      </button>
      <span>The WebSocket is currently </span>
      {lastMessage ? <span>Last message: {lastMessage.data}</span> : null}
      <ul>
        {messageHistory.map((message, idx) => (
          <span key={idx}>{message ? message.data : null}</span>
        ))}
      </ul>
    </div>
  );
}

export default Tester;
