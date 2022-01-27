import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAsyncState } from "../redux-slice-interfaces";
import { RootState } from "../reduxStore";

export interface IUserProfile {
  id: number;
  owner: number;
  phone_number: number;
  email: string;
  title: string;
  first_name: string;
  last_name: string;
  image: string;
  created_at_naturaltime: string;
  updated_at_naturaltime: string;
}

interface IUserProfileErrors {
  first_name?: string;
  last_name?: string;
  image?: string;
  detail?: string;
}

type IUserProfileState = IAsyncState<
  IUserProfile | Record<string, never>,
  IUserProfileErrors
>;

const initialState: IUserProfileState = {
  isLoading: true,
  data: {},
  errors: {},
  feedback: {},
};

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    setIsLoading: (state) => {
      state.isLoading = true;
    },
    fetchSuccess: (state, action: PayloadAction<IUserProfile>) => {
      return {
        isLoading: false,
        data: action.payload,
        errors: {},
        feedback: {},
      };
    },
    fetchFail: (state) => {
      state.isLoading = false;
      state.errors = {
        detail:
          "Apologies, there has been an issue fetching a user profile. Please refresh the page.",
      };
    },
  },
});

export const { setIsLoading, fetchSuccess, fetchFail } =
  userProfileSlice.actions;

export const selectUserProfile = (state: RootState) => state.userProfile;
export const userProfileReducer = userProfileSlice.reducer;
