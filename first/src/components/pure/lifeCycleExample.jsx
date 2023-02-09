/**
 * Class Component - Life Cycle Example
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class LifeCycleExample extends Component {
    
    constructor(props) {
        super(props)
       console.log('CONSTRUCTOR - When the component is iniciated');
    }

    componentWillMount() {
        console.log('Willmount - Before mounting the component')
    }

    componentDidMount() {
        console.log('Did Mount - When the component is mounted, before printing the component')
    }

    componentWillReceiveProps(nextProps) {
        console.log('WillReceiveProps - If the component receives Props')
    }

    shouldComponentUpdate(nextProps, nextState) {
     
        /**
         * Controls if the components must update or not
         * Must return true or false
         */
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WillUpdate - Before updating')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('DidUpdate - After updating')
    }

    componentWillUnmount() {
        console.log('WillUnmount - Just before unmounting')
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

LifeCycleExample.propTypes = {

}

export default LifeCycleExample
