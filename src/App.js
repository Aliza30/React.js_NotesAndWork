
import React, { Children, Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";
import Shimmer from "./components/Shimmer";
// import Grocery from "./components/Grocery";
//--------- app name: FOODIX ----------
//--------- Body --------- -

const stylecolor = {}
// const ResturantCard = (props) => {
//destructure on fly------->


const Grocery = lazy(() => import("./components/Grocery"));

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

            }, {
                path: "/grocery",
                element: <Suspense fallback={<Shimmer />}> <Grocery /></Suspense>,

            },
            {
                path: "/resturant/:resId",
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

