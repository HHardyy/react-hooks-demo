import React, { useState, useMemo } from 'react'

function UseMemo(){
    const [hardy1, setHardy1] = useState('i am hardy1')
    const [hardy2, setHardy2] = useState('i am hardy2')
    return (
        <div>
            <button onClick={()=>{setHardy1(new Date().getTime())}}>=hardy1小方块</button>
            <button onClick={()=>{setHardy2(new Date().getTime()+'hardy is comming - ')}}>=hardy2小方块</button>

            <Children name={hardy1}>
            {hardy2}
            </Children>
        </div>
    )
}

export default UseMemo


function Children({name, children}){

    // 子组件内部的方法， 每次点击父组件的按钮，都会执行子组件的方法

    // 使用useMemo可以加上重新执行的条件,之后只有name触发的时候才会重新执行这个方法

    // useMemo最主要的就是解决重复执行的问题，以前是用shuldComponentUpdate这个生命周期
    function changeName(){
        console.log('子组件的方法执行了')
        return name+'>>>子组件的方法执行了'
    }

    let newName = useMemo(()=>{changeName()}, [name]);

    return (
        <>
            <div>{newName}</div>
            <div>{children}</div>
        </>
    )
}