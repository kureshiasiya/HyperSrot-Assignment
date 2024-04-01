import { combineReducers } from "redux";
import { taskReducer } from "./taskReducer";
import { AlertReducer } from "./AlertReducer";

const rootReducer = combineReducers({
  tasks: taskReducer,
  alert: AlertReducer,
});

export default rootReducer;
