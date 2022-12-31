import { createSlice, PayloadAction } from '@reduxjs/toolkit';
type User = { user: string };
type UserInitialState = {
  userName?: User;
};

const initialState: UserInitialState = {
  userName: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | undefined>) => {
      state.userName = action.payload;
    },
  },
});
