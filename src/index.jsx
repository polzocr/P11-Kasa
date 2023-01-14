import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Routing from './Routing';

import Header from './components/Header/index'
import Footer  from './components/Footer/index'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routing />
            <Footer />
        </Router>
    </React.StrictMode>
);

