import React from "react";
import ReactDOM from "react-dom";
// import './index.less'
import style from './index.scss'
const App = () => (
  <h1 className={style.container}>My React and TypeScript App!!!!! {new Date().toLocaleDateString()}</h1>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
