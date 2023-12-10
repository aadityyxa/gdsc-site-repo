import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.jsx";
import Podcast from "./pages/podcast/podcast.jsx";
import Events from './pages/events/events.jsx';
import Error from "./pages/error/error.jsx";

const Router = () => {

    const router = createBrowserRouter([
        {
            path:'/',
            element:<Homepage/>,
            errorElement:<Error />
        }, 
        {
            path:'/events', 
            element:<Events />
        }, 
        {
            path:'/podcast', 
            element:<Podcast />
        }, 
    ])


    return(
        <RouterProvider router={router} />
    )
}

export default Router; 