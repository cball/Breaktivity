import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  container: {
  },
  progress: {
    position: 'relative'
  },
  textContainer: {
    position: 'absolute',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300
  },
  textTimeRemaining: {
    ...Fonts.style.h1,
    fontSize: Fonts.size.huge,
    lineHeight: Fonts.size.huge
  },
  textSubtitle: {
  }
})
