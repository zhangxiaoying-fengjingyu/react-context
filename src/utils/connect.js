import React, { Component } from 'react'
import Context from './context'

const connect = (cbk) => {
    return (Com) => {
        return class extends Component{
            render(){
                console.log(this.props)
                return (
                    <div>
                         <Context.Consumer>
                            {
                                (data) =>{
                                     let res = cbk(data)
                                    //  console.log(data, '=============')
                                     return <Com {...res} {...this.props}/>
                                }
                            }
                         </Context.Consumer>
                    </div>
                )
            }
        }
    }
}

export default connect