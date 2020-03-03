import React, { Fragment, useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ReactDOM from 'react-dom'
import OldWriteWay from './oldWriteWay'  // 之前的写法
import NewWriteWay from './newWriteWay'

function Home(){
    useEffect(()=>{
        console.log('home page')
        
        // 加return等于解绑操作,离开组件触发，和componentWillUnmount差不多
        return ()=>{
            console.log('解绑home')
        }
    }, [])  // 第二个参数=Array 里面是 解绑条件， []代表真正不用了
    return (
        <div>
            this is home page
        </div>
    )
}

function List(){
    useEffect(() => {
        console.log('list page')
    })
    return (
        <div>
            this is list page
        </div>
    )
}


ReactDOM.render(
    <Fragment>
       <OldWriteWay />
       <hr/>
       <NewWriteWay />
       -
       {/* useEffect实现componentWillUnmount */}
       <Router>
           <ul>
               <li><Link to="/">home</Link></li>
               <li><Link to="/list">list</Link></li>
           </ul>

           <Route path="/" exact component={Home}/>
           <Route path="/list" exact component={List}/>
       </Router>
    </Fragment>
    ,document.getElementById('root')
)