import { all } from "redux-saga/effects";
import { currentUserSagas } from "./currentUserSagas";

export default function* rootSaga() {
  yield all([...currentUserSagas]);
}
