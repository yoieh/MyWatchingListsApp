import {
  Navigation
} from 'react-native-navigation';

import MainScreen from './MainScreen';
import Drawer from './Drawer';

export const registerScreens = (store, Provider) => {
  Navigation.registerComponent('watchingLists.MainScreen', () => MainScreen, store, Provider);
  Navigation.registerComponent('watchingLists.Drawer', () => Drawer, store, Provider);
}