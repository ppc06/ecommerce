// Authentication related pages
import Home from "../components/Home/Index";
import Auth from "../components/Auth/Index";

import { Products, Cart, Checkout } from '../components';
import PreviewProduct from "../components/Products/PreviewProduct";

// Authorized Pages
const authProtectedRoutes = [
  // Home
];

// None Authorized pages
const publicRoutes = [
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/checkout",
    component: Checkout,
  },
  {
    path: "/product/:id",
    component: PreviewProduct,
    meta: {
      breadcrumb: [
        { title: 'Home', url: '/' },
        { title: 'Products', url: '/products' },
        { title: 'Product' }
      ],
      pageTitle: 'Preview',
    }
  },
  {
    path: "/products",
    component: Products,
  },
  {
    path: "/auth",
    component: Auth,
  },
  {
    path: "/",
    component: Home,
  },
];

export { authProtectedRoutes, publicRoutes };
