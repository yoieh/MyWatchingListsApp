import {
  Navigation
} from 'react-native-navigation';

import MainScreen from './modules/MainScreen/MainScreen';

export function registerScreens(store, Provider) {
  console.log(store)
  console.log(Provider)
  Navigation.registerComponent('watchingLists.MainScreen', () => MainScreen, store, Provider);
}