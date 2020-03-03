import React, { useContext } from 'react'
import { CountContext } from './colorUseReducerAsRedux'

function Color(){
    const { color } = useContext(CountContext);
    return (
        <div>
            <p style={{ color }}>颜色是蓝色</p>
        </div>
    )
}

export default Color