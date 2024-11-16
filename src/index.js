import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App2 from './App2';
import App3 from './App3';
import ExplainBindingsComponent from './ExplainBindingsComponent';
import Developer from './Developer';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render()会使用你的JSX来替换你的HTML中的一个DOM节点。
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 将一个简单的JSX直接用JSX的方式传入，而不用必须传入一个组件的实例。
const root3 = ReactDOM.createRoot(document.getElementById('root3'));
root3.render(
  <h1>Hello React World</h1>
);

const root4 = ReactDOM.createRoot(document.getElementById('root4'));
root4.render(
  <React.StrictMode>
    <ExplainBindingsComponent />
  </React.StrictMode>
);

const root5 = ReactDOM.createRoot(document.getElementById('root5'));
root5.render(
  <React.StrictMode>
    <Developer />
  </React.StrictMode>
);

const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>
);

const root6 = ReactDOM.createRoot(document.getElementById('root6'));
root6.render(
  <React.StrictMode>
    <App3 />
  </React.StrictMode>
);

// 模块热替换（HMR）
if (module.hot){
  module.hot.accept();
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
