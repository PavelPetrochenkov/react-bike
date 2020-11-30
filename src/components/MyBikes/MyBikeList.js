import React, {useContext} from 'react'
import Context from '../../context'
import MyBikeItem from './MyBikeItem'

function MyBikeList({myBikeList,bikeList}){
    let bikeListT = ( myBikeList.map(bike=>{
        return {
            bike:(bikeList.filter(item=> item._id==bike.idBike))[0],
            startTimeOfUse:bike.startTimeOfUse
        }
    }))

    let i= bikeListT.reduce((sum,item)=>{
        let time = Math.ceil((new Date() - new Date(item.startTimeOfUse))/1000/60/60);
        console.log(time,item.bike.price)
       return sum+=(item.bike)?((time>=10)?time/2:time)*item.bike.price:0
    },0)

    return<div>
            <h1>Your rent(${i})</h1>
            { 
            (bikeListT.map((bike,index) =>{
               return <MyBikeItem bike={bike.bike} time={Math.ceil((new Date() - new Date(bike.startTimeOfUse))/1000/60/60)} key={index} />
            }))}
        </div>
    
}

export default MyBikeList