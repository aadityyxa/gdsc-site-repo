import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.jsx";
import Podcast from "./pages/podcast/podcast.jsx";
import Events from './pages/events/events.jsx';
import Error from "./pages/error/error.jsx";
import Contact from "./pages/contact/contact.jsx";
import JoinUs from "./pages/Join Us/joinus.jsx";

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
        {
            path:'/contact',
            element: <Contact />
        },
        {
            path: '/join',
            element: <JoinUs />
        }
    ])


    return(
        <RouterProvider router={router} />
    )
}

export default Router; 