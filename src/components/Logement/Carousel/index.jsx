import './index.css'
import { useState } from 'react'

function Carousel({children}){
    const [imgNumber, setImgNumber] = useState(0)

    function nextImage(){
        setImgNumber(imgNumber === children.length-1 ? 0 : imgNumber+1)
    }

    function previousImage() {
        setImgNumber(imgNumber === 0 ? children.length-1 : imgNumber -1)
    }
    return(
        <div className="carousel">
            <div className='carousel-image'>
                {children[imgNumber]}
            </div>
            <button className='carousel-arrow left' onClick={previousImage}></button>
            <button className='carousel-arrow right' onClick={nextImage}></button>
            <div className='carousel-number'>{imgNumber + 1}/{children.length}</div>
        </div>
    )
}

export default Carousel