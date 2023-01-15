import './index.css'
import imageLoc from '../../assets/accueil/accueil-img.jpg'
import { Link } from 'react-router-dom'

function Card({title, cover, id}){
    return(
        <Link to={`/logement/${id}`}>
            <article id='card'>
                <img src={cover} alt='image location'></img>
                <p>{title}</p>
            </article>
        </Link>
       
    )
}

export default Card