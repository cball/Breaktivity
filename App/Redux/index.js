import { combineReducers, createStore } from 'redux'
import settings from './Modules/Settings/reducer'

const reducers = combineReducers({ settings })
const store = createStore(reducers)

// testing
import { updateSettings } from './Modules/Settings/actions'

const unsubscribe = store.subscribe(() =>
  console.table(store.getState())
)

// unsubscribe()
// testing

export default store;
