// base
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Vazirmatn_500Medium } from "@expo-google-fonts/vazirmatn";
import { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import Pages from "./pages";

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                await Font.loadAsync({
                    Vazirmatn_500Medium,
                });
            } catch (e) {
                console.warn(e);
            } finally {
                // Tell the application to render
                setAppIsReady(true);
            }
        }

        prepare();
    }, []);
    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }
    return (
        <Provider store={store}>
            <NavigationContainer onReady={onLayoutRootView}>
                <Pages />
            </NavigationContainer>
        </Provider>
    );
}

