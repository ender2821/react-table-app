import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';

class AdminDashboard extends React.Component{
    render() {
        return(
            <main className='dashboard-contain'>
                <Header />
                <Link to="/admin-dashboard/create"><button>Create New Data Row</button></Link>
                <Link to="/admin-dashboard/edit"><button>Edit</button></Link>
            </main>
        );
    }
}

export default AdminDashboard;