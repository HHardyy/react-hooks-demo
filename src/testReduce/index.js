import React from 'react'
import ColorBar from './colorbar'
import Buttons from './buttons'
import { ColorRedux } from './testRedux'

function ReduceIndex(){
    return (
        <div>
        <ColorRedux>
            <ColorBar/>
            <Buttons/>
        </ColorRedux>
        </div>
    )
}

export default ReduceIndex