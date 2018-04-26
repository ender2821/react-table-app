import React from 'react';
import {Link} from 'react-router-dom';

class Dashboard extends React.Component{
    render() {
        return(
            <div>
                Dashboard
                <Link to="/"><button>Logout</button></Link>
            </div>
        );
    }
}

export default Dashboard;