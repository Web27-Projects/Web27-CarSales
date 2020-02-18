import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

//3. import and set up store and Provider
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Reducer} from './reducers/index';

const store = createStore(Reducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store = {store} >
    <App />
</Provider>,
 rootElement);
