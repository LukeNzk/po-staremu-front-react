import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers'

import { updateCalendar } from './actions'
import Firebase from './components/Firebase'

const store = createStore(rootReducer);

const firebase = new Firebase();
firebase.calendarDoc().get().then(doc => {
  console.log(doc.data());
  store.dispatch(updateCalendar(doc.data()));
});


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
