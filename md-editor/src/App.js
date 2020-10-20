import React, { useState, useRef } from "react";
import ReactMarkdown from 'react-markdown'
import "./styles.css";

export default function App() {

  const [editorText, setEditorText] = useState('## Suppp');

  const update = (event) => setEditorText(event.target.value);

  return (
    <>
      <div className="app">
        <div className="textarea">
          <input onChange={update} type="text" value={editorText} />
        </div>
        <ReactMarkdown className="preview">{editorText}</ReactMarkdown>
      </div>
    </>
  )
}
