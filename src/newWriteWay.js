/*
 react hooks 初识
*/
import React from 'react'

// study demo
import InitUseState from './hooksComponents/initUseState'
import IfUseState from './hooksComponents/ifUseState'
import UseEffect from './hooksComponents/useEffect1'
import UseContextDemo from './hooksComponents/createContext&&useContext'
import UseReducer from './hooksComponents/useReducer1'
import UseReducerReplaceRedux from './hooksComponents/useReducer1&&useContext'
import UseMemo from './hooksComponents/useMemo1'
import UseRef from './hooksComponents/useRef1'
import UseSelf from './hooksComponents/useSelf'


import ReduceIndex from './testReduce/index'

export const NewWriteWay = (props) => {
    return(
        <div>
        {/* useReducer && useContext => redux的小案例 */}
        <ReduceIndex/>
        =============
            <InitUseState/>
            -
            {/* useState不能存在条件判断语之中,括号内是初始值 demo */}
            <IfUseState/>
            -
            {/* useEffect */}
            <UseEffect/>
            {/* useEffect实现componentWillUnmount,具体实现在index */}

            {/* createContext && useContext, 实现父子组件传值的问题 */}
            -
            <UseContextDemo/>
            {/* useReducer , 经常和useContext一起使用，能达到redux的效果 */}
            -
            <UseReducer/>
            -
            {/* useReducer代替Redux */}
            <UseReducerReplaceRedux/>
            -
            {/* useMemo 解决的是react hooks的性能问题 父组件的状态更新，子组件的代码都会重新执行一遍， useMemo可以实现和useEffect一样的根据条件判断是否重新执行*/}
            -
            <UseMemo/>
            -
            {/* useRef  不仅可以获取dom元素，还可以用来保存变量 */}
            <UseRef/>
            -
            {/* 自定义hooks函数,必须以use开头 */}
            <UseSelf/>
        </div>
    )
}

export default NewWriteWay
