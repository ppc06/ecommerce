import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {CssBaseline} from '@material-ui/core';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import firebase from "firebase/app";

// Import Routes
import { authProtectedRoutes, publicRoutes } from "./routes/";
import AppRoute from "./routes/route";

import { Navbar } from './components';

import { fetchProducts, fetchCart } from './store/actions';

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
});


const App = ({ history }) => {
  const dispatch = useDispatch();

  const [mobileOpen, setMobileOpen] = React.useState(false);
 
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    // Fetch Proudcts and Cart From Commerce.js When only Authorized
    let authUser = JSON.parse(localStorage.getItem('authUser'));
    if(authUser){
      dispatch(fetchProducts());
      dispatch(fetchCart());
    }
  }, [dispatch]);

  return (
      <Router>
        <div className="container">
          <CssBaseline />
          <Navbar totalItems={cart.total_items} handleDrawerToggle={handleDrawerToggle} history={history} />
          <Switch>
            {authProtectedRoutes.map((route, idx) => (
              <AppRoute
                path={route.path}
                component={route.component}
                key={idx}
                isAuthProtected={true}
              />
            ))}
            {publicRoutes.map((route, idx) => (
                <AppRoute
                    path={route.path}
                    component={route.component}
                    key={idx}
                    isAuthProtected={false}
                />
            ))}
          </Switch>
        </div>
      </Router>
  );
};

export default App;
