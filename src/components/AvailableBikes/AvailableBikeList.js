import React from 'react'
import AvailableBikeItem from './AvailableBikeItem'

function AvailableBikeList({bikeList}){
    return(
        <div>
            <h3><span>&#128690;</span> Available bicycles ({bikeList.filter((item)=>!item.isRent).length})</h3>
          { bikeList.map((bike,index) =>{
               return (!bike.isRent)?<AvailableBikeItem bike={bike} key={bikeList._id} />:<div/>
           })}
        </div>
    )
}



export default AvailableBikeList