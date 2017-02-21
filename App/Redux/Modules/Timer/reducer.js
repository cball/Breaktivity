import { TIMER_TOGGLE, TIMER_UPDATE, TIMER_RESET } from './actions';

import { DEFAULT_SETTINGS } from '../Settings/reducer';

const DEFAULT_TIMER_STATE = {
  seconds: DEFAULT_SETTINGS.workTimeLength,
  paused: true
};

export default function reducer(state = DEFAULT_TIMER_STATE, action) {
  switch (action.type) {
    case TIMER_UPDATE:
      return {
        ...state,
        ...action.payload
      };
    case TIMER_TOGGLE:
      let pauseState = { paused: !state.paused };

      return {
        ...state,
        ...pauseState
      };
    case TIMER_RESET:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
