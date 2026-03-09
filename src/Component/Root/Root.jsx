import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
     errorElement: <ErrorPage></ErrorPage>,
  },
]);