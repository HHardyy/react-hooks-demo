import React, { useState, useEffect, useCallback } from 'react'

function UseSelfHandler() {

    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    })

    const onResize = useCallback(  // useCallback优化函数执行
        () => {
            setSize({
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            })
        },
        [],
    )

    useEffect(
        ()=>{
            window.addEventListener('resize', onResize)
            // return 只有销毁的时候才执行
            return () => {
                window.removeEventListener('resize', onResize)
            }
        },
    []
    )

    return size
}

function UseSelf(){
    const size = UseSelfHandler()
    return (
        <div>
            <p>当前的size是{size.width} x {size.height}</p>
        </div>
    )
}

export default UseSelf