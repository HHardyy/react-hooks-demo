import React, { useState } from 'react'
let showSex = true;
function IfUseState() {
    // 括号内是初始值
    let [age, setAge] = useState(18);
    let [sex, setSex] = useState('小方块');

    // 错误写法
    // if(showSex){
    //     let [sex, setSex] = useState('小方块');
    //     showSex = false
    // }    
    
    return (
        <div>
            hardy is {age} years ago, sex is {sex}
        </div>
    )
}

export default IfUseState