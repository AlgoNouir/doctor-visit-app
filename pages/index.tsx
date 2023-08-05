// base
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { pagesType } from "./config";

// pages
import HomePage from "./home";
import { I18nManager } from "react-native";

const { Navigator, Screen, Group } = createNativeStackNavigator<pagesType>();

I18nManager.forceRTL(true);

export default function Pages() {
  return (
    <Navigator
      screenOptions={{
        statusBarHidden: false,
        statusBarColor: "#0ab",
        navigationBarHidden: true,
      }}
    >
      <Screen
        name="home"
        component={HomePage}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
}
