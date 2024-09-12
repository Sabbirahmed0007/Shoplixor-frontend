import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";


const routes = createBrowserRouter([
    {
        path: '/',
        element:<MainLayouts></MainLayouts>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path:"/",
                element: <Home></Home>
            }

        ]

    }
])

export default routes;