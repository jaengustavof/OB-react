import React, { useContext, useRef } from 'react';
import { useForm } from "react-hook-form";
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';
import Context from '../../../context';


const TaskReactForm = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    let {tasks, setTasks} = useContext(Context); 

    
    
    const onSubmit = data =>{
        const newTask = new Task(data.taskname, data.taskdescription, false, data.priority);
        setTasks([...tasks, newTask]);
        reset();
    } 

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input {...register("taskname", { required: true })}/>
                {errors.taskname && <span>This field is required</span>}
                
                {/* include validation with required or other standard HTML validation rules */}
                <input {...register("taskdescription", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.taskdescription && <span>This field is required</span>}

                <select {...register('priority', {required: true, minLength: 3})}>
                    <option value="">Select a Level</option>
                    <option value={LEVELS.NORMAL}>Normal</option>
                    <option value={LEVELS.URGENT}>Urgent</option>
                    <option value={LEVELS.BLOCKING}>Blocking</option>            
                </select>
                {errors.priority && <span>This field is required</span>}
                                
                <button type="submit"  className='btn btn-primary btn-lg ms-2'>Add</button>
            </form>
        </div>
    );
}

export default TaskReactForm;
