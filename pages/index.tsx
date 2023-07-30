// base
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { pagesType } from "./config";


// pages
import HomePage from "./home";

const { Navigator, Screen, Group } = createNativeStackNavigator<pagesType>();

export default function Pages() {
    return (
        <Navigator>
          <Screen
            name="home"
            component={HomePage} 
          />
        </Navigator>
    );
}
