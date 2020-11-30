import React from 'react'
import PropTypes from 'prop-types'
import ToDoItem from './ToDoItem'


const styles = {
    ul:{
        listStyle: 'none'
    }
}

function ToDoList(props){
    return(
        <ul style={styles.ul}>
          { props.todos.map((item,index) =>{
               return <ToDoItem todo={item} key={item.id} index={index} onChange={props.onToggle}/>
           })}
        </ul>
    )
}



export default ToDoList