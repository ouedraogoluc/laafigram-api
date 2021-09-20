import React from 'react'
import { BrowserRouter,Route } from 'react-router-dom'
import HomeScreen from './HomeScreen'
const RoutesHome = () => {
    return (
        <BrowserRouter>
           <Route>
               <HomeScreen/>  
           </Route>
        </BrowserRouter>
    )
}

export default RoutesHome
