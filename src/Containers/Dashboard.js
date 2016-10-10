import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Routes } from '../Navigation';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.onProfilePress = this.onProfilePress.bind(this);
  }

  onProfilePress() {
    console.log('pressed the profile');
    this.props.navigator.push(Routes.Profile);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Dashboard View</Text>
        <TouchableOpacity
          onPress={this.onProfilePress}
        >
          <Text>Profile Screen</Text>
        </TouchableOpacity>
      </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafaff',
    marginTop: 64,
  },
});
