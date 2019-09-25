import React, { Component } from 'react'
import Son from './son'
import Context from '../utils/context'
import connect from '../utils/connect'

class home extends Component {
    state = { 
        name: '孙子'
     }
    render() {
        console.log(this.props)
        return (
            <div>
                home
                
               {/* 
                如果context中不传值就用这个
                <Context.Provider value={{...this.state}}>
                     <Son/>
                </Context.Provider>*/}

                {/** 如果context中不传值就用这个，不需要context.provider*/}
                <Son/>

                {/** 如果用index.js中的provider，并且传递store，其他页面就用context.consumer，这样又延申出来connect，不用每个组件都用context.consumer,下面的方法，高阶组件connect*/}
                {/*<Context.Consumer>
                     {
                         (data) => {
                            // console.log(data)
                            return <div>{data.indexReducer.b}</div>
                         }
                     }
                    </Context.Consumer>*/}
            </div>
        );
    }
}

//connect第一个参数是用来修改store中数据
export default connect((store) => {
    return {me:{...store.indexReducer}}
})(home);