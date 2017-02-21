import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import settings from './Modules/Settings/reducer';
import timer from './Modules/Timer/reducer';
import startup from './Modules/Startup/reducer';
import { startupComplete } from './Modules/Startup/actions';

const REDUX_PERSIST_OPTIONS = {
  storage: AsyncStorage,
  blacklist: ['startup']
};

const reducers = combineReducers({
  settings,
  timer,
  startup
});

const store = createStore(reducers, undefined, compose(autoRehydrate()));

const rehydrateComplete = () => store.dispatch(startupComplete());
persistStore(store, REDUX_PERSIST_OPTIONS, rehydrateComplete);

// testing
// const unsubscribe = store.subscribe(() =>
//   console.table(store.getState())
// )
//
// unsubscribe()
// testing

export default store;
