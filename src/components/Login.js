import React from 'react';
import {Link} from 'react-router-dom';
class Login extends React.Component{
    render() {
        console.log(this.props.phone);
        return(
            <div className="login-main">
                <div className="login-image"></div>
                <div className="login-content">
                    <div className="border">
                        <main className="content">
                            <img src="./images/logo.jpg" alt='publicis media'/>
                            <h1>Taxonomy Database</h1>
                            <input type="text" placeholder="username"/>
                            <input type="password" placeholder="password"/>
                            <Link to="/dashboard"><button className='btn main'>Login</button></Link>
                            <Link to="/admin-dashboard"><button className='btn secondary'>Admin Login</button></Link>
                        </main>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Login;