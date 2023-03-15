import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = (message) => {

    console.log(message)
    const navigate = useNavigate();

    
    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={() => navigate('/online-state', {pathname:'/online-state' ,search: '?online=true', state: { online: 'false'}})}>
                    Page Sate / query params
            </button>
            <button onClick={() => navigate('/profile')}>
                    Your Profile
            </button>
            <p style={{color: 'red', marginTop: '20px'}}>{message.message === false ? '' : 'You must be logged in' }</p>
        </div>
    );
}

export default HomePage;
