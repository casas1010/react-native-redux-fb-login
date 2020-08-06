import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import WelcomScreen from "./screens/WelcomScreen";
import AuthScreen from "./screens/AuthScreen";
import MapScreen from "./screens/MapScreen";
import DeckScreen from "./screens/DeckScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ReviewScreen from "./screens/ReviewScreen";

const MainNavigator = createBottomTabNavigator(
  {
    welcome: { screen: WelcomScreen },
    auth: { screen: AuthScreen },
    main: {
      screen: createBottomTabNavigator({
        map: { screen: MapScreen },
        deck: { screen: DeckScreen },
        review: {
          screen: createStackNavigator({
            review: { screen: ReviewScreen },
            settings: { screen: SettingsScreen },
          }),
        },
      }),
    },
  },
  {
    defaultNavigationOptions: {
      tabBarVisible: false
    },
    navigationOptions: {
      lazy: true
    }
  }
);

const App = createAppContainer(MainNavigator);

import { Provider } from "react-redux";
import store from "./store";

export default () => {
  return (
    <Provider store={store}>
      <App
      // ref={navigator => {
      //   setNavigator(navigator);
      // }}
      />
    </Provider>
  );
};
