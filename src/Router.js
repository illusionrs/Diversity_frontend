import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/Misc/Nav'
import Home from './components/home/Home'
export default function Router() {
    return (
        <BrowserRouter>

         <Navbar/>

           <Switch>
               <Route path="/login">Login</Route>
               <Route path="/" exact  ><Home/></Route>
               <Route path="/register">Register</Route>
           </Switch>
        
        </BrowserRouter>
            
        
        
    )
}
