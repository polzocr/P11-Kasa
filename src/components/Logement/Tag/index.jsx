import './index.css'

function Tag({name}){
    return (
        <button type='button' className='button-tag'>
            {name}
        </button>
    )
}

export default Tag