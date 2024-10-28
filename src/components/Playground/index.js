import React, { useState } from "react";
import MonacoEditor from "@monaco-editor/react";
import styles from "./Playground.module.css";
import Layout from "@theme/Layout";
const Playground = () => {
  const [htmlCode, setHtmlCode] = useState(`<html>
  <head>
    <title>Page Title</title>
    <script src="https://unpkg.com/lumeojs"></script>
  </head>
  <body>
    <input type="text" l-model="name" placeholder="Enter your name" />
    <p>Hello, {{ name }}!</p>
    <p l-show="isVisible">This is visible!</p>
    <p title=":message">Hover over me!</p>
    <button on-click="handleToggle">toggle visible</button>
    </h1>
    <script>
      // Initialize Lumeo with your state
      Lumeo((state) => {
        state.name = "World";
        state.isVisible = true;
        state.message = "Welcome to LumeoJS!";
        state.handleToggle=function(){
          state.isVisible = !state.isVisible;
        }
      });
    </script>
  </body>
</html>`);

  const handleEditorChange = (value) => {
    setHtmlCode(value);
  };

  return (
    <Layout>
      <div className={styles.playgroundContainer}>
        <div className={styles.editor}>
          <h3 className={styles.header}>HTML Editor</h3>
          <MonacoEditor
            height="100%"
            language="html"
            theme="vs-dark"
            value={htmlCode}
            onChange={handleEditorChange}
            options={{
              minimap: { enabled: false },
              automaticLayout: true,
              scrollBeyondLastLine: false,
              lineNumbers: "off",
            }}
          />
        </div>
        <div className={styles.preview}>
          <h3 className={styles.header}>Live Preview</h3>
          <iframe
            title="Live Preview"
            srcDoc={htmlCode}
            className={styles.iframe}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Playground;
