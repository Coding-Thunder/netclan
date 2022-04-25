import { combineReducers } from "redux";
import dataReducer from "./data/data.reducer";
import drawerReducer from "./drawer/drawer.reducer";

const rootReducer = combineReducers({
  data: dataReducer,
  drawer: drawerReducer,
});

export default rootReducer;
