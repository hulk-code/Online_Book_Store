import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Display from "../Pages/Display/Display";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
     errorElement: <ErrorPage></ErrorPage>,
     children:[
      {
        index:true ,
        path:"/",
        Component:Display
      }
     ]
  },
]);