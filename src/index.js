import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Router} from './components/Router';
import {BrowserRouter} from 'react-router-dom'
import { ThemeContext } from '@emotion/react';

import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.render(
 
  <BrowserRouter>
    <Provider store={store}>
     <Router />
     </Provider>
  </BrowserRouter>
  ,
    //<App />,
 
  document.getElementById('root')
);
