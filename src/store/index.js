import { combineReducers } from "redux"; // 만든 리듀서들을 하나로 합침
import tapReducer from "./tap";

const rootReducer = combineReducers({
  tapReducer,
});

export default rootReducer;
