import { STARTUP_COMPLETE } from './actions';

const DEFAULT_STARTUP_STATE = {
  isLoading: true
};

export default function reducer(state = DEFAULT_STARTUP_STATE, action) {
  switch (action.type) {
    case STARTUP_COMPLETE:
      const newState = { isLoading: false };

      return {
        ...state,
        ...newState
      };
    default:
      return state;
  }
}
