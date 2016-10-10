import React from 'react';
import { Navigator } from 'react-native';

const Transitions = {
  default: {
    ...Navigator.SceneConfigs.HorizontalSwipeJump,
    gestures: null
  },
};


export default {
  renderScene(route, navigator) {
    console.log('rendering scene', route.title);
    return React.createElement(route.component, {
      navigator
    });
  },
  configureScene(route) {
    return Object.assign({}, Transitions.default, route.customConfig);
  }
}
