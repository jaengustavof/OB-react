import React, { useState } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import Context from '../../context';
import TaskReactForm from '../pure/forms/taskReactForm';
import TaskTableContext from '../pure/taskTableContext';


const TaskListContext = () => {

    const defaultTask1 = new Task('Example1', 'Default Description1', true, LEVELS.NORMAL);
    const defaultTask3 = new Task('Example2', 'Default Description2', false, LEVELS.URGENT);
    const defaultTask2 = new Task('Example3', 'Default Description3', true, LEVELS.BLOCKING);

    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);

    
    return (
        <Context.Provider value={{tasks, setTasks}}>
            <div>
                <TaskTableContext></TaskTableContext>
                <TaskReactForm></TaskReactForm>
            </div>
        </Context.Provider>

    );
}

export default TaskListContext;
