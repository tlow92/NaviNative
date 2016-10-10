import React from 'react';

export default new class Routes {
  get Dashboard() {
    return {
      title: 'Dashboard',
      component: require('../Containers/Dashboard').default
    };
  }
  get Profile() {
    return {
      title: 'Profile',
      component: require('../Containers/Profile').default,
      leftButton: 'BACK'
    }
  }
};
