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
    meta: {
      breadcrumb: [
        { title: 'Home', url: '/' },
        { title: 'Cart' }
      ],
      pageTitle: 'Cart',
    }
  },
  {
    path: "/checkout",
    component: Checkout,
    meta: {
      breadcrumb: [
        { title: 'Home', url: '/' },
        { title: 'Checkout' }
      ],
      pageTitle: 'Checkout',
    }
  },
  {
    path: "/product/:id",
    component: PreviewProduct,
    meta: {
      breadcrumb: [
        { title: 'Home', url: '/' },
        { title: 'Products', url: '/products' },
        { title: 'Preview' }
      ],
      pageTitle: 'Preview',
    }
  },
  {
    path: "/products",
    component: Products,
    meta: {
      breadcrumb: [
        { title: 'Home', url: '/' },
        { title: 'Products'},
      ],
      pageTitle: 'Products',
    }
  },
  {
    path: "/auth",
    component: Auth,
    meta: {
      breadcrumb: [
        { title: 'Home', url: '/' },
        { title: 'Authorization'},
      ],
      pageTitle: 'Authorization',
    }
  },
  {
    path: "/",
    component: Home,
    meta: {
      breadcrumb: [
        { title: 'Home' },
      ],
      pageTitle: 'Home',
    }
  },
];

export { authProtectedRoutes, publicRoutes };
