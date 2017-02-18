import { combineReducers, createStore } from 'redux'
import settings from './Modules/Settings/reducer'
import timer from './Modules/Timer/reducer'

const reducers = combineReducers({ settings, timer })
const store = createStore(reducers)

// testing
// const unsubscribe = store.subscribe(() =>
//   console.table(store.getState())
// )
//
// unsubscribe()
// testing

export default store;
