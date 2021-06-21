import React from 'react';
import {CssBaseline} from '@material-ui/core';
import {Navbar} from "../index";
import {useSelector} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import Footer from "../Footer/Footer";

const Layout = ({ children, history }) => {

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    const cart = useSelector(state => state.cart);

    return (
        <Router>
            <div className="container">
                <CssBaseline />
                <Navbar totalItems={cart.total_items} handleDrawerToggle={handleDrawerToggle} history={history} />
                { children }
            </div>
            <Footer />
        </Router>
    )
}

export default Layout;