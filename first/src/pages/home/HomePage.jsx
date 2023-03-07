import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const HomePage = () => {

    const location = useLocation();
    const history = useNavigate();


    const navigate = (path) => {
        history(path)
    }

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={() => navigate('/profile')}>
                Go to Profile
            </button>

        </div>
    );
}

export default HomePage;
