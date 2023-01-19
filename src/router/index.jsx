import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';


import Home, { LogementLoader } from '../pages/Home/index'
import About from '../pages/About/index'
import Logement, { idLogementLoader } from '../pages/Logement/index'
import Layout from '../pages/Layout/index'
import ErrorPage from '../pages/Error/index'

import Error from '../components/Error/index'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: LogementLoader,
                errorElement: <Error />
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/logement/:id',
                element: <Logement />,
                loader: idLogementLoader,
                errorElement: <Error />
            }
        ],
    },
    {
        path: '*',
        element: <ErrorPage />
    }
])

function Router() {


    return (
        <RouterProvider router={router} />
    )
}

export default Router
