import { all, fork } from "redux-saga/effects";
import { taskSaga } from "./taskSaga";

function* rootSaga() {
  yield all([fork(taskSaga)]);
}

export default rootSaga;
