import { Redirect, Switch, Route } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import BasePage from "./BasePage";
import Login from "./pages/login/login.page";

export function Routes() {
  const { isAuthorized } = useSelector(({ auth }) => {
    return {
      isAuthorized: auth.token !== null,
    };
  }, shallowEqual);

  return (
    <Switch>
      {!isAuthorized ? (
        /*Render auth page when user at `/auth` and not authorized.*/
        <Route path="/auth">
          <Login />
        </Route>
      ) : (
        /*Otherwise redirect to root page (`/`)*/
        <Redirect from="/auth" to="/" />
      )}
      {!isAuthorized ? (
        /*Redirect to `/auth` when user is not authorized*/
        <Redirect to="/auth/login" />
      ) : (
        <BasePage />
      )}
    </Switch>
  );
}
