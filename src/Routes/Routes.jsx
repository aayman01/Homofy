import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage";
import Register from "../pages/Register/Register";
import PropertyDeatils from "../pages/PropertyDeatils/PropertyDeatils";
import PrivateRoutes from "./PrivateRoutes";
import UpdateProfile from "../pages/UpdateProfile";
import AddProperty from "../pages/AddProperty";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/property/:id",
        element: (
          <PrivateRoutes>
            <PropertyDeatils />
          </PrivateRoutes>
        ),
        loader: () => fetch("/data.json"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/updateprofile",
        element: (
          <PrivateRoutes>
            <UpdateProfile />
          </PrivateRoutes>
        ),
      },
      {
        path: "/addproperty",
        element: (
          <PrivateRoutes>
            <AddProperty />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
