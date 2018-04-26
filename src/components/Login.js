import React from 'react';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';
class Login extends React.Component{
    render() {
        console.log(this.props.phone);
        return(
            <div>
                Login
                <Link to="/dashboard"><button>Login</button></Link>
            </div>
            
        );
    }
}

export default Login;