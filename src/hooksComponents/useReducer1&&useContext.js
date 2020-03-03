import React from 'react'
import Color from './useReducer&&useContext/color'
import Buttons from './useReducer&&useContext/buttons'
import { Colorbox } from './useReducer&&useContext/colorUseReducerAsRedux'

// useReducer + useContext 实现Redux   state状态管理

/*
useContext可以实现全局状态，状态全局化并且可以统一管理 （redux的一部分）
useReducer可以实现复杂逻辑部分，action相当于Redux中的reducer
*/

function UseReducerReplaceRedux(){
    return (
        <div>
        <Colorbox>
            <Color/>
            <Buttons/>
        </Colorbox>
        </div>
    )
}

export default UseReducerReplaceRedux