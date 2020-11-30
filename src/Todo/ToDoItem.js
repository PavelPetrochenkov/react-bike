import React, {useContext} from 'react'
import Context from '../context'

const styles = {
    li:{
        display:'flex',
        justifyContent:'space-between',
        alignItem:'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input:{
        marginRight:'.1rem'
    }
}

function ToDoItem({todo, index, onChange}){

    const {removeTodo} = useContext(Context);
    const classes= [];

    if(todo.completed){
        classes.push('done')
    }

    return(
    <li style={styles.li}>
        <span className={classes.join(' ')}>
            <input type="checkbox" checked={todo.completed} style={styles.input} onChange={()=> onChange(todo.id)}/>
            <strong> {index+1}</strong>
            &nbsp;
       {todo.title}
        </span>
       <button className="rm" onClick={()=>removeTodo(todo.id)}>&times;</button>
    </li>
    )
}


export default  ToDoItem