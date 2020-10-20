import React, { useState, useRef } from "react";
import "./styles.css";

export default function App() {

  const [time, setTime] = useState(25 * 60);
  const [title, setTitle] = useState('Start one round');
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);


  const timer = () => setTime(time => time += 1)

  function runTimer() {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(intervalRef.current);
    }
    else {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime(time => {
          if (time >= 1) return time - 1;
          resetTimer();
          return 0;
        });
      }, 1000);
    }
  }

  const resetTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(25 * 60);
  }

  function padTime(time) {
    return time.toString().padStart(2, "0");
  }

  const minutes = padTime(Math.floor(time / 60));
  const seconds = padTime(time - minutes * 60);

  return (
    <>
      <div className="app">
        <h2>{title}</h2>
        <div className="timer">{`${minutes}:${seconds}`}</div>
        <div className="buttons">
          <div className="button" onClick={runTimer}>{!isRunning ? 'Start' : 'Pause'}</div>
          <div className="button" onClick={resetTimer}>Reset</div>
        </div>
      </div>
    </>
  )
}
