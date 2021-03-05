import { useRef, useEffect } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import BasePage from "./BasePage";
import Login from "./pages/login/login.page";
import { logout } from "./redux/Auth/authSlice";
export function Routes() {
  const { isLoggedIn, isUnAuthorized } = useSelector(({ auth }) => {
    return {
      isLoggedIn: auth.isLoggedIn !== false,
      isUnAuthorized: auth.isUnAuthorized,
    };
  }, shallowEqual);

  const dispatch = useDispatch();

  const authCheck = useRef(false);

  useEffect(() => {
    if (authCheck.current) {
      dispatch(logout());
    } else {
      authCheck.current = true;
    }
  }, [dispatch, isUnAuthorized]);

  return (
    <Switch>
      {!isLoggedIn ? (
        /*Render auth page when user at `/auth` and not authorized.*/
        <Route path="/auth">
          <Login />
        </Route>
      ) : (
        /*Otherwise redirect to root page (`/`)*/
        <Redirect from="/auth" to="/" />
      )}
      {!isLoggedIn ? (
        /*Redirect to `/auth` when user is not authorized*/
        <Redirect to="/auth/login" />
      ) : (
        <BasePage />
      )}
    </Switch>
  );
}
