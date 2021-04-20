import React from 'react';

const Task = (props) => {

    const style = {
        color:'red'
    }

    const {text, date , id, active, important, finishDate} = props.task

    if(active){
    return ( 
       <div>
           <p>
                <strong style={important ? style : null}>{text}</strong> - do <span>{date} </span>
                <button type="button" class="btn btn-warning" onClick={() => props.change(id)}>zostało zrobione</button>
                <button type="button" class="btn-close" aria-label="Close" onClick={() => props.delete(id)}>x</button>
           </p>
       </div>
     );} else {

        const finish = new Date(finishDate).toLocaleString()
        console.log(finishDate)
        console.log(finish)
         return (
         <div>
             <p>
                <strong>{text}</strong><em> (zrobić do {date}) </em><br/>
                - potwierdzenie wykonania <span> {finish}</span>
                <button onClick={() => props.delete(id)}>x</button>
           </p>
         </div>
        )}
}
 
export default Task;