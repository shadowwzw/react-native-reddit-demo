import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import Reddits from './containers/Reddits';
import reducer from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getRedditsSaga } from './sagas/reddits';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware),
  // other store enhancers if any
));

sagaMiddleware.run(getRedditsSaga);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Reddits/>
      </Provider>
    );
  }
}
