import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

// Import Routes
import { authProtectedRoutes, publicRoutes } from "./routes/";
import AppRoute from "./routes/route";

import { Navbar } from './components';

import { fetchProducts, fetchCart } from './store/actions';

const App = () => {
  const dispatch = useDispatch();

  const [mobileOpen, setMobileOpen] = React.useState(false);
 
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    // Fetch Proudcts and Cart From Commerce.js When only Authorized
    let token = localStorage.getItem('token');
    if(token){
      dispatch(fetchProducts());
      dispatch(fetchCart());
    }
  }, [dispatch]);

  return (
      <Router>
        <div style={{ display: 'flex' }}>
          <CssBaseline />
          <Navbar totalItems={cart.total_items} handleDrawerToggle={handleDrawerToggle} />
          <Switch>
            {publicRoutes.map((route, idx) => (
                <AppRoute
                  path={route.path}
                  component={route.component}
                  key={idx}
                  isAuthProtected={false}
                />
              ))}

              {authProtectedRoutes.map((route, idx) => (
                <AppRoute
                  path={route.path}
                  component={route.component}
                  key={idx}
                  isAuthProtected={true}
                />
              ))}
          </Switch>
        </div>
      </Router>
  );
};

export default App;
