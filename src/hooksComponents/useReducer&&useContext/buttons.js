import React, { useContext } from 'react'
import { CountContext, UPDATE_COLOR } from './colorUseReducerAsRedux'

function Buttons(){
    const { dispatch } = useContext(CountContext);
    return (
        <div>
            <button onClick={()=>{dispatch({type:UPDATE_COLOR, color:'blue'})}}>蓝色</button>
            <button onClick={()=>{dispatch({type:UPDATE_COLOR, color:'green'})}}>绿色</button>
        </div>
    )
}

export default Buttons