import React from 'react'
import {Route , Switch} from 'react-router-dom';
import Users from '../pages/Users';
import dashboard from '../pages/dashboard';
import Medecin from '../pages/Medecin';
import New from '../pages/New';
import Patient from '../pages/Patient';
import Pays from '../pages/Pays';
//import NewForm from '../pages/formFolder/NewForm';
const Routes = () => {
    return (
        <Switch>
            <Route path='/dashboard' exact component={dashboard}/>
            <Route path='/Users' component={Users}/>
            <Route path='/Medecins' component={Medecin}/>
            <Route path='/addnew' component={New}/>
            <Route path='/patient' component={Patient}/>
            <Route path='/pays' component={Pays}/>
        </Switch>
    )
}

export default Routes
