import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';

import './index.less';
const App = () => (
  <h1 className={'container'}>
    <Button type="primary">按钮</Button>
  </h1>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
