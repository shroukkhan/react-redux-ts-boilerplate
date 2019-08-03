import { takeLatest } from "redux-saga/effects";
import * as app from "./app";
import { AppActionTypes } from "../redux/app";

export default function* rootSaga() {
  yield [takeLatest(AppActionTypes.STARTUP, app.startup)];
}
