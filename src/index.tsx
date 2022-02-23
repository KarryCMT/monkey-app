import React from "react";
import ReactDOM from "react-dom";
import './index.css'
const App = () => (
  <h1 className="container">My React and TypeScript App!!!!! {new Date().toLocaleDateString()}</h1>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
