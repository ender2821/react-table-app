import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';

class Dashboard extends React.Component{
    render() {
        return(
            <main className='dashboard-contain'>
                <Header />
                Dashboard
                
            </main>
        );
    }
}

export default Dashboard;