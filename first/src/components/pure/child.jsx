import React, { useRef } from 'react';

const Child = ({ name, send, update }) => {

    const messageRef = useRef('')
    const nameRef = useRef('')

    function pressButton (){
        const text = messageRef.current.value;
        alert(`Text in input: ${text}`)
    }

    function pressButtonParams(text){
        alert(`Text: ${text}`)
    }

    function submitName(e){
        e.preventDefault(); //prevents page from reloading
        update(nameRef.current.value);
    }

    return (
        <div style={{backgroundColor: 'teal', padding: '10px'}}>
            <p onMouseOver={()=> console.log('On Mouse Over')}>Hello, {name}</p>

            <button onClick={() => console.log('Button 1 pressed')}>
                Button 1
            </button>

            <button onClick={pressButton}>
                Button 2
            </button>

            <button onClick={() => pressButtonParams('Test text')}>
                Button 3
            </button>
            <input 
                    placeholder='Insert a text' 
                    onFocus={() => console.log('Input focus')}
                    onChange={(e) => console.log('Input Change ', e.target.value)}
                    onCopy={()=> console.log('Copied text from input')}
                    ref = {messageRef}
                />
            <button onClick={() => send(messageRef.current.value)}>
                Send Message
            </button>

            <div style={{marginTop: '40px'}}>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder='New Name'/>
                    <button type='submit'>Update Name</button>
                </form>
            </div>
        </div>
    );
}

export default Child;
