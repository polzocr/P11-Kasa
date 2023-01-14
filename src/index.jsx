import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/index'
import About from './pages/About/index'
import Logement from './pages/Logement/index'

import Header from './components/Header/index'
import Footer  from './components/Footer/index'
import Error from './components/Error/index'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path='/about' element={<About />}/>
                <Route path='/logement/:id' element={<Logement />}/>
                <Route path='*' element={<Error />}/>
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
);

