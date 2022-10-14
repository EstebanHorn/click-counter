import React from 'react';
import "../stylesheets/Counter.css"

function Counter({numClick}) {
    return (
        <div className='counter'>
            {numClick}
        </div>
    )
}

export default Counter