import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CopyRight from '../../components/pure/CopyRight';

const DashBoard = () => {

    const history = useNavigate();

    const logOut = () => {
        history('/login');
    }

    return (
        <div>
            <Button variant="contained" onClick={logOut}>Log Out</Button>

            <CopyRight></CopyRight>
        </div>
    );
}

export default DashBoard;
