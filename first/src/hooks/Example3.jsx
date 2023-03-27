/**
 * useState()
 * useContext()
 */

import React, { useState, useContext } from 'react';

const myContext = React.createContext(null);

/**
 * @returns componentOne has a value that receives from the parent
 */
const ComponentOne = () => {

    const state = useContext(myContext);

    return (
        <div>
            <h1>
                The token is: {state.token}
            </h1>
            <ComponentTwo></ComponentTwo>
        </div>
    );
}


const ComponentTwo = () => {

    const state = useContext(myContext);

    return (
        <div>
            <h2>
                The Session is: {state.session}
            </h2>
        </div>
    );
}


const Example3 = () => {

    const initialState ={
        token: '123459',
        session: 1
    }

    //create state of this component
    const [sessionData, setSessionData] = useState(initialState);

    function updateSession() {
        setSessionData(
            {
                token: 'JWT123458996',
                session: sessionData.session + 1
            }
        )
    };

    return (
        <myContext.Provider value={sessionData}>
            <h1>*** useState & useContext ***</h1>
            <ComponentOne></ComponentOne>
            <button onClick={updateSession}>Update Session</button>
        </myContext.Provider>

    );
}

export default Example3;

