import React from 'react';
import Main from './main';
import Goods from './goods';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          main组件主要功能是父子组件传递信息
        </p>
        <Main />
        <p> 通过redux 传递信息</p>
        <Goods />
      </header>
    </div>
  );
}

export default App;
