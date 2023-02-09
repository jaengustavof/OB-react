import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    // useState
    /**
     * const [variable, method to update] = useState(initial Value)
     */
    const [age, setAge] = useState(29);

    const birthday = () =>{
        setAge(age+1);
    }

    return (
        <div>
            <h1>
                HELLOO {props.name} From Functional Component
            </h1>
            <h2>
                You are {age} years old.
            </h2>
            <div>
                <button onClick={birthday}>
                    Happy BirthDay!
                </button>
            </div>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string,
};


export default GreetingF;
