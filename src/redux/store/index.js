import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger';

import rootReducer from '../reducers'
import sagas from '../sagas'

const middleware = createSagaMiddleware()

// if (__DEV__) {
// 	middleware = [...middleware, logger];
// } else {
// 	middleware = [...middleware];
// }

// Creating store with saga
export default () => {
  const store = createStore(rootReducer, applyMiddleware(middleware))
  middleware.run(sagas)
  return store
}