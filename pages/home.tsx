// base
import * as React from "react";

// types
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { pagesType } from "./config";

// components
import { View, Text, FlatList } from "react-native";
import { Button, Label } from "../components/UI";
import { useAppSelector } from "../store/HOCs";
import StaffComponent from "../components/select";
import OrderComponent from "../components/order";
import { OrderStatus } from "../store/orders/slice";

export default function Home(props: NativeStackScreenProps<pagesType, "home">) {
  const user = useAppSelector((store) => store.user.account);
  const orders = useAppSelector((store) => store.orders);
  const patient = useAppSelector((store) => store.patient);

  const [done, doneHandler] = React.useState(true);
  const [wait, waitHandler] = React.useState(true);
  const [pended, pendedHandler] = React.useState(true);

  // switch (props.status) {
  //   case OrderStatus.done:
  //     statusColor = "#30a5b052";
  //     break;
  //   case OrderStatus.pended:
  //     statusColor = "#f3bbbb";
  //     break;
  //   case OrderStatus.wait:
  //     statusColor = "#f5d94ba0";
  //     break;
  // }

  return (
    <FlatList
      className="p-5 pb-24"
      ListHeaderComponent={() => (
        <View className="flex flex-col space-y-5 mb-10">
          <StaffComponent {...user} />
          <View className="flex flex-row space-x-3">
            <Button
              onPress={() => {
                if (wait === true) {
                  if (done !== false || pended !== false) waitHandler(false);
                } else waitHandler(true);
              }}
              style={{
                backgroundColor: wait ? "#F8E78D" : "white",
              }}
              className="grow w-20 bg-blue rounded-xl p-3 items-center justify-center border-[#F8E78D] border-2"
            >
              <Label
                style={{
                  color: wait ? "black" : "#ddc655",
                }}
                className="text-white text-sm"
              >
                انتظار ویزیت
              </Label>
            </Button>
            <Button
              onPress={() => {
                if (pended === true) {
                  if (done !== false || wait !== false) pendedHandler(false);
                } else pendedHandler(true);
              }}
              style={{
                backgroundColor: pended ? "#f3bbbb" : "white",
              }}
              className="grow w-20 bg-blue rounded-xl p-3 items-center justify-center border-[#f3bbbb] border-2"
            >
              <Label
                style={{
                  color: pended ? "black" : "#f3bbbb",
                }}
                className="text-white text-sm"
              >
                تکمیل نشده
              </Label>
            </Button>
            <Button
              onPress={() => {
                if (done === true) {
                  if (wait !== false || pended !== false) doneHandler(false);
                } else doneHandler(true);
              }}
              style={{
                backgroundColor: done ? "#30a5b052" : "white",
              }}
              className="grow w-20 rounded-xl p-3 items-center justify-center border-2 border-[#30a5b052]"
            >
              <Label
                style={{
                  color: done ? "black" : "#30a5b0",
                }}
                className="text-white text-sm"
              >
                ویزیت شده
              </Label>
            </Button>
          </View>
        </View>
      )}
      data={orders.filter(
        (order) =>
          (done && order.status === OrderStatus.done) ||
          (wait && order.status === OrderStatus.wait) ||
          (pended && order.status === OrderStatus.pended)
      )}
      renderItem={({ item, index }) => (
        <Button key={index}>
          <OrderComponent {...item} />
        </Button>
      )}
    />
  );
}
