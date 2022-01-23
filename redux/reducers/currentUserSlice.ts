import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAsyncState } from "../redux-slice-interfaces";
import { RootState } from "../reduxStore";

export interface ICurrentUser {
  pk: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
}

export interface ISignUpFormData {
  email: string;
  password1: string;
  password2: string;
}
export interface ISignUpErrors {
  email?: string[];
  password1?: string[];
  password2?: string[];
  non_field_errors?: string[];
}

export interface ISignInFormData {
  email: string;
  password: string;
}
export interface ISignInErrors {
  email?: string[];
  password?: string[];
  non_field_errors?: string[];
}

// why the heck did type ICurrentUserErrors = ISignUpErrors | ISignInErrors not work?
interface ICurrentUserErrors extends ISignUpErrors, ISignInErrors {}

type ICurrentUserState = IAsyncState<
  ICurrentUser | Record<string, never>,
  ICurrentUserErrors
>;

// Define the initial state using that type
const initialState: ICurrentUserState = {
  isLoading: true,
  data: {},
  errors: {},
  feedback: {},
};

// have to return action.payload (or sth) if updating the whole state!!!
export const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setIsLoading: (state) => {
      state.isLoading = true;
    },
    fetchSuccess: (state, action: PayloadAction<ICurrentUser>) => {
      return {
        isLoading: false,
        data: action.payload,
        errors: {},
        feedback: {},
      };
    },
    fetchFail: () => {
      return { ...initialState, isLoading: false };
    },
    signUpSuccess: () => {
      return { ...initialState, isLoading: false, feedback: { detail: "ok" } };
    },
    signUpFail: (state, action: PayloadAction<ISignUpErrors>) => {
      return { ...initialState, isLoading: false, errors: action.payload };
    },
    // call with data.user (as there are tokens attached)
    signInSuccess: (state, action: PayloadAction<ICurrentUser>) => {
      return { ...initialState, isLoading: false, data: action.payload };
    },
    signInFail: (state, action: PayloadAction<ISignInErrors>) => {
      return { ...initialState, isLoading: false, errors: action.payload };
    },
    signOutSuccess: () => {
      return { ...initialState, isLoading: false };
    },
    signOutFail: (state) => {
      return { ...state };
    },
    // Use the PayloadAction type to declare the contents of `action.payload` (state type inferred)
    // updateCurrentUser: (state, action: PayloadAction<ICurrentUser>) => {
    //   // action.payload; action.type already taken care of?
    //   // YES, computer generated strings by redux toolkit, i.e.: 'currentUser/signOut'
  },
});

export const {
  setIsLoading,
  fetchSuccess,
  fetchFail,
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  signOutSuccess,
  signOutFail,
} = currentUserSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCurrentUser = (state: RootState) => state.currentUser;
export const currentUserReducer = currentUserSlice.reducer;

// how to use types when accessing nested state properties
// const selectCurrentUserPk = (state:RootState) => state.currentUser.pk
