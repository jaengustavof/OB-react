/**
 * Life Cycle - DidMount in class and function component
 */

import React, { Component, useEffect } from 'react'

export class DidMount extends Component {

  componentDidMount(){
    console.log('Before component is render in DOM')
  }
  render() {
    return (
      <div>
        <h1>Did Mount</h1>
      </div>
    )
  }
}

export const DidmountHook  = () => {

  useEffect(() => {
    console.log('Before component is render in DOM')

  }, []);

  return (
    <div>
      <h1>Did Mount</h1>
    </div>
  );
}


