import React, { Component } from 'react'

const asyncComponent = (asyncCbk) =>{
    return class extends Component{
        state = {
            Com: null
        }
        render(){
            const {Com} =this.state
            return(
                <div>
                {
                    Com? <Com {...this.props}/>:null
                }
                </div>
            )
        }
        componentDidMount(){
            asyncCbk().then(res => {
                this.setState({
                    Com: res.default
                })
            })
        }
    }
}

export default asyncComponent