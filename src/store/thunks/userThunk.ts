import { userSlice } from 'store/slices/userSlice';
import { AppDispatch } from 'store/store';
export type SignupUserData = {
  name: string;
  login: string;
  password: string;
};
export type LoginUserData = Omit<SignupUserData, 'name'>;
// export const getCurrentUserByIdThunk =
//   (userData: LoginUserData) => async (dispatch: AppDispatch) => {
//     dispatch(userSlice.actions.setUser());
//     const res = await userService.signin(userData);
//     if (res.token) {
//   setTokenLocalStorage(res.token);
//   const decodedToken = jwt_decode<DecodedToken>(res.token);
//   return dispatch(getCurrentUserByIdThunk(decodedToken.userId));
// }
//   };
