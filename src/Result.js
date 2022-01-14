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
          <div className="vReuC">
            <div className="lkR3Y-general">
              <div className="lkR3Y">
                <div className="n1rUf-QxH">
                  <div className="Qxh-arrows">
                    <span>&#8593;</span>
                  </div>
                </div>
                <div className="initial-information">
                  <div className="information-2">
                    <p>AAPL</p>
                    <p>34590.2</p>
                  </div>
                  <div className="information">
                    <p>+0.51</p>
                    <p>+183.54</p>
                  </div>
                </div>
              </div>
              <div className="lkR3Y">
                <div className="n1rUf-QxH">
                  <div className="Qxh-arrows">
                    <span>&#8593;</span>
                  </div>
                </div>
                <div className="initial-information">
                  <div className="information-2">
                    <p>GOOGLE</p>
                    <p>34590.2</p>
                  </div>
                  <div className="information">
                    <p>+0.51</p>
                    <p>+183.54</p>
                  </div>
                </div>
              </div>
              <div className="lkR3Y">
                <div className="n1rUf-QxH">
                  <div className="Qxh-arrows">
                    <span>&#8593;</span>
                  </div>
                </div>
                <div className="initial-information">
                  <div className="information-2">
                    <p>MSFT</p>
                    <p>34590.2</p>
                  </div>
                  <div className="information">
                    <p>+0.51</p>
                    <p>+183.54</p>
                  </div>
                </div>
              </div>
              <div className="lkR3Y">
                <div className="n1rUf-QxH">
                  <div className="Qxh-arrows">
                    <span>&#8593;</span>
                  </div>
                </div>
                <div className="initial-information">
                  <div className="information-2">
                    <p>AMZN</p>
                    <p>34590.2</p>
                  </div>
                  <div className="information">
                    <p>+0.51</p>
                    <p>+183.54</p>
                  </div>
                </div>
              </div>
              <div className="lkR3Y">
                <div className="n1rUf-QxH">
                  <div className="Qxh-arrows">
                    <span>&#8593;</span>
                  </div>
                </div>
                <div className="initial-information">
                  <div className="information-2">
                    <p>FB</p>
                    <p>34590.2</p>
                  </div>
                  <div className="information">
                    <p>+0.51</p>
                    <p>+183.54</p>
                  </div>
                </div>
              </div>
              <div className="lkR3Y">
                <div className="n1rUf-QxH">
                  <div className="Qxh-arrows">
                    <span>&#8593;</span>
                  </div>
                </div>
                <div className="initial-information">
                  <div className="information-2">
                    <p>TSLA</p>
                    <p>34590.2</p>
                  </div>
                  <div className="information">
                    <p>+0.51</p>
                    <p>+183.54</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="image"
            src="https://ssl.gstatic.com/finance/images/landingpage4.svg"
          />
        </header>
      </div>
    </div>
  );
}

export default Result;
