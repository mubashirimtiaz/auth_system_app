import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
const Login = lazy(() => import("./pages/login/login.page"));
const Home = lazy(() => import("./pages/home/home.page"));
const BasePage = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/home" />
        }
        <Route path="/home" exact component={Home} />
        <Route path="/auth" component={Login} />
        <Route path="/auth/login" component={Login} />
      </Switch>
    </Suspense>
  );
};

export default BasePage;
