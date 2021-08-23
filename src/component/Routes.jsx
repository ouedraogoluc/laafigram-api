import React from 'react'
import {Route , Switch} from 'react-router-dom';
import Users from '../pages/Users';
import dashboard from '../pages/dashboard';
import Medecin from '../pages/Medecin';
const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={dashboard}/>
            <Route path='/Users' component={Users}/>
            <Route path='/Medecins' component={Medecin}/>
        </Switch>
    )
}

export default Routes
