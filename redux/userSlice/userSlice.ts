import { createSlice } from "@reduxjs/toolkit";

type Props = {
  isUser: boolean;
};

const initVar: Props = {
  isUser: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initVar,
  reducers: {
    setIsUser: (state, action) => {
      state.isUser = action.payload;
    },
  },
});

export const { setIsUser } = userSlice.actions;
export default userSlice.reducer;
