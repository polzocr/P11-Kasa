import imageAccueil from '../../assets/accueil/accueil-img.jpg'
import './index.css'

import Banner from "../../components/Banner"
import Card from "../../components/Card"
// import { useEffect, useState} from 'react'

import data from '../../data/logements.json'

function Home(){
    
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     async function fetchData(){
    //         const response = await fetch('../../data/logements.json',
    //             {
    //                 headers:
    //                     { 'Content-Type': 'application/json', 'Accept': 'application/json' }
    //             });
    //         const data = await response.json()
    //         console.log(data)
    //         // setData(data)
    //     }
    //     fetchData()
    // }, [])




    
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