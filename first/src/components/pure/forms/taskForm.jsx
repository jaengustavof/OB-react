import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({ add, length }) => {

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

    const normalStyle = {
        color: 'blue',
        backgroundColor: 'lightgray',
        fontWeight: 'bold'
    }

    const urgentStyel = {
        color: 'yellow',
        backgroundColor: 'lightgray',
        fontWeight: 'bold'
    }

    const blockingStyle = {
        color: 'tomato',
        backgroundColor: 'lightgray',
        fontWeight: 'bold'
    }

    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center'>
            <div className='form-container form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Enter task name'/>

                <input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-control-lg' required placeholder='Task description'/>
                
                <select ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel' className='form-control form-control-lg'>
                <option value="">Select a Level</option>
                    <option style={normalStyle} value={LEVELS.NORMAL}>Normal</option>
                    <option style={urgentStyel} value={LEVELS.URGENT}>Urgent</option>
                    <option style={blockingStyle} value={LEVELS.BLOCKING}>Blocking</option>
                </select>
            </div>
            <button type='submit' className='btn btn-success btn-lg ms-2'>{length > 0? 'Add task': 'Create your first task'}</button>
        </form>
    );
}

TaskForm.propTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default TaskForm;
