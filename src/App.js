import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";
const App = () => {
  return (
    <div className="App">
      <p>Hello from Customer's Dashboard</p>
      {/* <Button /> */}
      <React.Suspense fallback={<h1>Loading..</h1>}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </React.Suspense>
    </div>
  );
};

export default App;
