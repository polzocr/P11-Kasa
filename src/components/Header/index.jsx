import { Link, NavLink } from "react-router-dom"
import { useState } from "react"

import logo from '../../assets/header/header-logo.svg'
import k from '../../assets/header/header-k.png'
import s from '../../assets/header/header-s.png'
import a from '../../assets/header/header-a.png'
import './index.css'

function Header() {
    let currentUrl = window.location.pathname
    return (
        <section id="header">
            
            <div className="header">
                <div className="header-logo">
                    <span>K</span>
                    <img src={logo} alt='logo kasa' />
                    <span>sa</span>
                </div>
                {/* <div className="header-logo">
                    <div><img src={k} alt='logo kasa'/></div>
                    <div><img src={logo} alt='logo kasa' /></div>
                    <div><img src={s} alt='logo kasa' /></div>
                    <div><img src={a} alt='logo kasa' /></div>
                </div> */}
                <nav className="header-nav">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'header-nav-link link-active' : 'header-nav-link'}>Accueil</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'header-nav-link link-active' : 'header-nav-link'}>A Propos</NavLink>
                </nav>
            </div>
        </section>
    )
}
export default Header