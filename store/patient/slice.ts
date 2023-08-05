import { createSlice } from "@reduxjs/toolkit";

export type pmhType = {};

export type patientType = {
  id: number;
  name: string;
  age: number;
  pmh: string[];
  dh: string[];
  alergy: string[];
  comments: string[];
  gender: boolean;
};

const initialState: patientType[] = [
  {
    id: 0,
    name: "مهدی نوری",
    age: 19,
    pmh: [],
    dh: [],
    alergy: [],
    comments: [],
    gender: true,
  },
  {
    id: 1,
    name: "مهدی نوری",
    age: 19,
    pmh: [],
    dh: [],
    alergy: [],
    comments: [],
    gender: true,
  },
  {
    id: 2,
    name: "مهدی نوری",
    age: 19,
    pmh: [],
    dh: [],
    alergy: [],
    comments: [],
    gender: true,
  },
  {
    id: 3,
    name: "مهدی نوری",
    age: 19,
    pmh: [],
    dh: [],
    alergy: [],
    comments: [],
    gender: true,
  },
];

export const patientSlice = createSlice({
  name: "patientSlice",
  initialState,
  reducers: {},
});

export default patientSlice.reducer;
