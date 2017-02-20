import {
  combineReducers,
  createStore,
  compose,
  applyMiddleware
} from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import { AsyncStorage } from 'react-native'
import settings from './Modules/Settings/reducer'
import timer from './Modules/Timer/reducer'

const REDUX_PERSIST_OPTIONS = {
  storage: AsyncStorage
}

const reducers = combineReducers({ settings, timer })

const store = createStore(
  reducers,
  undefined,
  compose(
    autoRehydrate()
  )
)

persistStore(store, REDUX_PERSIST_OPTIONS)

// testing
// const unsubscribe = store.subscribe(() =>
//   console.table(store.getState())
// )
//
// unsubscribe()
// testing

export default store;
