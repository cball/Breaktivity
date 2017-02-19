import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    borderWidth: 1,
    borderColor: '#eee',
    height: 20
  },
  progressBar: {
    backgroundColor: 'blue',
  },
  progressBarRemaining: {
    backgroundColor: '#eee'
  }
})
