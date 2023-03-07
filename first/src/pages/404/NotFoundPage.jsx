import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NotFoundPage = () => {

    const history = useNavigate();

    const navigate = (path) => {
        history(path)
    }

    return (
        <div>
            <h1>404 Page not found</h1>
            <button onClick={() => navigate('/')}>Go Back to Home</button>
        </div>
    );
}

export default NotFoundPage;
