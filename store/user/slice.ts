import { createSlice } from "@reduxjs/toolkit";

export enum StaffEnum {
  "پزشک",
  "پرستار",
  "فیزیوتراپیست",
  "داروساز",
}

export interface UserType {
  id: number;
  name: string;
  nezamCode: number;
  staffType: StaffEnum;
  desc?: string;
}
const initialState: {
  login: "accepted" | "rejected" | "pending" | "onLogin";
  account: UserType;
} = {
  login: "accepted",
  account: {
    id: 0,
    name: "مهدی نوری",
    nezamCode: 200000,
    staffType: StaffEnum.پزشک,
    desc: "پزشک فوق تخصص کامپیوتر",
  },
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
