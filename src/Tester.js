import React, { Component } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket("http://localhost:4000/");
var loc = window.location,
  new_uri;
if (loc.protocol === "https:") {
  new_uri = "wss:";
} else {
  new_uri = "ws:";
}
new_uri += "//" + loc.host;
new_uri += loc.pathname + "/to/ws";
class App extends Component {
  componentWillMount() {
    client.onopen = () => {
      console.log("WebSocket Client Connected");
    };
    client.onmessage = (message) => {
      console.log(message);
    };
  }

  render() {
    return <div>Practical Intro To WebSockets.</div>;
  }
}

export default App;
