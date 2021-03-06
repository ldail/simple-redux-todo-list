import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './redux/root-reducer';
import thunk from 'redux-thunk';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';

const middleware = [];
middleware.push(thunk);
let devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

  const store = createStore(rootReducer, compose(applyMiddleware(thunk), devTools));
  const persistingStore = persistStore(store)
  ReactDOM.render(<Provider store={store}><PersistGate persistor={persistingStore}><App /></PersistGate></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
