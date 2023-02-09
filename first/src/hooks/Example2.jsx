/**
 * useState()
 * useRef() - Identify elements inside the view
 * useEffect()
 */

import React, { useState, useRef, useEffect } from 'react';

const Example2 = () => {


    // Create 2 different counters
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    // Create a reference with useRef() to asociate a variable with a DOM element.
    const myRef = useRef();

    function addCounterOne () {
        setCounterOne(counterOne + 1);
    }

    function addCounterTwo () {
        setCounterTwo(counterTwo + 1);
    }

    /**
     * useEffect
     */

    /**
     * case 1 - always execute the code
     * When the state changes, the useEffect will be executed

    useEffect(() => {
        console.log('Component Change');
        console.log('Showin reference to DOM: ');
        console.log(myRef)
        
    });
     */
    

     /**
     * case 2 - useEffect will be executed when counter 1 changes
     * 
     useEffect(() => {
        console.log('Counter Once Changes');
        console.log('Showin reference to DOM: ');
        console.log(myRef)
        
    },[counterOne]);
    */

     /**
     * case 2 - useEffect will be executed when counter 1 or counter 2changes
     */
     useEffect(() => {
        console.log('Counter Once or Two Changes');
        console.log('Showin reference to DOM: ');
        console.log(myRef)
        
    },[counterOne, counterTwo]);
    
    
    return (
        <div>
            <h1>*** useState - useRef - useEffect ***</h1>
            <h2>Counter 1 {counterOne}</h2>
            <h2>Counter 2 {counterTwo}</h2>
            {/* referenced element */}
            <h4 ref={myRef}>
                My Ref element
            </h4>
            <div>
                <button onClick={addCounterOne}>Counter One +1</button>
                <button onClick={addCounterTwo}>Counter Two +1</button>
            </div>
        </div>
    );
}

export default Example2;
