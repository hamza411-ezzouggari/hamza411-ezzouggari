import React, { useState, useRef, useEffect, useCallback } from "react";

const AppWs = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [data, setData] = useState();
  const ws = useRef(null);

  useEffect(() => {
    if (!isPaused) {
      ws.current = new WebSocket("wss://ws.kraken.com/");
      gettingData();
    }
    return () => ws.current.close();
  }, [ws, isPaused]);

  const gettingData = useCallback(() => {
    if (!ws.current) return;

    ws.current.onmessage = (e) => {
      if (isPaused) return;
      const message = JSON.parse(e.data);
      setData(message);
    };
  }, [isPaused]);

  return (
    <>
      {!!data && (
        <div>
          <div>
            <p>{`connection ID: ${data?.connectionID}`}</p>
            <p>{`event: ${data?.event}`}</p>
            <p>{`status: ${data?.status}`}</p>
            <p>{`version: ${data?.version}`}</p>
          </div>
          <button
            onClick={() => {
              ws.current.close();
              setIsPaused(!isPaused);
            }}
          >
            {!isPaused ? "Stop connection" : "open connection"}
          </button>
        </div>
      )}
    </>
  );
};

export default AppWs;
