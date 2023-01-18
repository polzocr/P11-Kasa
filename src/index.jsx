import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { BrowserRouter as Router, createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom';


import Home from './pages/Home/index'
import About from './pages/About/index'
import Logement from './pages/Logement/index'
import Layout from './pages/Layout/index'
import Footer from './components/Footer/index'
import Header from './components/Header/index'

import Contact from './components/Contact/index'
import Question from './components/Question/index'

import Error from './components/Error/index'
import { LogementLoader } from './pages/Home/index';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} loader={LogementLoader}/>
                <Route path='about' element={<About />} >   
                    <Route path='questions' element={<Question/>}/>
                    <Route path='contact' element={<Contact/>}/>
                </Route>
                <Route path='logement/:id' element={<Logement />} loader={LogementLoader}/>
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

