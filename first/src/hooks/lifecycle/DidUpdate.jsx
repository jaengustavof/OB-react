/**
 * Component DidUpdate in class and Function
 */

import React, { Component, useEffect } from 'react'

export class DidUpdate extends Component {

    componentDidUpdate(){
        console.log('Component has received new props or has change');
    }

    render() {
        return (
        <div>
            <h1>Did Update</h1>
        </div>
        )
    }
}

export const DidUpdateHook = () => {

    useEffect(() => {
        console.log('Component has received new props or has change')
    });
    
    return (
        <div>
            <h1>Did Update</h1>
        </div>
    )
}
