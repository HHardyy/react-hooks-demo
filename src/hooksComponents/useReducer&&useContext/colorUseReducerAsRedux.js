import React, { createContext, useReducer } from 'react'

export const CountContext = createContext({});

export const UPDATE_COLOR = 'UPDATE_COLOR'

const reducer = (state, action) => {
    switch(action.type) {
        case UPDATE_COLOR:
            return action.color
        default: 
            return state
    }
}

export const Colorbox = props => {
    const [color, dispatch] = useReducer(reducer, 'green')
    return (
        <CountContext.Provider value={{color, dispatch}}>
            {props.children}
        </CountContext.Provider>
    )
}