import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';

import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';

/* 
Header 
    -Logo
    -NavItems
Body
    -Search
    -Card Container
    -RestaurantCard
        IMG, Name Star Rating, cuisines, time of delivery
Footer
    -CopyRight
    -Links
    -Address
    -Contact
*/

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet /> {/* Its Like a tunnel isme other components load honge */}
        </div>
    );
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
                element: <About />
            },

            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resId",
                element : <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    }
]);

const root = ReactDOM.createRoot(document.querySelector(".root"));
// root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter} />);