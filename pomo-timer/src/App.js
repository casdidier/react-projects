import React from "react";
import "./styles.css";

export default function App() {
  return (
    <>
      <div className="app">
        <h2>Title</h2>
        <div className="timer">00:00</div>
        <div className="buttons">
          <div className="button">Start</div>
          <div className="button">Reset</div>
        </div>
      </div>
    </>
  )
}
