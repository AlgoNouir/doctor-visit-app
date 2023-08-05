// main
import { UserType } from "../store/user/slice";

// components & icons
import Icon from "@expo/vector-icons/MaterialIcons";
import { View } from "react-native";
import { Label } from "./UI";

export default function StaffComponent(props: UserType) {
  return (
    <View className="bg-white h-36 w-full rounded-xl p-5 relative">
      {/* <Label className="absolute top-5 right-5 text-xs text-black/50">
        {`نظام پزشکی : ${Intl.NumberFormat("fa-IR").format(props.nezamCode)}`}
      </Label> */}
      <View className="flex-row space-x-3 items-end h-full">
        <View className="rounded-full">
          <Icon name="person" size={35} color={"#0ab"} />
        </View>
        <View className="border border-black/20 h-1/2" />
        <View className="flex-col">
          <Label className="text-2xl">{props.name}</Label>
          {props.desc === undefined ? (
            <></>
          ) : (
            <Label className="text-black/50">{props.desc}</Label>
          )}
        </View>
      </View>
    </View>
  );
}
