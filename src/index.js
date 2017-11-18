import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import configStore from './app/js/redux/store/configStore';

import './index.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = configStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
