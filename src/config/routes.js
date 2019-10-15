import React from "react"
import { Navigation } from "react-native-navigation";
import {Provider} from "react-redux";
import Login from "../container/Login";
import Home from "../container/Home";


export const registerScreens = (store) => {

  Navigation.registerComponentWithRedux("Login", () => Login, Provider, store)
  Navigation.registerComponentWithRedux("Home", () => Home, Provider, store)



};
