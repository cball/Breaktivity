import { UPDATE_SETTINGS } from './actions'

const DEFAULT_WORKTIME_LENGTH = 2100
const DEFAULT_BREAKTIME_LENGTH = 180

const DEFAULT_SETTINGS = {
  workTimeLength: DEFAULT_WORKTIME_LENGTH,
  breakTimeLength: DEFAULT_BREAKTIME_LENGTH,
  requireMove: true,
  vibrate: true
}

export default function reducer(state = DEFAULT_SETTINGS, action) {
  switch (action.type) {
    case UPDATE_SETTINGS:
      const settings = Object.assign({}, state.settings, action.payload)

      return {
        ...state,
        ...settings
      }
    default:
      return state;
  }
}
