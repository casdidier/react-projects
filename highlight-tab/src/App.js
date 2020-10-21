import React, { useState, useRef } from "react";
import "./styles.css";
import ControlledTabs from "./ControlledTabs";

export default function App() {

  return (
    <>
      <div className="app">
        <div className="container">
          <ControlledTabs />
        </div>
      </div>
    </>
  )
}
