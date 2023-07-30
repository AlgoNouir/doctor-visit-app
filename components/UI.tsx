import {
    Text,
    TextProps,
    TextInput,
    TextInputProps,
    TouchableOpacity,
    TouchableOpacityProps,
} from "react-native";

export function Button(props: TouchableOpacityProps) {
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            className={props.className}
            {...props}
        />
    );
}

export function Label(props: TextProps) {
    return (
        <Text className={props.className + " font-main"} {...props}>
            {props.children}
        </Text>
    );
}
export function Input(props: TextInputProps) {
    return (
        <TextInput
            {...props}
            className={props.className + " rounded-xl bg-bg-200 p-2 font-main"}
        >
            {props.children}
        </TextInput>
    );
}
