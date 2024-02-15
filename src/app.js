import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';

import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';

const Grocery = lazy(() => import("./components/Grocery"));

const About = lazy(() => import('./components/About'));

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
                element: <Suspense fallback={<h1>Loading About...</h1>}> <About /> </Suspense>
            },

            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resId",
                element : <RestaurantMenu />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}> <Grocery /> </Suspense>
            }
        ],
        errorElement: <Error />
    }
]);

const root = ReactDOM.createRoot(document.querySelector(".root"));
// root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter} />);