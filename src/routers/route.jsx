import App from "@/App";
import Contact from "@/Page/Contact";
import Home from "@/Page/Home";
import Product from "@/Page/Product";
import ProductDetails from "@/Page/ProductDetails";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h2>Error</h2>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Product />,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
