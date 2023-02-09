/**
 * WillUnmount Component Class and Hook Function
 */

import React, { Component, useEffect } from 'react'

export class WillUnmount extends Component {

    componentWillUnmount() {
        console.log('Before component desapears')
    }
    render() {
        return (
        <div>
            <h1>Will Unmount</h1>
        </div>
        )
    }
}


export const WillUnmountHook = () => {

    useEffect(() => { 
        //Nothing here. 
      return () => {
        console.log('Before component desapears')
      }
    }, [])
    

    return (
        <div>
            <h1>Will Unmount</h1>
        </div>
    );
}


