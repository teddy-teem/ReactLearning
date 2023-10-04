import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
}
type UserState = {
    value: User[] | []
};

const initialState = {} as UserState;

export const userData = createSlice({
  name: "userData",
  initialState,
  reducers: {
    reset: () => initialState,
    setUsersData: (state:any, action: PayloadAction<number>) => {
        state.value=action.payload
    },
  },
});

export const {
  setUsersData,
  reset,
} = userData.actions;
export default userData.reducer;
