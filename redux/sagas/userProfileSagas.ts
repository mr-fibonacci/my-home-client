import axios, { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchSuccess,
  fetchFail,
  IUserProfile,
  setIsLoading,
} from "../reducers/userProfileSlice";

export enum userProfileActions {
  FETCH = "userProfile/fetch",
  // CRUDLS?
  // UPDATE = "userProfile/update",
}

function* fetchUserProfileSaga({
  payload,
}: {
  payload: { id: string };
  type: userProfileActions.FETCH;
}) {
  try {
    yield put(setIsLoading());
    const { data } = (yield call(
      axios.get,
      `/profiles/${payload.id}/`
    )) as AxiosResponse<IUserProfile>;
    yield put(fetchSuccess(data));
  } catch (err) {
    yield put(fetchFail());
  }
}
function* watchFetchUserProfileSaga() {
  yield takeLatest(userProfileActions.FETCH, fetchUserProfileSaga);
}

export const userProfileSagas = [watchFetchUserProfileSaga()];
