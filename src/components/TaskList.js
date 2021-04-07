import React from 'react';
import Task from './Task'

const TaskList = (props) => {

    const active = props.tasks.filter(task => task.active === true)
    const done = props.tasks.filter(task => !task.active === true)

    if(done.length >=2) {
        done.sort((a,b) => b.finishDate - a.finishDate)
    }

    if(active.length>=2){
        active.sort((a,b) => {
        return new Date(a.date) - new Date(b.date)
    })
    }

    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>)
    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>)
    return ( 
        <>
    <div className='active'> 
        <h1>zadania do zrobienia</h1>
        {activeTasks.length > 0 ? activeTasks : <p>brak zadań do zrobienia, korzystaj z wolnego !</p> }
    </div>

    <hr/>

    <div className='done'> 
        <h3>zadania zrobione w sumie ({done.length})</h3>
        {done.length >5 && <p style ={{fontSize: 10}}> wyświetlane jest tylko 5 ostatnio wykonanych zadań</p>}
        {doneTasks.slice(0,5)}
    </div>
    </>
     );
}
 
export default TaskList;