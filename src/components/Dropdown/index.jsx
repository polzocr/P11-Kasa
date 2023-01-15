import './index.css'
import arrow from '../../assets/dropdown/arrow.svg'

function Dropdown({title, description }){
    return (
        <div className="dropdown">
            <button className='dropdown-title'>
                <h2>{title}</h2>
                <img src={arrow} alt="arrow dropdown"></img>
            </button>
            <div className="dropdown-content">
                {typeof (description) == 'object' ? (
                    description.map((element) => {
                        return <p>{element}</p>
                    })
                ) : (
                    <p>{description}</p>
                )}
            </div>
            
        </div>
    )
}

export default Dropdown