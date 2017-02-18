export const TIMER_TOGGLE = 'timer/toggle'
export const TIMER_UPDATE = 'timer/update'

export function toggleTimer() {
  return {
    type: TIMER_TOGGLE
  }
}

export function updateTimer(timerInfo) {
  return {
    type: TIMER_UPDATE,
    payload: timerInfo
  }
}
