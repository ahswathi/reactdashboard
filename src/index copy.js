import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
 /*  Route,
  Link, */
  Outlet,
  /* createRoutesFromElements, */
} from "react-router-dom";
const App = () => (
  <>
    
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
        path: "orderlist",
        element: <Orderlist />,
      },
      {
        path: "todo",
        element: <Todo />,
      },
      {
        path: "team",
        element: <Team />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);