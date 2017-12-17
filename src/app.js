import React from 'react';
import {
  Provider
} from 'react-redux';
import {
  Navigation
} from 'react-native-navigation';

import {
  registerScreens
} from './screens';
import store from './redux/store';

const storeConfig = store()
registerScreens(storeConfig, Provider);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'watchingLists.MainScreen',
    label: 'Main',
    title: 'Main'
  }
});