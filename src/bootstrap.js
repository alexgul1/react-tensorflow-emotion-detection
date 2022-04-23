import React from 'react';
import ReactDOM from 'react-dom';
import '@tensorflow/tfjs';

import 'normalize.css/normalize.css';

import './assets/style/reset.scss';

import App from './App';

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <App />,
  document.querySelector('#root'),
);
