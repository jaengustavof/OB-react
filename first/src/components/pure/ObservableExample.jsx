import React, { useState } from 'react';
import { getNumbers } from '../../services/observableServices';

const ObservableExample = () => {


    const [number, setNumber] = useState(0);

    const obtainNewNumbers = () => {

        console.log('Subscription to Obeservable');


        getNumbers.subscribe(
            {
                next(newNumber){
                    console.log('New Number: ', newNumber);
                    setNumber(newNumber);
                },
                error(error){
                    alert(`Something went wrong: ${error}`)
                    console.log('Error in Observable')
                },
                complete(){
                    alert(`Finished with: ${number}`)
                    console.log('Done with Observable.')
                }
            }
        );

    }

    return (
        <div>
            <h2>Number: {number}</h2>
            <button onClick={obtainNewNumbers}>Obtain New Numbers</button>
        </div>
    );
}

export default ObservableExample;
