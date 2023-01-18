import './index.css'
import { useEffect, useState } from 'react'



function Carousel({children}){
    const [imgNumber, setImgNumber] = useState(0)
    const [loading, setLoading] = useState(false)
    

    const oneImageClass = !children || children.length <= 1 ? 'remove' : ''

    function nextImage(){
        setImgNumber(imgNumber === children?.length-1 ? 0 : imgNumber+1)
    }

    function previousImage() {
        setImgNumber(imgNumber === 0 ? children?.length-1 : imgNumber -1)
    }

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        },1500)
    }, [])

    return(
        <div className="carousel">
            <div className='carousel-image'>
                {loading ? <div><div className='progress-6'></div><div className='charging'>{children}</div></div> : children && children[imgNumber]}
                {/* {children && children[imgNumber]} */}
            </div>
            <button className={`carousel-arrow left ${oneImageClass}`} onClick={previousImage}></button>
            <button className={`carousel-arrow right ${oneImageClass}`} onClick={nextImage}></button>
            <p className='carousel-number'>{imgNumber + 1}/{children?.length}</p>
        </div>
    )
}

export default Carousel














// window.addEventListener('keyup', function (e) {
//     e.preventDefault()
//     switch (e.key) {
//         case 'ArrowRight':
//             nextImage();
//             break;
//         case 'ArrowLeft':
//             previousImage();
//             break;
//         default:
//             break;
//     }
// })