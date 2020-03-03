import React, { useContext } from 'react'
import { CountContext } from './testRedux'

function ColorBar(){
    const {color} = useContext(CountContext)
    return (
        <div>
            <p style={{color}}>当前颜色显示</p>
        </div>
    )
}

export default ColorBar