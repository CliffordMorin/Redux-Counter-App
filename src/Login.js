import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div>
      {isAuthenticated ? (
        <>
          <h1>Hey, {user.name} welcome to the Redux Counter!</h1>
          <button
            onClick={() => {
              dispatch({ type: "SIGN_IN" });
              logout({ returnTo: window.location.origin });
            }}
          >
            Sign Out
          </button>
        </>
      ) : isLoading ? (
        <div>Loading.....</div>
      ) : (
        <>
          <h1>Sign In to make the counter magic!</h1>
          <button
            onClick={() => {
              dispatch({ type: "SIGN_IN" });
              loginWithRedirect();
            }}
          >
            Sign In
          </button>
        </>
      )}
    </div>
  );
};

export default Login;
