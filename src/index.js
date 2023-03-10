import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import Products from "./routes/Products";

import Navbar from "./Components/Navbar";
import "./App.css";
import Dashboard from "./routes/Dashboard";
import Pricing from "./routes/Pricing";
import Orderlists from "./routes/Orderlists";
import Team from "./routes/Team";
import Todo from "./routes/Todo";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route element={<AppLayout />}>
//       <Route path="/" element={<Home />} />
//       <Route path="/products" element={<Products />} />
//       <Route path="/reports" element={<Reports />} />
//     </Route>
//   )
// );

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "orderlists",
        element: <Orderlists />,
      },
      {
        path: "todo",
        element: <Todo />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);