import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './Components/Store/Store'
import App from './App';
import { NavBar } from './Components/NavBar';

ReactDOM.render(
  
  <Provider store = {store}>
    <BrowserRouter>
    {/* <NavBar /> */}
      <App />
    </BrowserRouter>
  </Provider>
,
  document.querySelector('#root')
);