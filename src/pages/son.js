import React, { Component } from 'react'
import GroundSon from './groundSon'
import Context from '../utils/context'

class Son extends Component {
    state = {  }
    render() {
        return (
            <div>
                 son
                {/*<Context.Consumer>
                       {
                           (data) => {
                            return <div>
                                   {data.name}
                              </div>
                           }
                       }
                    </Context.Consumer>*/}

                 <GroundSon/>
            </div>
        );
    }
}

export default Son;