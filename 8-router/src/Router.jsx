import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Layout } from "./components/Layout/Layout";
import { Movies } from "./components/Movies/Movies";
import { Movie } from "./components/Movie/Movie";
import { Cart } from "./components/Cart/Cart";

export const router = createBrowserRouter([
  {
    path: "/", // http://localhost:3000/
    element: <Layout />,
    children: [
      {
        path: "/", // http://localhost:3000/
        element: <App />,
        index: true,
      },
      {
        path: "/about", // http://localhost:3000/about
        element: <About />,
      },
      {
        path: "/contact", // http://localhost:3000/contact
        element: <Contact />,
      },
      {
        path: "/movies", // http://localhost:3000/movies
        element: <Movies />,
      },
      {
        path: "/movie/:id", // http://localhost:3000/movie/tt12345
        element: <Movie />,
      },
      {
        path: "/cart", // http://localhost:3000/cart
        element: <Cart />,
      },
    ],
  },
]);
