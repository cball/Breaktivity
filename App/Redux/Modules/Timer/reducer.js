import {
  TIMER_TOGGLE,
  TIMER_UPDATE
} from './actions'

const DEFAULT_TIMER_STATE = {
  seconds: 5,
  paused: true
}

export default function reducer(state = DEFAULT_TIMER_STATE, action) {
  switch (action.type) {
    case TIMER_UPDATE:
      return {
        ...state,
        ...action.payload
      }
    case TIMER_TOGGLE:
      let pauseState = { paused: !state.paused }

      return {
        ...state,
        ...pauseState
      }
    default:
      return state
  }
}
