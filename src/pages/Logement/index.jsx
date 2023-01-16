import { useParams, Navigate } from "react-router-dom"

import dataLogements from '../../data/logements.json'
import './index.css'

import Dropdown from "../../components/Dropdown/index"
import Info from "../../components/Logement/Info"
import Carousel from '../../components/Logement/Carousel'



function Logement(){
    const { id } = useParams()
    const infosLogement = dataLogements.find((logement) => logement.id === id)
    console.log(infosLogement)
    if(infosLogement === undefined){
        return <Navigate to="*" replace={true} />
    }
    return (
        <main>
            <section id="logement">

                <section id="carousel">
                    <Carousel>
                        {infosLogement.pictures.map((picture,index) => {
                            return <img src={picture} alt="image carousel" key={`image-${index}`}/>
                        })}
                    </Carousel>
                </section>
                <Info infosLogement={infosLogement}/>
                <section id="dropdowns-logement">
                    <Dropdown
                        key={`description-${infosLogement.id}`}
                        title='Description'
                        description={infosLogement.description}
                    />
                    <Dropdown
                        key={`equipments-${infosLogement.id}`}
                        title='Equipements'
                        description={infosLogement.equipments}
                    />
                </section>
            </section>
        </main>
    )
}

export default Logement