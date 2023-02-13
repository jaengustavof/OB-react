import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

//styles
import '../../styles/task.scss'


const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default Description', false, LEVELS.NORMAL);

    const [tasks, setTasks] = useState([defaultTask]);
    const [loading, setLoading] = useState(true);

    // Lifecycle control
    useEffect(() => {
      console.log('Task state has been modified');
        setLoading(false);
      return () => {
        console.log('Task List component will Unmount');
      }

    }, [tasks])
    

    const changeCompleted = (id) =>{
        console.log('TODO: change task status')
    }

    return (
        <div>
            <h1>
                Your Tasks:
            </h1>
            {/*TODO: for or map for all the tasks */}
            <TaskComponent task={defaultTask}></TaskComponent> {/*defaultTask line 10 */}
        </div>
    );
};


export default TaskListComponent;
