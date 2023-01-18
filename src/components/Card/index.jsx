import './index.css'
import { Link } from 'react-router-dom'

function Card({title, cover, id}){


    return(
        <Link to={`/logement/${id}`}>
            <article id='card'>
                {cover && <img src={cover} alt='location'></img>}
                <p>{title}</p>
            </article>
        </Link>
       
    )
}

export default Card