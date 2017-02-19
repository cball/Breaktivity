import React, { Component } from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'
import styles from './Styles/BreaktimeContainerStyle'
import { Images } from '../Themes'
import { connect } from 'react-redux'
import CountdownTimer from '../Components/CountdownTimer'
import ProgressBar from '../Components/ProgressBar'

class BreaktimeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { moveProgress: 1 };
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Breaktime!</Text>
        <Image source={Images.breaktimeIcon} style={styles.icon} />
        <Text style={styles.subtitle}>Get up and move!</Text>

        <View>
          <CountdownTimer
            showProgress={false}
            initialSeconds={300}
            seconds={300}
            paused={this.props.paused}
            onTimerUpdate={() => {}}
            onTimerComplete={() => {}}
          />
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text onPress={() => this.setState({ moveProgress: 33 })}>Set to 33</Text>
          <Text onPress={() => this.setState({ moveProgress: 100 })}>Set to 100</Text>
        </View>

        <View style={styles.progressWrapper}>
          <ProgressBar progress={this.state.moveProgress} width={300} />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return state.settings
}

export default connect(mapStateToProps)(BreaktimeContainer)
