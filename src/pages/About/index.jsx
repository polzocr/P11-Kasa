import imageBanner from '../../assets/about/about-img.jpg'
import './index.css'

import DropdownData from '../../data/dropdown.json'

import Banner from '../../components/Banner/index'
import Dropdown from '../../components/Dropdown/index'

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
            
        </main>
    )
}

export default About