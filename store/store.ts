import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import user from "./user/slice"

export const store = configureStore({
    reducer: {
      user
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
