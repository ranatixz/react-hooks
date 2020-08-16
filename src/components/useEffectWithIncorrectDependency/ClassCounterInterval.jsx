import React, { Component } from 'react'

class ClassCounterInterval extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    componentDidMount(){
        this.interval = setInterval(this.tick, 1000)
    }

    tick = () =>{
        this.setState(prevState =>{
            return{count: prevState.count + 1}
        })
    }
    
    componentWillUnmount(){
        clearInterval(this.interval)
    }

    render() {
        console.log(this.state.count)
        return (
            <div>
                <h1>{this.state.count}</h1>
            </div>
        )
    }
}

export default ClassCounterInterval
