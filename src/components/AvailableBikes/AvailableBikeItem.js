import React, {useContext} from 'react'
import './AvailableBike.css'
import Context from '../../context'

function AvailableBikeItem({bike}){
    const {deleteBike} = useContext(Context)
    const {rentBike} = useContext(Context)
    return(
        <div className='block-bike'>
        <div><span className="block-text">{bike.name} / {bike.type} / ${bike.price}</span></div>
        <div  className='block-buttons'>
        <div className="block button-block"><button className="button-rent" onClick={()=>rentBike(bike._id)}>Rent</button></div>
        <div className="block button-block"><button className="button-delete" onClick={()=>deleteBike(bike._id)}>Delete</button></div>
        </div>
        </div>
    )
}


export default  AvailableBikeItem