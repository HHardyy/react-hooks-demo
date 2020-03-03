import React, { useReducer } from 'react'

// redux中的reducer
// export default (state, action) => {
//     switch(action.type) {
//         case 'add':
//             // TODO
//             break;
//         case 'rm':
//             // TODO
//             break;
//         default:
//             return state
//     }
// }


function UseReducer(){
    // useReducer有两个参数，第一个参数是一个reducer，第二个参数是初始值
    let [count, dispatch] = useReducer((state, action) => {
        switch(action){
            case 'add':
                return state + 1;
            case 'sub':
                return state - 1;
            default:
                return state
        }
    }, 0)

    return (
        <div>
            <p>当前数量是{count}</p>
            <button onClick={() => { dispatch('sub') }}>-</button>
            <button onClick={() => { dispatch('add') }}>+</button>
        </div>
    )
}

export default UseReducer