import React, {useContext} from 'react'
import Context from '../../context'

function MyBikeItem({bike,time}){
    const {cancelBike} = useContext(Context)
    return(bike)?
        <div className='block-bike'>
        <div><span className="block-text">{bike.name} / {bike.type} / ${bike.price} / Rented time: {time} h / To pay: ${((time>=20)?(time/2*bike.price):(time*bike.price)).toFixed(2)} </span></div>
        <div  className='block-buttons'>
        <div className="block button-block"><button className="button-delete" onClick={()=>cancelBike(bike._id)}>Cancel</button></div>
        </div>
        </div>
    :<div/>
}

export default MyBikeItem