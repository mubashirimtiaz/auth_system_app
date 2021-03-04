import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./Auth/authSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: "customer-auth",
  whitelist: ["auth"],
  storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
});

export default persistReducer(persistConfig, rootReducer);
