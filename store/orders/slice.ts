import { createSlice } from "@reduxjs/toolkit";

export enum OrderStatus {
  done = "ویزیت شده",
  pended = "تکمیل نشده",
  wait = "در انتظار ویزیت",
}

export type orderType = {
  id: number;
  status: OrderStatus;
  patient: number;
  work: string;
  orderTime: number;
};

const initialState: orderType[] = [
  {
    id: 0,
    status: OrderStatus.wait,
    patient: 0,
    work: "درخواست ویزیت",
    orderTime: Date.now(),
  },
  {
    id: 1,
    status: OrderStatus.pended,
    patient: 1,
    work: "درخواست ویزیت",
    orderTime: Date.now(),
  },
  {
    id: 2,
    status: OrderStatus.done,
    patient: 3,
    work: "درخواست ویزیت",
    orderTime: Date.now(),
  },
  {
    id: 3,
    status: OrderStatus.done,
    patient: 0,
    work: "درخواست ویزیت",
    orderTime: Date.now(),
  },
  {
    id: 4,
    status: OrderStatus.done,
    patient: 0,
    work: "درخواست ویزیت",
    orderTime: Date.now(),
  },
  {
    id: 5,
    status: OrderStatus.done,
    patient: 0,
    work: "درخواست ویزیت",
    orderTime: Date.now(),
  },
  {
    id: 6,
    status: OrderStatus.done,
    patient: 0,
    work: "درخواست ویزیت",
    orderTime: Date.now(),
  },
  {
    id: 7,
    status: OrderStatus.done,
    patient: 0,
    work: "درخواست ویزیت",
    orderTime: Date.now(),
  },
  {
    id: 8,
    status: OrderStatus.done,
    patient: 0,
    work: "درخواست ویزیت",
    orderTime: Date.now(),
  },
  {
    id: 9,
    status: OrderStatus.done,
    patient: 0,
    work: "درخواست ویزیت",
    orderTime: Date.now(),
  },
];

export const OrdersSlice = createSlice({
  name: "orderSlice",
  initialState,
  reducers: {},
});

export default OrdersSlice.reducer;
