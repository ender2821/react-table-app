import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';

class DashboardCreate extends React.Component{
    render() {
        return(
            <main className='dashboard-contain'>
                <Header />
                <section>
                    <div className='content'>
                        <h1>Create New Data Row</h1>
                        <div class="form-elements">
                            <input type='text' placeholder='Data Key' />
                            <input type='text' placeholder='Data Key Categories' />
                            <textarea placeholder='Data Key Definitions'></textarea>
                            <form>
                                <select>
                                    <option selected disabled>DATA KEY LEVEL</option>
                                    <option>Agency</option>
                                    <option>Global</option>
                                </select>
                                <span className='carrot'><i class="fas fa-caret-down"></i></span>
                            </form>
                            <span className='required-button'>
                                Required
                                <span class="checkbox"><i class="fas fa-check"></i></span>
                            </span>
                            <form>
                                <select>
                                    <option selected disabled>Includes List of Values</option>
                                    <option>No</option>
                                    <option>Yes</option>
                                </select>
                                <span className='carrot'><i class="fas fa-caret-down"></i></span>
                            </form> 
                            <Link to="/admin-dashboard"><button className='btn main'>Save</button></Link>
                            <Link to="/admin-dashboard"><button className='btn secondary'>Cancel</button></Link>   
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default DashboardCreate;