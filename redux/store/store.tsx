import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../userSlice/userSlice";

const currentStore = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default currentStore;
export type RootState = ReturnType<typeof currentStore.getState>;
export type AppDispatch = typeof currentStore.dispatch;
