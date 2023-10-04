import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "@/redux/features/counterSlice";
import { userApi } from "./services/userApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import UserDataReducer from "@/redux/features/userSlice";

export const store = configureStore({
  reducer: {
    CounterReducer,
    [userApi.reducerPath]: userApi.reducer,
    UserDataReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([userApi.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
