import React, { Component } from 'react';
import RootContainer from './RootContainer';

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * redux store would typically go here...
 */
class App extends Component {
  render () {
    return (
      <RootContainer />
    )
  }
}

export default App
