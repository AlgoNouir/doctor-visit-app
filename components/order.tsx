import { View } from "react-native";
import { OrderStatus, orderType } from "../store/orders/slice";
import { useAppSelector } from "../store/HOCs";
import { Label } from "./UI";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function OrderComponent(props: orderType) {
  var statusColor = "";

  switch (props.status) {
    case OrderStatus.done:
      statusColor = "#30a5b052";
      break;
    case OrderStatus.pended:
      statusColor = "#f3bbbb";
      break;
    case OrderStatus.wait:
      statusColor = "#f5d94ba0";
      break;
  }

  const patient = useAppSelector((store) => store.patient).find(
    (p) => p.id === props.id
  );
  // TODO set string for times
  if (patient)
    return (
      <View
        style={{
          borderColor: statusColor,
        }}
        className="p-2 bg-white mb-5 rounded-xl border-l-[12px]"
      >
        <View className="p-5 items-center flex-row justify-between">
          <View className="flex flex-row items-center">
            <Icon
              name={patient.gender ? "human-male" : "human-female"}
              size={25}
              color="#0009"
            />
            <Label className="text-lg">
              {`${patient.gender ? "آقای" : "خانوم"} ${patient.name}`}
            </Label>
          </View>
          <Label className="text-black/60">{`${Intl.NumberFormat(
            "fa-IR"
          ).format(patient.age)} ساله`}</Label>
        </View>
        <View
          style={{
            backgroundColor: statusColor,
          }}
          className={`p-5 rounded-xl flex-row justify-between`}
        >
          <Label>{new Date(props.orderTime).toLocaleDateString("fa-IR")}</Label>
          <Label>{props.status}</Label>
        </View>
      </View>
    );
}
