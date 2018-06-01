/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';

import App from './containers/App';

// if you need copy /src/ folder to Create React App - uncomment this
// import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
// if you need copy /src/ folder to Create React App - uncomment this
// registerServiceWorker();
