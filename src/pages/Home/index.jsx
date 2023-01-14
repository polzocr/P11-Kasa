import Banner from "../../components/Banner"
import imageAccueil from '../../assets/accueil/accueil-img.jpg'

function Home(){
    return (
        <main>
            <Banner title="Chez vous, partout et ailleurs" imageAccueil={imageAccueil}/>
        </main>
    )
}

export default Home