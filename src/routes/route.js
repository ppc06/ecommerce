import React from "react";
import {Route, Redirect} from "react-router-dom";
import Breadcrumb from './breadcrumb.jsx';


const AppRoute = ({
                      component: Component,
                      isAuthProtected,
                      breadcrumb,
                      ...rest
                  }) => (
    <Route
        {...rest}
        render={props => {

            const getAuthenticatedToken = () => {
                if (!localStorage.getItem("authUser")) return null;
                return JSON.parse(localStorage.getItem("authUser"));
            };
            const authUser = getAuthenticatedToken();

            // Goto Login When not authorized
            if (isAuthProtected && !authUser) {
                return (
                    <Redirect
                        to={{pathname: "/auth", state: {from: props.location}}}
                    />
                );

                // Goto Home When authorized
            } else if (rest.path === '/auth' && authUser) {
                return (
                    <Redirect
                        to={{pathname: "/", state: {from: props.location}}}
                    />
                );
            }

            console.log('isAuth', isAuthProtected, rest.path);
            return (
                <>
                    { breadcrumb && <Breadcrumb breadcrumb={breadcrumb} />}
                    <Component {...props}/>
                </>
            );
        }}
    />
);

export default AppRoute;
