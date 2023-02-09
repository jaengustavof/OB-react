/**
 * useState Hook
 * 
 * Create a function component and access to the private state through a Hook.
 *
 */

import React, { useState } from 'react';

const Example1 = () => {

    //initial value for counter
    const initialValue = 0;

    //initial value for person
    const initialPerson = {
        name: 'Peter',
        email: 'peter@test.com'
    }

    /**
     * Initial Value and Initial Person are part of the component so we can modify the value and the changes
     * can be observed in the HTML.
     * 
     * const [variableName, functionToChange] = useState[value]
     */

    const [counter, setCounter] = useState(initialValue);
    const [person, setPerson] = useState(initialPerson);
    
    /**
     * Function to update counter state
     */
    function incrementCounter (){
        setCounter(counter +1)
    }


    /**
     * function to update Person
     */
    function updatePerson(){
        setPerson(
            {
                name: 'Marius',
                email: 'marcius@test.com'
            }
        )
    }

    return (
        <div>
            <h1>*** useState ***</h1>
            <h2>Counter {counter}</h2>
            <h2>Info: </h2>
            <h3>Name: {person.name}</h3>
            <h3>Email: {person.email}</h3>
            <div>
                <button onClick={incrementCounter}>Counter +1</button>
                <button onClick={updatePerson}>Update Person</button>
            </div>
        </div>
    );
}

export default Example1;


