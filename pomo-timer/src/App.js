import React, { useState, useRef } from "react";
import "./styles.css";

export default function App() {

  const [time, setTime] = useState(2000);
  const [title, setTitle] = useState('Start one round');
  const intervalRef = useRef(null);


  const timer = () => setTime(time : time += 1)

  function runTimer() {
    intervalRef.current = setInterval(() => {
      setTime(time => {
        if (time >= 1) return time - 1;
        resetTimer();
        return 0;
      });
    }, 1000);

  }

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
  }

  return (
    <>
      <div className="app">
        <h2>{title}</h2>
        <div className="timer">{time}</div>
        <div className="buttons">
          <div className="button" onClick={runTimer}>Start</div>
          <div className="button" onClick={resetTimer}>Reset</div>
        </div>
      </div>
    </>
  )
}
