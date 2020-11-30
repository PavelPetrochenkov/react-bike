import React from 'react'
import AvailableBikeItem from './AvailableBikeItem'

function AvailableBikeList({bikeList}){
    return(
        <div>
            <h1>Available bicycles ({bikeList.filter((item)=>!item.isRent).length})</h1>
          { bikeList.map((bike,index) =>{
               return (!bike.isRent)?<AvailableBikeItem bike={bike} key={bike._id.toString()} />:<div/>
           })}
        </div>
    )
}



export default AvailableBikeList