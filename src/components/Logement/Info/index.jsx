import Tag from '../Tag/index'
import './index.css'

function Info({infosLogement}){
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
                    <p>+++++</p>
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