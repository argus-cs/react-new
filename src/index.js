import React from 'react';
import ReactDOM from 'react-dom';
import './style.global.css';
import App from './core/App';
import store from './core/store'
import registerServiceWorker from './registerServiceWorker';

const container = document.getElementById('root')

ReactDOM.render(<App store={store} />, container);
registerServiceWorker();
