import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import indexScreen from "./src/screens/indexScreen";
import showScreen from "./src/screens/showScreen";
import createScreen from "./src/screens/createScreen";
import editScreen from "./src/screens/editScreen";
import { Provider } from "./src/context/blogContext";

const navigator = createStackNavigator(
  {
    index: indexScreen,
    show: showScreen,
    create: createScreen,
    edit: editScreen,
  },
  {
    initialRouteName: "index",
    defaultNavigationOptions: {
      title: "Blogs",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
