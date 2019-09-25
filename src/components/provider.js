import React, { Component } from 'react'
import Context from '../utils/context'

class Provider extends Component {
    state = {  }
    render() {
        console.log(this.props)//index.js中传递过来的store
        const {store, children} =this.props
        return (
            <div>
                <Context.Provider value={{...store}}>
                    {children}
                </Context.Provider>
            </div>
        );
    }
}

export default Provider;