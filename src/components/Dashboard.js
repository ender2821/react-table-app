import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';

class Dashboard extends React.Component{
    render() {
        return(
            <main className='dashboard-contain'>
                <Header />
                <section>
                    <div className="table">
                        <form className='filter-input'>
                            <span><i class="fas fa-filter"></i></span>
                            <input type='text' placeholder='filter'/>
                        </form>
                        <table>
                            <tr>
                                <th>Data Key <i class="fas fa-caret-down"></i></th>
                                <th>Data Key Categories</th>
                                <th>Data Key Definitions</th>
                                <th>Data Key Level</th>
                                <th>Required</th>
                                <th>Includes List of Values</th>
                            </tr>
                            <tr>
                                <td>AC</td>
                                <td>Ad Choices</td>
                                <td>Use to identify placement or creative that has an ad choices logo.</td>
                                <td>Agency</td>
                                <td></td>
                                <td>No Values Included</td>
                            </tr>
                            <tr>
                                <td>AD</td>
                                <td>Ad/ Creative Name</td>
                                <td>Use to identify the specific description or unique  name given to an ad/ creative.</td>
                                <td>Agency</td>
                                <td></td>
                                <td>No Values Included</td>
                            </tr>
                            <tr>
                                <td>BS</td>
                                <td>Business Segment</td>
                                <td>Use to identify an advertiser's business segment.</td>
                                <td>Agency</td>
                                <td></td>
                                <td>No Values Included</td>
                            </tr>  
                            <tr>
                                <td>CT</td>
                                <td>Campaign Type</td>
                                <td>Use to identify a campaign type.</td>
                                <td>Agency</td>
                                <td></td>
                                <td>No Values Included</td>
                            </tr> 
                            <tr>
                                <td>CA</td>
                                <td>Creative Agency</td>
                                <td>Use to identify the name of the creative agency from which the creative assets were produced.  </td>
                                <td>Agency</td>
                                <td></td>
                                <td>No Values Included</td>
                            </tr> 
                            <tr>
                                <td>DS</td>
                                <td>DSP</td>
                                <td>Use to identify the programmatic demand supply platform.</td>
                                <td>Agency</td>
                                <td></td>
                                <td>No Values Included</td>
                            </tr> 
                            <tr>
                                <td>PI</td>
                                <td>Placement ID</td>
                                <td>Use to identify a unique placement ID associated with the placement.</td>
                                <td>Agency</td>
                                <td></td>
                                <td>No Values Included</td>
                            </tr> 
                            <tr>
                                <td>SV</td>
                                <td>Site Vertical</td>
                                <td>Use to identify the site content category.</td>
                                <td>Agency</td>
                                <td></td>
                                <td>No Values Included</td>
                            </tr> 
                            <tr>
                                <td>AG</td>
                                <td>Agency</td>
                                <td>Use to identify the agency of record from Publicis list of agencies.</td>
                                <td>Global</td>
                                <td className='text-center'><i class="fas fa-check"></i></td>
                                <td>Yes, reference "List of Global Defined Values"</td>
                            </tr> 
                            <tr>
                                <td>CO</td>
                                <td>Campaign Objecive</td>
                                <td>Use to identify the campaign objective which should align with the strategic media objective.</td>
                                <td>Global</td>
                                <td className='text-center'><i class="fas fa-check"></i></td>
                                <td>Yes, reference "List of Global Defined Values"</td>
                            </tr> 
                            <tr>
                                <td>MT</td>
                                <td>Market</td>
                                <td>Use to identify the market/ location the media will be running in.</td>
                                <td>Global</td>
                                <td className='text-center'><i class="fas fa-check"></i></td>
                                <td>Yes, reference "List of Global Defined Values"</td>
                            </tr> 
                            <tr>
                                <td>MC</td>
                                <td>Media Channel</td>
                                <td>Use to identify the media channel (tv, display, search, social, etc.) media will be running in.</td>
                                <td>Global</td>
                                <td className='text-center'><i class="fas fa-check"></i></td>
                                <td>Yes, reference "List of Global Defined Values"</td>
                            </tr> 
                            <tr>
                                <td>PS</td>
                                <td>Placement Size</td>
                                <td>Use to identify the placement/ creative size for site-served placements.</td>
                                <td>Global</td>
                                <td className='text-center'><i class="fas fa-check"></i></td>
                                <td>Yes, reference "List of Global Defined Values"</td>
                            </tr> 
                            <tr>
                                <td>QT</td>
                                <td>Quarter</td>
                                <td>Use to identify quarter.</td>
                                <td>Global</td>
                                <td className='text-center'><i class="fas fa-check"></i></td>
                                <td>Yes, reference "List of Global Defined Values"</td>
                            </tr> 
                            <tr>
                                <td>RT</td>
                                <td>Rate Type</td>
                                <td>Use to identify the rate type media will be purchased under.</td>
                                <td>Global</td>
                                <td className='text-center'><i class="fas fa-check"></i></td>
                                <td>Yes, reference "List of Global Defined Values"</td>
                            </tr> 
                            <tr>
                                <td>TT</td>
                                <td>Target Type</td>
                                <td>Use to identify the target group OR use to identify the campaign strategy. </td>
                                <td>Global</td>
                                <td className='text-center'><i class="fas fa-check"></i></td>
                                <td>Yes, reference "List of Global Defined Values"</td>
                            </tr> 
                            <tr>
                                <td>VV</td>
                                <td>Verification  Viewability</td>
                                <td>Use to identify the viewability/verification definition, threshold, partner. </td>
                                <td>Global</td>
                                <td className='text-center'><i class="fas fa-check"></i></td>
                                <td>Yes, reference "List of Global Defined Values"</td>
                            </tr>                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                        </table>
                    </div>
                </section>
            </main>
        );
    }
}

export default Dashboard;