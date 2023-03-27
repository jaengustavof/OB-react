import React, {useEffect, useState, useContext} from 'react';

import Context from '../../context';
import { LEVELS } from '../../models/levels.enum';

const TaskTableContext = () => {

    let {tasks, setTasks} = useContext(Context); 
    const [loading, setLoading] = useState(true);

        // Lifecycle control
        useEffect(() => {
            console.log('Task state has been modified');
            setTimeout(() => {
              setLoading(false);
            }, 2000);
              
      
        }, [tasks]);
          
        const complete = (task) => {
            const index = tasks.indexOf(task);
            const tempTask = [...tasks];
            tempTask[index].completed = !tempTask[index].completed;
            setTasks(tempTask);
            
        }     
        
        const remove = (task) => {
            const index = tasks.indexOf(task);
            const tempTask = [...tasks];
            tempTask.splice(index,1);
            setTasks(tempTask);
        }
        
      
          
        const TaskCompletedIcon = (task) =>{
            return task.completed ? 
            <i onClick={() => complete(task)} className='bi-toggle-on task-action' style={{color:'green'}}></i> : 
            <i onClick={() => complete(task)} className='bi-toggle-off task-action' style={{color:'grey'}}></i>
        }

        const taskLevelBadge = (task) =>{
            switch (task.level) {
                case LEVELS.NORMAL:
                    return(<h6 className='mb-0'><span className='badge bg-primary'>{task.level}</span></h6>);
                
                case LEVELS.URGENT:
                    return(<h6 className='mb-0'><span className='badge bg-warning'>{task.level}</span></h6>);
    
                case LEVELS.BLOCKING:
                    return(<h6 className='mb-0'><span className='badge bg-danger'>{task.level}</span></h6>);
    
                default:
                    break;
            }
        }
      
          const Table = () =>{
            return (
              <table>
                <thead>
                  <tr>
                    <th scope='col'>Title</th>
                    <th>Description</th>
                    <th>Priority</th>
                    <th>Actions</th>
                  </tr>
                </thead> 
      
                <tbody>
                  {tasks.map((task, index)=> {
                      return (<tr className='fw-normal' >
                  <th>
                      <span className='ms-2'>{task.name}</span>
                  </th>
                  <td className='align-middle'>
                      <span>{task.description}</span>
                  </td>
                    
                  <td className='align-middle' >
                  {/*Executes function to return badge*/}
                    {taskLevelBadge(task)}
                  </td>
                  
                  <td className='align-middle'>
                    <span>{TaskCompletedIcon(task)}</span>
                      <i onClick={()=> remove(task)}  className='bi-trash task-action' style={{color:'tomato'}}></i>
                          
                  </td>
              </tr>)
                    })}
                </tbody>
              </table>
            )
          }
      
          let tasksTable;
      
          if(tasks.length > 0){
            tasksTable = <Table></Table>
          }else {
            tasksTable = (
            <div>
              <h3>There are no tasks to show</h3>
              <h4>Please, create a new one.</h4>
            </div>
            )
          }
      
          const loadingStyle = {
            color: 'grey',
            fontSize: '30px',
            fontWeight: 'bold'
          }

    return (
        <div>
            <div className='col-12'>
              <div className='card'>

                <div className='card-header p-3'>
                  <h5>Your Tasks</h5>
                </div>

                <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height:'400px'} }>
                {/*//TODO: add loading spinner*/}
                  {loading? (<p style={loadingStyle}>Loading...</p>) :tasksTable}
                </div>
                
              </div>
            </div>
        </div>
    );
}

export default TaskTableContext;
