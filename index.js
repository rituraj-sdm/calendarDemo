import React from 'react';
import { Navigation } from 'react-native-navigation';
import setupStore from "./src/store";
import { registerScreens } from './src/config/routes';
import { goHome } from './src/config/navigation';

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