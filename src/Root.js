/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  NavigationBar,
  NavigationStyles,
  Routes,
  Router,
} from './Navigation';

class Root extends Component {
  render() {
    return (<View style={styles.container}>
      <Navigator
        ref={(ref) => {this.navigator = ref; }}
        initialRoute={Routes.Dashboard}
        configureScene={Router.configureScene}
        renderScene={Router.renderScene}
        navigationBar={NavigationBar.render()}
        style={NavigationStyles.navigator}
      />
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Root;
