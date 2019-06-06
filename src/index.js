import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store'
import { Provider } from 'react-redux'
import 'antd/dist/antd.css';

const newApp = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(
    newApp
  ,document.getElementById('root'));
