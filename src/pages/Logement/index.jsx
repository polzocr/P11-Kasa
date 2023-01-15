import { useParams } from "react-router-dom"
import dataLogements from '../../data/logements.json'

import Dropdown from "../../components/Dropdown/index"
import Tag from '../../components/Tag'

function Logement(){
    const { id } = useParams()
    const infosLogement = dataLogements.find((logement) => logement.id === id)
    console.log(infosLogement)
    return (
        <main>
            <section id="carousel">
                <div className="carousel">

                </div>
            </section>
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
            <section id="dropdowns-logement">
                <Dropdown 
                    key={`description-${infosLogement.id}`}
                    title = 'Description'
                    description={infosLogement.description}
                />
                <Dropdown
                    key={`equipments-${infosLogement.id}`}
                    title='Equipements'
                    description={infosLogement.equipments}
                />
            </section>
        </main>
    )
}

export default Logement