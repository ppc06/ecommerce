// Authentication related pages
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";

import { Products, Cart, Checkout } from '../components';
import PreviewProduct from "../components/Products/PreviewProduct";

// Authorized Pages
const authProtectedRoutes = [
  // Home
  { path: "/cart", component: Cart },
  { path: "/checkout", component: Checkout },
  { path: "/product/:id", component: PreviewProduct },
  { path: "/", component: Products },
];

// None Authorized pages
const publicRoutes = [
  { path: "/login", component: Login },
  { path: "/register", component: Register },
];

export { authProtectedRoutes, publicRoutes };
