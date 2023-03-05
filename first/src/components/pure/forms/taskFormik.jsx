import React, {useRef} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Task } from '../../../models/task.class';
import { LEVELS } from '../../../models/levels.enum';
import PropTypes from 'prop-types';

const TaskFormik = ({add, length}) => {

    
    const initialValues = {
        taskname: '',
        description: '',
        completed: false,
        level: LEVELS.NORMAL
    }

    const levelRef = useRef(LEVELS.NORMAL);

    const taskSchema = Yup.object().shape(
        {
            taskname: Yup.string().min(3, 'Task name too short').max('30', 'Task name too long').required('Task name is required'),
            description: Yup.string().max(150, 'Description too long').required('Description ir required'),
            level: Yup.string().required('Please select a level')
        }
    )

    return (
        <div>

            <Formik
                initialValues={initialValues}
                validationSchema={taskSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    const { taskname, description, completed} = values;
                    const level = levelRef.current.value;
                    let newTask = new Task(taskname, description, completed, level);
                    add(newTask);
                }}
            >

                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                        <Form>
                            <Field id="taskname" type="text" name="taskname" placeholder="Your taskname" className='form-control form-control-lg' />
                            {/* taskname Errors */}
                            {
                                errors.taskname && touched.taskname && 
                                (
                                    <ErrorMessage name="taskname" component='div'></ErrorMessage>
                                )
                            }

                            <Field id="description" type="text" name="description" placeholder="Your description" className='form-control form-control-lg' />
                            {/* description Errors */}
                            {
                                errors.description && touched.description && 
                                (
                                    <ErrorMessage name="description" component='div'></ErrorMessage>
                                )
                            }

                            <select ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel' className='form-control form-control-lg'>
                            <option value="">Select a Level</option>
                                <option value={LEVELS.NORMAL}>Normal</option>
                                <option value={LEVELS.URGENT}>Urgent</option>
                                <option value={LEVELS.BLOCKING}>Blocking</option>
                            </select>


                            <button type="submit"  className='btn btn-success btn-lg ms-2'>{length > 0? 'Add task': 'Create your first task'}</button>
                            {isSubmitting ? (<p>Creating your task...</p>): null}

                        </Form>
                    )
                }


            </Formik>
        </div>
    );
}

TaskFormik.propTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}


export default TaskFormik;
