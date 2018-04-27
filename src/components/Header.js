import React from 'react';
import {Link} from 'react-router-dom';

class DashboardEdit extends React.Component{
    render() {
        return(
            <header>
                <img src="../images/icon.svg" alt='Publicis Media' />
                <Link to="/" className='header-btn'>Logout</Link>
            </header>
        );
    }
}

export default DashboardEdit;