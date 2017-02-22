import { UPDATE_SETTINGS } from './actions';

const DEFAULT_WORKTIME_LENGTH = 10; // 35 min
const DEFAULT_BREAKTIME_LENGTH = 10; // 3 min

export const DEFAULT_SETTINGS = {
  workTimeLength: DEFAULT_WORKTIME_LENGTH,
  breakTimeLength: DEFAULT_BREAKTIME_LENGTH,
  requireMove: true,
  vibrate: true
};

export default function reducer(state = DEFAULT_SETTINGS, action) {
  switch (action.type) {
    case UPDATE_SETTINGS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
