import React, { useState, useRef } from "react";
import ReactMarkdown from 'react-markdown'
import "./styles.css";

export default function App() {

  const [editorText, setEditorText] = useState('## Suppp');

  return (
    <>
      <div className="app">
        <div className="editor">{editorText}</div>
        <ReactMarkdown className="preview">{editorText}</ReactMarkdown>
      </div>
    </>
  )
}
