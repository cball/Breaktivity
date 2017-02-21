import React from 'react';
import { Animated, Easing, View, Text } from 'react-native';
import styles from './Styles/ProgressBarStyles';

export default class ProgressBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: new Animated.Value(0),
      incomplete: new Animated.Value(100)
    };
  }

  componentDidMount() {
    this.update(this.props.progress);
  }

  componentWillReceiveProps(newProps) {
    this.update(newProps.progress);
  }

  update(progress) {
    const incomplete = 100 - progress;

    Animated
      .timing(this.state.progress, {
        easing: Easing.inOut(Easing.ease),
        duration: 500,
        toValue: progress
      })
      .start();

    Animated
      .timing(this.state.incomplete, {
        easing: Easing.inOut(Easing.ease),
        duration: 500,
        toValue: incomplete
      })
      .start();
  }

  render() {
    const interpolatedProgress = this.state.progress.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1]
    });

    const interpolatedIncomplete = this.state.incomplete.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1]
    });

    return (
      <View style={[styles.container, this.props.backgroundStyle]}>
        <Animated.View
          style={[
            styles.progressBar,
            this.props.progressStyle,
            { flex: interpolatedProgress }
          ]}
        />
        <Animated.View
          style={[
            styles.progressBarRemaining,
            { flex: interpolatedIncomplete }
          ]}
        />
      </View>
    );
  }
}
