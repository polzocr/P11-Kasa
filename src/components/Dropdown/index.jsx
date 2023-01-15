import './index.css'
import arrow from '../../assets/dropdown/arrow.svg'

import { useState } from 'react'

function Dropdown({title, description }){

    const [dropOpen, setDropOpen] = useState(false)
    
    return (
        <div className={dropOpen ? 'dropdown active' : 'dropdown'}>
            <button className='dropdown-title' onClick={() => setDropOpen(!dropOpen)}>
                <h2>{title}</h2>
                <img src={arrow} alt="arrow dropdown"></img>
            </button>
            <div className='dropdown-content'>
                {typeof (description) == 'object' ? (
                    description.map((element, index) => {
                        return <p key={`${element}-${index}`}>
                                {element}
                                </p>
                    })
                ) : (
                    <p>{description}</p>
                )}
            </div>
        </div>
    )
}

export default Dropdown