// base
import * as React from "react";

// types
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { pagesType } from "./config";

// components
import { View, Text } from "react-native";

export default function Home(props: NativeStackScreenProps<pagesType, "home">) {
    return (
        <View className="w-screen h-screen items-center justify-center">
            <Text>your app is ready !!!</Text>
        </View>
    );
}
