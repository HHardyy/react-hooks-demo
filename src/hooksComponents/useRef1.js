import React, { useRef, useState, useEffect} from 'react'

function UseRef(){
    let refEl = useRef(null)  // 获取dom
    const onButtonClick = () => {
        refEl.current.value = 'click me'
        console.log(refEl)
    }

    // 数据响应     // 保存变量
    const [text, setText] = useState('hardy')
    useEffect(()=>{
        refEl.current.value = text
    })

    return (
        <>
            <input ref={refEl} type="text"/>
            <button onClick={onButtonClick}>小方块</button>
            <hr/>
            <input value={text} onChange={(e)=>{setText(e.target.value)}}/>
        </>
    )
}

export default UseRef