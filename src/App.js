import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState("#inicio markdown")

  function handleChange(event) {
    setMarkdown(event.target.value)
  }

  return (
    <div className="app">
      <textarea onChange={handleChange} value={markdown} />

      <ReactMarkdown className="preview" source={markdown} />
    </div>
  );
}

export default App;
