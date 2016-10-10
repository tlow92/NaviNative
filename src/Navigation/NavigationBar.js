import React, { Component } from 'react';

import { Navigator, StyleSheet } from 'react-native';
import NavigationRouteMapper from './NavigationRouteMapper';

export default {
  render() {
    return (<Navigator.NavigationBar
      navigationStyles={Navigator.NavigationBar.StylesIOS}
      routeMapper={NavigationRouteMapper}
      style={styles.container}
    />);
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
    height: 64,
  },
});
