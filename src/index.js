import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux';
import { Auth0Provider } from "@auth0/auth0-react";
 
const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const domain = process.env.REACT_APP_AUTHO_DOMAIN
const clientId = process.env.REACT_APP_AUTHO_CLIENT_ID

ReactDOM.render(
  <React.StrictMode>
  <Auth0Provider
    domain= {domain}
    clientId= {clientId}
    redirectUri={window.location.origin}
  >
  <Provider store={store}>
    <App />
  </Provider>
   </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
