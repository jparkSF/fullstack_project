import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";

const mSTP = state => {
  return {
    loggedIn: Boolean(state.session.currentUser)
  };
};

const Auth = ({ loggedIn, path, component: Component }) => {
  return (
    <Route
      path={path}
      render={props => <Redirect to="/" />}
      render={props =>
        loggedIn ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

const Protected = ({ loggedIn, path, component: Component }) => (
  <Route
    path={path}
    render={props =>
      loggedIn ? <Component {...props} /> : <Redirect to="/signup" />
    }
  />
);

export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP)(Protected));
