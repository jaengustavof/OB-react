/**
 * Example props.children
 */

import React from 'react';

const Example4 = (props) => {
    return (
        <div>
            <h1>** Example props.children **</h1>
            <h2>
                Nombre:{props.name}
            </h2>
            {props.children}
        </div>
    );
}

export default Example4;
