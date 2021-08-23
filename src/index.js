import React from 'react';
import ReactDOM from 'react-dom';

/* import { createStore } from 'redux'

import { Provider } from 'react-redux'

import rootReducer from './redux/reducers'
 */
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './assets/css/grid.css'
import './assets/css/index.css'

import reportWebVitals from './reportWebVitals';
import Layout from './component/layouts/Layout';

document.title='laafigram';

ReactDOM.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
