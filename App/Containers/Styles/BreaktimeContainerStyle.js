import { StyleSheet } from 'react-native'
import { Fonts, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background
  },
  headerText: {
    ...Fonts.style.h1,
    fontSize: Fonts.size.huge
  },
  icon: {
    marginTop: 20,
    marginBottom: 20
  },
  subtitle: {
    ...Fonts.style.h4,
    marginBottom: 10
  },
  progressWrapper: {
    flexDirection: 'row',
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20
  }
})
