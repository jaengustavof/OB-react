import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

//styles
import '../../styles/task.scss'
import TaskForm from '../pure/forms/taskForm';


const TaskListComponent = () => {

    const defaultTask1 = new Task('Example1', 'Default Description1', true, LEVELS.NORMAL);
    const defaultTask3 = new Task('Example2', 'Default Description2', false, LEVELS.URGENT);
    const defaultTask2 = new Task('Example3', 'Default Description3', true, LEVELS.BLOCKING);

    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    // Lifecycle control
    useEffect(() => {
      console.log('Task state has been modified');
        setLoading(false);
      return () => {
        console.log('Task List component will Unmount');
      }

    }, [tasks]);

    const completeTask = (task) => {
      const index = tasks.indexOf(task);
      const tempTask = [...tasks];
      tempTask[index].completed = !tempTask[index].completed;
      setTasks(tempTask);
    }
    

    const deleteTask = (task) =>{
      const index = tasks.indexOf(task);
      const tempTask = [...tasks];
      tempTask.splice(index,1);
      setTasks(tempTask);
    }

    const addTask = (task) =>{
      const tempTask = [...tasks];
      tempTask.push(task);
      setTasks(tempTask);
    }

    return (
        <div>
            <div className='col-12'>
              <div className='card'>

                <div className='card-header p-3'>
                  <h5>Your Tasks</h5>
                </div>

                <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height:'400px'} }>
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
                          return (<TaskComponent 
                          key={index} 
                          task={task} 
                          complete={completeTask}
                          remove={deleteTask}
                          ></TaskComponent> )
                        })}
                    </tbody>
                  </table>
                </div>
                
              </div>
            </div>
            <TaskForm add={ addTask } ></TaskForm>
        </div>
    );
};


export default TaskListComponent;
