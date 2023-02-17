import React, { useState } from 'react';


// Styles

let red = 0;
let green = 200;
let blue = 150;

const loggedStyle = {
    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
    fonrWeight: 'bold',
    color: 'white'
}

const unloggedStyle = {
    backgroundColor: 'tomato',
    fonrWeight: 'bold',
    color: 'white'
}

// LogIn & LogOut Buttons

const LogInButton = ({logInAction, propStyle}) =>{
    return (<button style={propStyle} onClick={logInAction}>Log In</button>)
}

const LogOutButton = ({logOutAction, propStyle}) =>{
    return (<button style={propStyle} onClick={logOutAction}>Log Out</button>)
}


const OptionalRender = () => {

    const [access, setAccess] = useState(false);
    const [nMessages, setNMessages] = useState(0);

    const logInAction = () => {
        setAccess(true)
    }

    const logOutAction = () => {
        setAccess(false)
    }

    let optionalButton;

    if(access){
        optionalButton = <LogOutButton propStyle={unloggedStyle} logOutAction={logOutAction}></LogOutButton>
    }else {
        optionalButton = <LogInButton propStyle={loggedStyle} logInAction={logInAction}></LogInButton>
    }


    //unread messages

    let addMessages = () => {
        setNMessages(nMessages+1);
    }
    
    return (
        <div>
            {/*Optional button */}
            { optionalButton }
            <br></br>

            {/*N messaes unread */}
            {/*
                { nMessages > 0 && nMessages === 1 && <p>You have {nMessages} new message</p>}
                { nMessages > 1 && <p>You have {nMessages} new messages</p>}
                { nMessages === 0 && <p>You have no new messages</p>}
            */}

            {/* Ternary operator */}
            {access? (
                <div>
                    {nMessages > 0  ? <p>You have {nMessages} new message{nMessages >1 ? 's': null}</p>: <p>You have no new messages</p>}

                    <button onClick={addMessages}>{nMessages === 0? 'Add first Message' : 'Add new Message'}</button>
                </div>): 
            null}
        </div>
    );
}

export default OptionalRender;
