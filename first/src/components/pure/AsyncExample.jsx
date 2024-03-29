import React from 'react';

const AsyncExample = () => {

    async function generateNumber(){
        return 1;
    }

    async function generatePromiseNumber(){
        return Promise.resolve(2);
    }

    function obtainNumber(){
        generateNumber()
            .then((response) => alert(`Response: ${response}`))
            .catch((error) => alert(`Something went wrong ${error}`));
    }

    function obtainPromiseNumber(){
        generatePromiseNumber()
            .then((response) => alert(`Response: ${response}`))
            .catch((error) => alert(`Something went wrong ${error}`));
    }

    async function saveSessionStorage(key, value) {
        sessionStorage.setItem(key, value);
        return Promise.resolve(sessionStorage.getItem(key))
    }

    function showStorage(){
        saveSessionStorage('name', 'Gustavo')
            .then((response) => {  // returns value if fullfiled
                let value = response;
                alert(`Saved Name:  ${value}`)
            }).catch((error)=> { // catch will give us the reason of failure
                alert(`Something went wrong ${error}`)
            }).finally(() => { // finally will do something once we have the then response.
                alert('Name saved and retrieved successfully')
            })
    }

    async function obtainMessage(){

        let promise = new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve('Hello World')
            }, 2000); //this promise will be shown after 2 seconds
        });

        let message = await promise; //waits until the promise is resolved

        await alert(`Message received: ${message}`);

    }

    const returnError = async() =>{
        await Promise.reject(new Error('Ooooops!!!!'))
    }

    const consumeError = () => {
        returnError()
            .then((response) => alert(`Everything is ok: ${response}`))
            .catch((error) => alert(`Something went wrong: ${error}`))
            .finally(() => alert('Finally Executed'));

    }

    const urlNotFound = async()=>{
        
        try {

            let response = await fetch('https://invalidURL');
            alert(`Response ${JSON.stringify(response)}`)

        } catch (error) {

            alert(`Something went wrong with your URL: ${error} (check your consolse)`)
            
        }
    }

    const multiplePromises = async() => {
        let results = await Promise.all(
            [
                fetch('https://reqres.in/api/users'),
                fetch('https://reqres.in/api/users?page=2')
            ]
        ).catch((error) => alert(`Something went wrong with your URL: ${error} (check your consolse)`))
    }


    return (
        <div>
            <h1>Async Promise Examples</h1>
            <button onClick={obtainNumber}>Obtain Number</button>
            <button onClick={obtainPromiseNumber}>Obtain Promise Number</button> 
            <button onClick={showStorage}>Save Name and Show</button>
            <button onClick={obtainMessage}>Send Message after 2 seconds</button>
            <button onClick={consumeError}>Obtain Error</button>
            <button onClick={urlNotFound}>Request to Unknown URL</button>
            <button onClick={multiplePromises}> Multiple Promises </button>
        </div>
    );
}

export default AsyncExample;
