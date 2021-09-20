import React from 'react';
import ReactDOM from 'react-dom';

 import { createStore } from 'redux'
 import { BrowserRouter,Route } from 'react-router-dom'
import { Provider } from 'react-redux'
/* import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css' */


import rootReducer from './redux/reducers'
 
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './assets/css/grid.css'
import './assets/css/index.css'

import reportWebVitals from './reportWebVitals';
import Layout from './component/layouts/Layout';
import RoutesHome from './component/HomeScreen/RoutesHome';

const store = createStore(
  rootReducer
)

document.title='laafigram';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
           <BrowserRouter>
            <Route path="/home">
                <RoutesHome />
            </Route>
            <Route path="/admin">
              <Layout />
            </Route>
        </BrowserRouter>

      
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
