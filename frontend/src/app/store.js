import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "../modules/auth/auth-slice";

const rootReducer = combineReducers({
  auth: authReducer,
});

const resettableRootReducer = (state, action) => {
  if (action.type === "store/reset") {
    return rootReducer(undefined, action);
  }
  return rootReducer(state, action);
};

export const store = configureStore({
  reducer: resettableRootReducer,
});
