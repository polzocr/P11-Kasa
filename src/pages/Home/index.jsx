import imageAccueil from '../../assets/accueil/accueil-img.jpg'
import './index.css'

import Banner from "../../components/Banner"
import Card from "../../components/Card"
import { useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'

// import data from '../../data/logements.json'

function Home(){
    
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // const [loading, setLoading] = useState(false)

    // useEffect(() => {
    //     setLoading(true)
    //     async function fetchData(){
    //         const response = await fetch('http://localhost:4000/logements');
    //         const data = await response.json()
    //         setData(data)
    //         setTimeout(() => { setLoading(false) }, 1000)
            
    //     }
    //     fetchData()
        
    // }, [])
    return (
        <main>
            <Banner title="Chez vous, partout et ailleurs" imageAccueil={imageAccueil}/>
            {/* {loading ? (<section style={{minHeight:'700px'}}><div className="progress"></div></section>) : */}
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
             {/* } */}
            
        </main>
    )
}

export default Home

export async function LogementLoader(){
    const response = await fetch('http://localhost:4000/logements');
    return response.json()
}