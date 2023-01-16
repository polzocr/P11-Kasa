// import { useEffect } from 'react'
import imageAccueil from '../../assets/accueil/accueil-img.jpg'
import './index.css'

import Banner from "../../components/Banner"
import Card from "../../components/Card"

import data from '../../data/logements.json'

function Home(){

    // useEffect(() => {
    //     async function fetchData(){
    //         const response = await fetch('../../data/logements.json')
    //         const data = await response.json()
    //         console.log(data)
    //     }
    //     fetchData()
    // }, [])
    console.log(data)
    return (
        <main>
            <Banner title="Chez vous, partout et ailleurs" imageAccueil={imageAccueil}/>
            <section id="cards">
                {data.map((card) => {
                    return <Card
                            key={`${card.title}-${card.id}`}
                            title={card.title}
                            cover={card.cover} 
                            id={card.id}
                            />
                })}
            </section>
        </main>
    )
}

export default Home