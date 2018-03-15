//es6 的导入模块包
//react.js 是react的核心代码
import React from 'react';
//react-dom 是  react关于DOM操作的代码
import ReactDOM from 'react-dom';
//导入css样式(项目公用的样式)
import './index.css';
//导入根组件 app.js  其中.js可以省略
import App from './App';
//导入js文件
import registerServiceWorker from './registerServiceWorker';

//ReactDOM是react-dom.js的对象
//ReactDOM.render  渲染视图
//param1:组件
//param2:dom元素
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
