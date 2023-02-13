import React, { useState } from 'react';

//styles in const
//Logged User

const loggedStyle = {
    color: 'dodgerblue'
}

//Unlogged User
const unLogged = {
    color: 'tomato',
    fontWeight: 'bold'
}


const GreetingStyled = (props) => {

    const [logged, setLogged] = useState(false);

    return (
        <div style={ logged ? loggedStyle: unLogged }>
            {logged ? (<p>Hello, {props.name}!</p>) : (<p>Please, log in.</p>)}
            
            <button onClick={()=>{
                console.log('Button Clicked');
                setLogged(!logged);
            }}>
                {logged ? 'LogOut': 'LogIn'}
            </button>
        </div>
    );
}

export default GreetingStyled;
