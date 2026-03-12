import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Display from "../Pages/Display/Display";
import ListedBook from "../Pages/ListedBook/ListedBook";
import pageToRead from "../Pages/pageToRead/pageToRead";
import BookDetails from "../Pages/BookDetails/BookDetails";

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
      },
      {
         path:"/listedBook",
        Component:ListedBook
      },
      {
         path:"/pageToRead",
        Component:pageToRead
      },
      {
         path:"/bookDetails/:id",
         loader:()=> fetch('/booksData.json'),
        Component:BookDetails
      },

     ]
  },
]);