import React, { Component } from 'react'

class OldWriteWay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    componentDidMount(){
        console.log(`componentDidMount => you click ${this.state.count} times`)
    }
    componentDidUpdate(){
        console.log(`componentDidUpdate => you click ${this.state.count} times`)
    }
    addClick(){
        this.setState({
            count: this.state.count+1
        })
    }
    render() {
        return (
            <div>
            <div>you click { this.state.count } times</div>
                <button onClick={this.addClick.bind(this)}>Click</button>
            </div>
        )
    }
}

export default OldWriteWay