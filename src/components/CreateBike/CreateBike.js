import React, {useState}  from 'react'
import './CreateBike.css';

function useInputValueName(defaultValue){
    const [value, setValueName]=useState(defaultValue)
    return {
        bind:{
            value,
        onChange:event=>setValueName(event.target.value)
        },
        clear: () => setValueName(''),
        value: ()=> value
    }
}

function useInputValueType(defaultValue){
    const [value, setValueType]=useState(defaultValue)
    return {
        bind:{
        value,
        onChange:event=>setValueType(event.target.value)
        },
        clear: () => setValueType('Custom'),
        value: ()=> value
    }
}

function useInputValuePrice(defaultValue){
    const [value, setValuePrice]=useState(defaultValue)
    return {
        bind:{
            value,
        onChange:event=>setValuePrice(event.target.value)
        },
        clear: () => setValuePrice(''),
        value: ()=> value
    }
}

function CreateBike({onCreate}){

    const inputName = useInputValueName('')
    const inputType = useInputValueType('Custom')
    const inputPrice = useInputValuePrice('')

    function submitHandler(event){
        event.preventDefault()

        if(inputName.value().trim() && inputType.value().trim() && inputPrice.value().trim()){
            onCreate(inputName.value().trim(), inputType.value().trim(), inputPrice.value().trim())
            inputName.clear()
            inputType.clear()
            inputPrice.clear()
        }

    }

    return(
    <div>
        <h1>Create new rent</h1>
    <form onSubmit={submitHandler}>
        <div className='block-create'>
        <div className="block"><div><span className="text-create">Bike name</span></div><input {...inputName.bind} className="input-create" type='text'/></div>

        <div className="block"><div><span className="text-create">Bike type</span></div>
        <select  {...inputType.bind} className="input-create select-css">
        <option value="Custom" autoFocus={true} >Custom</option> 
        <option value="Road">Road</option>
        <option value="Mountain">Mountain</option>
        </select>
       </div>

        <div className="block"><div><span className="text-create">Rent Price</span></div><input {...inputPrice.bind} className="input-create" type='number'/></div>
        <div className="block button-block"><button className="button-create">Submit rent</button></div>
        </div>
    </form>
    </div>
    )
}


export default  CreateBike