import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Router } from "react-router-dom"
import {createBrowserHistory} from 'history'

const history = createBrowserHistory()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router history={history}>
      <App/>
    </Router>
);

reportWebVitals();
