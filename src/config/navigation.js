import { Navigation } from "react-native-navigation";
import App from "../actions/app";

Navigation.registerComponent(`Login`, () => App);


Navigation.events().registerAppLaunchedListener(() => {
      Navigation.setRoot({
        root: {
          component: {
            name: "Login"
          }
        }
      });
    });