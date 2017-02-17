import { StyleSheet } from 'react-native'
import { Fonts, Metrics, Colors } from '../../Themes/'

const SETTINGS_PADDING = 30

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: Colors.background
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10
  },
  settingsGroup: {
    borderColor: Colors.lightGray,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingTop: SETTINGS_PADDING,
    ...Fonts.normal
  },
  firstSettingsGroup: {
    borderTopWidth: 0
  },
  settingsGroupTitle: {
    color: Colors.darkBlue,
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.small,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 10
  },
  settingsItem: {
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  checkMarkSettingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  sliderText: {
    fontSize: Fonts.size.h6,
    textAlign: 'left',
    marginBottom: 10,
    marginTop: 10,
  }
})
