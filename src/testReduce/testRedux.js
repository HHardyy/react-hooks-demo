import React, { createContext, useReducer } from 'react'

export const CountContext = createContext({})

export const UPDATE_TYPE = 'UPDATE_TYPE'

const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_TYPE:
            return action.color
        default:
            return state
    }
}

export const ColorRedux = props => {
    const [color, dispatch] = useReducer(reducer, 'green');
    return (
        <CountContext.Provider value={{color, dispatch}}>
            {props.children}
        </CountContext.Provider>
    )
}