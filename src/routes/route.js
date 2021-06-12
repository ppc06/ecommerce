import React from "react";
import { Route, Redirect } from "react-router-dom";

const AppRoute = ({
  component: Component,
  isAuthProtected,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {

      const getAuthenticatedToken = () => {
        if (!localStorage.getItem("token")) return null;
        return localStorage.getItem("token");
      };
      const authToken = getAuthenticatedToken();
      
      // Goto Login When not authorized
      if (isAuthProtected && !authToken) {
        return (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        );

        // Goto Home When authorized
      } else if(!isAuthProtected && authToken){
        return (
          <Redirect
            to={{ pathname: "/", state: { from: props.location } }}
          />
        );
      }

      console.log('isAuth', isAuthProtected);
      return (
        <Component {...props}/>
      );
    }}
  />
);

export default AppRoute;
