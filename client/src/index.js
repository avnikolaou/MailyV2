import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react'
import ReactDom from 'react-dom'

// Redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk';

import App from './components/App'
import reducers from './reducers'

// Axios helpers for testing
import axios from 'axios'
window.axios = axios;

library.add(fas);

// Create a new instance of the redux store
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDom.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root')
);
