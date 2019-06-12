import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import trxnReducer from './store/reducers/transactionReducer';

const rootReducer = combineReducers({
    trxn: trxnReducer
});
const store = createStore(rootReducer, applyMiddleware(thunk));

const app = (
    <Provider store={store}>
            <App />
    </Provider>
);


ReactDOM.render(app, document.getElementById('root'));


