
import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";


//--------- app name: FOODIX ----------
//--------- Body --------- -

const stylecolor = {}
// const ResturantCard = (props) => {
//destructure on fly------->




const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <AboutUs />
            },
            {
                path: "/contactus",
                element: <Contact />,

            },
            {
                path: "/resturant/:redId",
                element: <ResturantMenu />
            }
        ]
    },

    {
        path: "*",
        element: <Error /> // Catch-all route for unmatched paths
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={appRouter} />
);

