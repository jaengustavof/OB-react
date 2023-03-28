import React, {useContext, useReducer} from 'react';
import Context from '../context';

const TasksFilters = () => {

    const {filter, setFilter} = useContext(Context); 

    const filterReducer = (filter) => {
        setFilter(filter)
    }

    return (
        <div className="d-flex justify-content-around p-2">
            <button 
                className="btn btn-outline-secondary" 
                onClick={()=>filterReducer('all')}>All</button>
            <button 
                className="btn btn-outline-primary"
                onClick={()=>filterReducer('normal')}>Normal</button>
            <button 
                className="btn btn-outline-danger" 
                onClick={()=>filterReducer('blocking')}>Blocking</button>
            <button 
                className="btn btn-outline-warning" 
                onClick={()=>filterReducer('urgent')}>Urgent</button>
        </div>
    );
}

export default TasksFilters;
