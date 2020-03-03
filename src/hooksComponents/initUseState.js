import React, { useState } from 'react'

function InitUseState() {
    const [ count, addCount ] = useState(0)

    return (
        <div>
            <p>you click {count} times</p>
            <button onClick={()=>{addCount(count+1)}}>click hooks</button>
        </div>
    )
}

export default InitUseState