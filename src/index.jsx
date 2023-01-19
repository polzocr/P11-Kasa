import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom';


import Home, { LogementLoader } from './pages/Home/index'
import About from './pages/About/index'
import Logement, {idLogementLoader} from './pages/Logement/index'
import Layout from './pages/Layout/index'

import Error from './components/Error/index'
import ErrorPage from './components/Error/Error-page'


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path='/' element={<Layout />} errorElement={<Error />}>
                <Route index element={<Home />} loader={LogementLoader} errorElement={<ErrorPage />} />
                <Route path='about' element={<About />} />   
                <Route path='logement/:id' element={<Logement />} loader={idLogementLoader} errorElement={<ErrorPage />} />
            </Route>
            <Route path='*' element={<Error />} />
        </Route>
    )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

