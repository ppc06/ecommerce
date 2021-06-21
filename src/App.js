import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Switch} from 'react-router-dom';
import firebase from "firebase/app";
// Import Routes
import {authProtectedRoutes, publicRoutes} from "./routes/";
import AppRoute from "./routes/route";

import Layout from './components/Layout';

import {fetchProducts, fetchCart} from './store/actions';

firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
});


const App = ({history}) => {
    const dispatch = useDispatch();
    const current_product = useSelector((state) => state.product);

    useEffect(() => {
        // Fetch Proudcts and Cart From Commerce.js When only Authorized
        dispatch(fetchProducts());
        dispatch(fetchCart());

    }, [dispatch]);

    return (
        <Layout history={history}>
            <Switch>
                {authProtectedRoutes.map((route, idx) => (
                    <AppRoute
                        path={route.path}
                        component={route.component}
                        key={idx}
                        isAuthProtected={true}
                        breadcrumb={route.meta?.breadcrumb}
                    />
                ))}
                {publicRoutes.map((route, idx) => (
                    <AppRoute
                        path={route.path}
                        component={route.component}
                        key={idx}
                        isAuthProtected={false}
                        breadcrumb={route.meta?.breadcrumb}
                        pageTitle={current_product?.name??route.pageTitle}
                    />
                ))}
            </Switch>
        </Layout>
    );
};

export default App;