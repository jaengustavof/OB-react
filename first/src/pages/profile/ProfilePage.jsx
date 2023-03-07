import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ProfilePage = ({user}) => {

    const history = useNavigate();

    const navigate = (path) => {
        history(path)
    }

    const goBack = () => {
        history(-1);
    }

    return (
        <div>
            <h1>Your Profile</h1>
            <button onClick={() => navigate('/tasks')}>Tasks</button>
            <button onClick={ goBack }>Go Back</button>
            
        </div>
    );
}

export default ProfilePage;
