import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Shared/Secret";
import DashBoard from "../Layout/DashBoard";
import Cart from "../Pages/DashBoard/Cart";
import AllUsers from "../Pages/DashBoard/AllUsers";
import AddItems from "../Pages/DashBoard/AddItems";
import AdminRoute from "./AdminRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children : [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/menu',
          element: <Menu></Menu>
        },
        {
          path: '/order/:category',
          element: <Order></Order>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/secret',
          element: <PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children: [
          //normal user routes
        {
          path: 'cart',
          element: <Cart></Cart>
        },

        //admin only routes
        {
          path:'allUsers',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path:'addItems',
          element: <AdminRoute><AddItems></AddItems></AdminRoute>
        }
      ]
    }
  ]);


export default router ;