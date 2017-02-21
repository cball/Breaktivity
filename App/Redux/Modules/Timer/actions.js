export const TIMER_TOGGLE = 'timer/toggle';
export const TIMER_UPDATE = 'timer/update';
export const TIMER_RESET = 'timer/reset';

export function toggleTimer() {
  return {
    type: TIMER_TOGGLE
  };
}

export function updateTimer(payload) {
  return {
    type: TIMER_UPDATE,
    payload
  };
}

export function resetTimer(payload) {
  return {
    type: TIMER_RESET,
    payload
  };
}
