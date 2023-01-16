import Tag from '../Tag/index'
import Star from '../Star'

import './index.css'

function Info({infosLogement}){

    const tabRating = [1,1,1,1,1]
    let rating = infosLogement.rating

    return (
        <section id="infos">
            <div className="infos-where">
                <h1>{infosLogement.title}</h1>
                <p>{infosLogement.location}</p>
                <div className="infos-where-tags">
                    {infosLogement.tags.map((tag, index) => {
                        return <Tag
                            key={`${tag}-${index}`}
                            name={tag}
                        />
                    })}
                </div>
            </div>
            <div className="infos-name">
                <div className="infos-name-rating">
                    {tabRating.map((rate, index) => {
                        rating--
                        if(rating >= 0){
                            return <Star color={true} key={`rating-${index}`}/>
                        } else {
                            return <Star color={false} key={`rating-${index}`} />
                        }
                    })}
                </div>
                <div className="infos-name-profil">
                    <p>{infosLogement.host.name}</p>
                    <img src={infosLogement.host.picture} alt='image-propriétaire'></img>
                </div>
            </div>
        </section>
    )
}

export default Info