import imageAccueil from '../../assets/accueil/accueil-img.jpg'
import './index.css'

import { useLoaderData, defer, Await} from 'react-router-dom'
import { Suspense } from 'react'

import Banner from "../../components/Banner"
import Card from "../../components/Card"

import { getLogements } from '../../utils/api'

function Home(){
    const data = useLoaderData()
    
    return (
        <main>
            <Banner title="Chez vous, partout et ailleurs" imageAccueil={imageAccueil}/>
            <section id="cards">
                <Suspense fallback={<div className="progress"></div>}>
                    <Await resolve={data.logements}>
                        {(data) => {
                            return data.map((card) => {
                                return <Card
                                    key={`${card.title}-${card.id}`}
                                    title={card.title}
                                    cover={card.cover}
                                    id={card.id}
                                />
                            })
                        }}
                    </Await>
                </Suspense>
            </section> 
            
        </main>
    )
}

export default Home

export function LogementLoader() {
    return defer({logements: getLogements()})
}

