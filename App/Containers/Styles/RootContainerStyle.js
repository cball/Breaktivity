import { StyleSheet } from 'react-native'
import { Fonts, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  applicationView: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background
  },
  playPauseButtonContainer: {
    marginTop: 30
  },
  playPauseButton: {
    backgroundColor: Colors.darkBlue
  },
  playPauseButtonIcon: {
    marginRight: 4
  },
  settingsIcon: {
    position: 'absolute',
    top: 10,
    right: 10
  }
})
