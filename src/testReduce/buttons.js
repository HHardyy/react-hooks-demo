import React, { useContext } from 'react'
import { UPDATE_TYPE, CountContext } from './testRedux'

function Buttons(){
    const { dispatch } = useContext(CountContext)
    return (
        <div>
            <button onClick={()=>{dispatch({type: UPDATE_TYPE, color:'green'})}}>绿色</button>
            <button onClick={()=>{dispatch({type: UPDATE_TYPE, color:'blue'})}}>蓝色</button>
        </div>
    )
}

export default Buttons