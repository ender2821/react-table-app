import React from 'react';
import Login from './Login';

class App extends React.Component {
    state = {
        phone: '123-456-7890',
    };
    render() {
        return(
            <div className="app-start">
            	<Login/>
            </div>   
        );
    }
}

export default App;