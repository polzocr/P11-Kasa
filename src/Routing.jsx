import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/index'
import About from './pages/About/index'
import Logement from './pages/Logement/index'
import Layout from './pages/Layout/index'

import Error from './components/Error/index'


function Routing(){
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />}/>
                <Route path='about' element={<About />} />
                <Route path='logement/:id' element={<Logement />} />
            </Route>
            <Route path='*' element={<Error />} />
        </Routes>
    )
}

export default Routing