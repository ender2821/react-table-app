import React from 'react';
import {Link} from 'react-router-dom';

class DashboardCreate extends React.Component{
    render() {
        return(
            <div>
                Create New Data Row
                <Link to="/admin-dashboard"><button>Save</button></Link>
                <Link to="/admin-dashboard"><button>Cancel</button></Link>
            </div>
        );
    }
}

export default DashboardCreate;