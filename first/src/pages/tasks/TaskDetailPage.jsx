import React from 'react';
import { useParams } from 'react-router-dom';

const TaskDetailPage = ({task}) => {

    const {id} = useParams();

    return (
        <div>
            <h1>Task Detail - {id}</h1>
            <h2>{task[id-1].name}</h2>
            <h3>{task[id-1].description}</h3>
        </div>
    );
}

export default TaskDetailPage;
