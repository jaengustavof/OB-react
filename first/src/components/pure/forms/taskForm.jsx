import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({ add }) => {

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);

    const addTask = (e) => {
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        )  
        add(newTask);
    }

    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center'>
            <div className='form-container form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Enter task name'/>

                <input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-control-lg' required placeholder='Task description'/>

                <label htmlFor='selectLevel' className='sr-only'>Priority</label>
                <select ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
                    <option value={LEVELS.NORMAL}>Normal</option>
                    <option value={LEVELS.URGENT}>Urgent</option>
                    <option value={LEVELS.BLOCKING}>Blocking</option>
                </select>
            </div>
            <button type='submit' className='btn btn-success btn-lg ms-2'>Add</button>
        </form>
    );
}

TaskForm.propTypes = {
    add: PropTypes.func.isRequired
}

export default TaskForm;
