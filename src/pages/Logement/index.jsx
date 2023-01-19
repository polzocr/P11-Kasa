import { useLoaderData} from "react-router-dom"

import './index.css'

import Dropdown from "../../components/Dropdown/index"
import Info from "../../components/Logement/Info"
import Carousel from '../../components/Logement/Carousel'

import { getOneLogement } from "../../utils/api"



function Logement(){
    const infosLogement = useLoaderData()
    
    return (
        <main>
            <section id="logement">
                <section id="carousel">
                    <Carousel>
                        {infosLogement.pictures.map((picture,index) => {
                            return <img src={picture} alt="carousel" key={`image-${index}`}/>
                        })}
                    </Carousel>
                </section>
                <section id="infos">
                    <Info infosLogement={infosLogement} />
                </section>
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


export function idLogementLoader({params}){
    const {id} = params
    return getOneLogement(id)
}