import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Menu from "./Menu";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const Approuter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/res/:id",
        element:<Menu/>
      }
    ],
    errorElement: <Error />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={Approuter} />
);
