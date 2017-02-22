import { Platform, Vibration } from 'react-native';

export const THREE_VIBRATIONS = {
  // delay, length, wait, length, wait, length
  android: [0, 1000, 1000, 1000, 1000, 1000],
  // delay, wait, wait, wait
  ios: [0, 1000, 1000, 1000]
};

export const TWO_VIBRATIONS = {
  // delay, length, wait, length, wait, length
  android: [0, 500, 500, 500],
  // delay, wait, wait, wait
  ios: [0, 500, 500]
};

export function notifyWithVibration(
  pattern = THREE_VIBRATIONS,
  repeat = false
) {
  const platformPattern = pattern[Platform.OS];

  Vibration.vibrate(platformPattern, repeat);
}

export function cancelVibration() {
  Vibration.cancel();
}
