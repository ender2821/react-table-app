import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';

class DashboardEdit extends React.Component{
    render() {
        return(
            <main className='dashboard-contain'>
                <Header />
                <section>
                    <div className='content'>
                        <h1>Edit Data Row</h1>
                        <div class="form-elements">
                            <input type='text' value='AC' />
                            <input type='text' value='Ad Choices' />
                            <textarea value='Use to identify placement or creative that has an ad choices logo.'></textarea>
                            <form>
                                <select>
                                    <option disabled>DATA KEY LEVEL</option>
                                    <option selected>Agency</option>
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
                                    <option disabled>Includes List of Values</option>
                                    <option selected>No</option>
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

export default DashboardEdit;