import React, { Component } from 'react'
import {BrowserRouter, Route, Redirect} from 'react-router-dom'
// import Home from '../pages/home'
// import Son from '../pages/son'
// import GroundSon from '../pages/groundSon'
import asyncComponent from '../utils/asyncComponent'

const Home  = asyncComponent(() => import('../pages/home'))
const Son  = asyncComponent(() => import('../pages/son'))
const GroundSon  = asyncComponent(() => import('../pages/groundSon'))

class Router extends Component {
    state = {  }
    render() {
        return (
           <BrowserRouter>
                <Route path='/' render={() => <Redirect to='/home'/>}></Route>
                <Route path='/home' component={Home}></Route>
                <Route path='/son' component={Son}></Route>
                <Route path='/groundSon' component={GroundSon}></Route>
           </BrowserRouter>
        );
    }
}

export default Router;