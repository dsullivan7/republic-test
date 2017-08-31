import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../reducers';
import appSaga from '../sagas/app'

const sagaMiddleware = createSagaMiddleware()

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f,
  applyMiddleware(sagaMiddleware),
)

export default (initialState) => {
  const store = createStore(rootReducer, initialState, enhancers);
  sagaMiddleware.run(appSaga)
  return store
};
