import React from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Fonts } from '../Styles';

export default {
  LastSceneButton(navState, navigator) {
    const { routeStack } = navState;
    const lastRoute = routeStack[routeStack.length - 2];
    return (<View>
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={styles.titleWrapper}
      >
        <Text style={styles.navTitle}>{`< ${lastRoute.title}`}</Text>
      </TouchableOpacity>
    </View>);
  },
  LeftButton(route, navigator, index, navState) {
    console.log('left button', route, navigator, index, navState);
    switch (route.leftButton) {
      case 'BACK':
        return this.LastSceneButton(navState, navigator);
        break;
    }
    return null;
  },
  RightButton(route, navigator, index, navState) {
    console.log('right button', route, navigator, index, navState);
    return null;
  },
  renderSubtitle(sub, routeSub) {
    return sub || routeSub ? (<View style={styles.subTitleWrapper}>
      <Text style={styles.navSubTitle}>
        {sub || routeSub}
      </Text>
    </View>) : null;
  },
  Title(route, navigator, index, navState) {
    console.log('Title is: ', route, navigator, index, navState);
    return (<View style={styles.titleWrapper}>
      <Text allowFontScaling={false} style={styles.navTitle}>
        {navState.title || route.title}
      </Text>
      {this.renderSubtitle(navState.subtitle, route.subtitle)}
    </View>);
  }
}

const styles = StyleSheet.create({
  titleWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navTitle: {
    ...Fonts.style.h5,
    alignSelf: 'center',
    justifyContent: 'center',
  }
});
