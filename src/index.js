import React from "react";
import ReactDOM from "react-dom";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import axios from "axios";

//added default baseUrl to every http request
axios.defaults.baseURL = "https://accapi.bearplex.com/api/customer";

//added default config for header prop i.e Authentication
// axios.defaults.headers.common["Authorization"] = `Bearer`;

//added default config for header prop for every post request i.e Content-Type
axios.defaults.headers.post["Content-Type"] = "application/json";
//added default config for header prop for every post request i.e Accept
axios.defaults.headers.post["Accept"] = "application/json";

//intercept every http request goes out of our app and response come back
axios.interceptors.request.use(
  (request) => {
    console.log(request);
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
