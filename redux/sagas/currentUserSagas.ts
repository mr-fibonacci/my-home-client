import axios, { AxiosResponse } from "axios";
import Router from "next/router";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchFail,
  fetchSuccess,
  ICurrentUser,
  ISignInFormData,
  ISignUpFormData,
  setIsLoading,
  signInFail,
  signInSuccess,
  signOutFail,
  signOutSuccess,
  signUpFail,
  signUpSuccess,
} from "../reducers/currentUserSlice";

export enum currentUserActions {
  FETCH = "currentUser/fetch",
  SIGN_UP = "currentUser/signUp",
  SIGN_IN = "currentUser/signIn",
  SIGN_OUT = "currentUser/signOut",
}

function* fetchCurrentUserSaga() {
  try {
    yield put(setIsLoading());
    const { data } = (yield call(
      axios.get,
      "/dj-rest-auth/user/"
    )) as AxiosResponse<ICurrentUser>;
    yield put(fetchSuccess(data));
  } catch (err) {
    // NO TOASTIE!
    console.log(err.response.data);
    yield put(fetchFail());
  }
}
function* watchFetchCurrentUserSaga() {
  yield takeEvery(currentUserActions.FETCH, fetchCurrentUserSaga);
}

function* signUpSaga({
  payload,
}: {
  payload: ISignUpFormData;
  type: currentUserActions.SIGN_UP;
}) {
  try {
    yield put(setIsLoading());
    yield call(axios.post, "/dj-rest-auth/registration/", payload);
    yield put(signUpSuccess());
  } catch (err) {
    console.log(err.response.data);
    yield put(signUpFail(err.response.data));
  }
}
function* watchSignUpSaga() {
  yield takeEvery(currentUserActions.SIGN_UP, signUpSaga);
}

// here pass in data.user
function* signInSaga({
  payload,
}: {
  payload: ISignInFormData;
  type: currentUserActions.SIGN_IN;
}) {
  try {
    yield put(setIsLoading());
    const { data } = (yield call(
      axios.post,
      "/dj-rest-auth/login/",
      payload
    )) as { data: { user: ICurrentUser } };
    yield put(signInSuccess(data.user));
    // MANUAL TOASTIE?
    Router.push("/");
  } catch (err) {
    console.log(err.response.data);
    yield put(signInFail(err.response.data));
  }
}
function* watchSignInSaga() {
  yield takeEvery(currentUserActions.SIGN_IN, signInSaga);
}

function* signOutSaga() {
  try {
    yield put(setIsLoading());
    yield call(axios.post, "/dj-rest-auth/logout/");
    yield put(signOutSuccess());
    // TOASTIE!
  } catch (err) {
    console.log(err.response.data);
    yield put(signOutFail());
  }
}
function* watchSignOutSaga() {
  yield takeEvery(currentUserActions.SIGN_OUT, signOutSaga);
}

export const currentUserSagas = [
  watchFetchCurrentUserSaga(),
  watchSignUpSaga(),
  watchSignInSaga(),
  watchSignOutSaga(),
];
