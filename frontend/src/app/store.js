import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/auth/authSlice";

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
