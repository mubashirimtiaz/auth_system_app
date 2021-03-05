import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./Auth/authSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: "customer-auth",
  blacklist: ["isPending", "isError", "isNetworkEstablished", "isLoggedIn"],
  storage: storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
});

export default rootReducer;
