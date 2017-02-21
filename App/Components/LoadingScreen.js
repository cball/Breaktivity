import React, { Component } from 'react';
import { Animated } from 'react-native';
import styles from './Styles/LoadingScreenStyles';
import Icon from 'react-native-vector-icons/Entypo';

export default class LoadingScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundOpacity: new Animated.Value(1)
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isLoading === false) {
      const { timing } = Animated;

      timing(this.state.backgroundOpacity, {
        toValue: 0,
        delay: 500,
        duration: 300
      }).start(this.props.onAnimationComplete);
    }
  }

  render() {
    const opacity = this.state.backgroundOpacity;

    return (
      <Animated.View style={[styles.container, { opacity }]}>
        <Icon name="clock" size={100} style={styles.loadingIcon} />
      </Animated.View>
    );
  }
}
