import React from "react";
var demo = "/game/demo.html";

class GameDemo extends React.Component {
  render() {
    return (
      <div style={{ display: "unset", margin: "unset" }}>
        <iframe
          title="Hex of the Turtle Islands Game"
          style={{
            width: "100vw",
            height: "100vh",
            border: "unset",
            position: "fixed",
          }}
          src={demo}
        ></iframe>
      </div>
    );
  }
}
export default GameDemo;
