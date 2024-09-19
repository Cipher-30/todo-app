import {createBrowserRouter} from "react-router-dom"
import Body from "./components/Body"
import AddNewTask from "./components/AddNewTask"
import ErrorPage from "./components/ErrorPage";
import AddCategory from "./components/AddCategory";






const appRouter = createBrowserRouter([
    {
     path: "/",
     element: <Body/>,
     children: [{}]
    },
    {
      path: "/add",
      element: <AddNewTask/>,

    },
    {
      path:"/notFound",
      element: <ErrorPage/>
    },
    {
      path:"/categories",
      element: <AddCategory/>
    }
  ])


  export default appRouter;
