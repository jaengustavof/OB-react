import React from 'react';

// Material ui components
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';


const CopyRight = () => {
    return (
        <Typography variant='body2' color="GrayText" align='center'>
            { 'Copyright © ' }
            <Link color="inherit" href='https://imaginaformacion.com'>
                Gustavo Jaen 
            </Link>
            { ' ' }
            { new Date().getFullYear() }
        </Typography>
    );
}

export default CopyRight;
