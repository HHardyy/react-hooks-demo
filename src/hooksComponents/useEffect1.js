import React, { useState, useEffect } from 'react'

function useEffect1(){
    let [count, addCount] = useState(0)

    //异步
    useEffect(()=>{
        console.log(`useEffect => ${count} times`)
        return () => {
            console.log('useEffect component')
        }
    }, [count])
    return (
        <div>
            <p>you click {count} times</p>
            <button onClick={()=>{addCount(count+1)}}>click hooks</button>
        </div>
    )
}
export default useEffect1