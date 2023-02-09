import React, { useEffect } from 'react';

const AllCycles = () => {
    
    useEffect(() => {
      console.log('Component created or updated');

      const intervalID = setInterval(() => {
        document.title = `${new Date()}`
        console.log('Component is updating')
      }, 1000);
    
      return () => {
        console.log('Component will desapear');
        document.title = 'Time Stopped'
        clearInterval(intervalID);
      }
    }, [])
    
    return (
        <div>
            
        </div>
    );
}

export default AllCycles;
