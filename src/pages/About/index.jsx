import imageBanner from '../../assets/about/about-img.jpg'
import './index.css'

import DropdownData from '../../data/dropdown.json'

import Banner from '../../components/Banner/index'
import Dropdown from '../../components/Dropdown/index'

import { Link, Outlet } from 'react-router-dom'

function About(){
    return (
        <main>
            <Banner imageAccueil={imageBanner} />
            <section id='dropdowns-about'>
                {DropdownData.map((dropdown) => {
                    return <Dropdown
                        key={`${dropdown.title}-${dropdown.id}`}
                        title={dropdown.title}
                        description={dropdown.description}
                    />
                })}
            </section>
            <Link to="/about/questions">Questions</Link>
            <Link to="/about/contact">Contact</Link>
            <Outlet />
            
        </main>
    )
}

export default About