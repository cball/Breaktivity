export const UPDATE_SETTINGS = 'settings/update';

export function updateSettings(settings) {
  return {
    type: UPDATE_SETTINGS,
    payload: settings
  }
}
