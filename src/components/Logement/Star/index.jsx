import './index.css'
import star from '../../../assets/logement/grey-star.svg'

function Star({color}){
    return (
        <img src={star} alt="rating star" className={color ? 'rating-star colored' : 'rating-star'}/>
    )
}

export default Star