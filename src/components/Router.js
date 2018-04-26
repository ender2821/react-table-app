import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import App from './App';
import Login from './Login';
import Dashboard from './Dashboard';
import AdminDashboard from './AdminDashboard';
import DashboardEdit from './DashboardEdit';
import DashboardCreate from './DashboardCreate';
import NotFound from './NotFound';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/dashboard' component={Dashboard}/>
            <Route exact path='/admin-dashboard' component={AdminDashboard}/>
            <Route exact path='/admin-dashboard/create' component={DashboardCreate}/>
            <Route exact path='/admin-dashboard/edit' component={DashboardEdit}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
);

export default Router;