/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Navigation } from 'react-native-navigation';
import setupStore from "./store";
import { registerScreens } from './config/routes';
import { goHome } from './config/navigation';

// const App= () => {
//   return (
//     <Login />
//   );
// };

Navigation.events().registerAppLaunchedListener(() => {
  setupStore().then(store => {
    registerScreens(store);
    // goHome();
    Navigation.setRoot({
      root: {
        component: {
          name: "Login"
        }
      }
    });
  })

});