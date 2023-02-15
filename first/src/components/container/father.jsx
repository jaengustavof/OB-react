import React, { useState } from 'react';
import Child from '../pure/child';

const Father = () => {

    const [name, setName] = useState('Gustavo')

    function showMessage (text) {
        alert(`Message received: ${text}`)
    }

    function updateName (newName){
        setName(newName)
    }

    return (
        <div style={{backgroundColor: 'tomato', padding: '20px'}}>
            <Child name={name} send={showMessage} update={updateName}></Child>
        </div>
    );
}

export default Father;
