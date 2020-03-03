import React, { useState, createContext, useContext } from 'react'

const CountContext = createContext();

function Conter(){
    let count = useContext(CountContext)
    return (
        <h2>
            {count}
        </h2>
    )
}

function Donter(){
    let count = useContext(CountContext);
    return (
        <h2>
            {count}
        </h2>
    )
}

function UseContextDemo(){
    let [count, addCount] = useState(0)
    return (
        <div>
            <p>you click { count } times</p>
            <button onClick={()=>{addCount(count+1)}}>click hooks</button>

            {/* 子组件  */}
            <CountContext.Provider value={count}>
                <Conter/>
                <Donter/>
            </CountContext.Provider>
        </div>
    )
}

export default UseContextDemo