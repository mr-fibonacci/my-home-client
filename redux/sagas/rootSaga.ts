import { all } from "redux-saga/effects";
import { currentUserSagas } from "./currentUserSagas";
import { userProfileSagas } from "./userProfileSagas";

export default function* rootSaga() {
  yield all([...currentUserSagas, ...userProfileSagas]);
}
