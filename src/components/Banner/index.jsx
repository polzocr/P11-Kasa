import './index.css'

function Banner({title = '', imageAccueil}){
    return(
        <section id="banner">
            <div className='banner-img'>
                <img src={imageAccueil} alt="image"></img>
            </div>
            <h1 className="banner-title">{title}</h1>
        </section>
    )
}

export default Banner