import React, { Component } from 'react';
import { Animated } from 'react-native';
import styles from './Styles/LoadingScreenStyles';
import Icon from 'react-native-vector-icons/Entypo';

export default class RootContainer extends Component {
  constructor(props) {
    super(props);

    this.setState({
      backgroundOpacity: new Animated.Value(0)
    });
  }

  componentDidMount() {}

  render() {
    return (
      <Animated.View style={styles.container}>
        <Icon name="clock" size={100} style={styles.loadingIcon} />
      </Animated.View>
    );
  }
}
