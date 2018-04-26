import React from 'react';
import {Link} from 'react-router-dom';

class AdminDashboard extends React.Component{
    render() {
        return(
            <div>
                Admin Dashboard
                <Link to="/"><button>Logout</button></Link>
                <Link to="/admin-dashboard/create"><button>Create New Data Row</button></Link>
                <Link to="/admin-dashboard/edit"><button>Edit</button></Link>
            </div>
        );
    }
}

export default AdminDashboard;