import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MDBCol, MDBRow } from 'mdb-react-ui-kit';

class Metrics extends Component {
    render() {
        return (
            <>
            <section className='metrics mb-3'>
                <MDBRow>
                    <MDBCol>
                        
                        <div className='metrics-title'><span className='circle-dot'>Errors: 0,12%</span></div>
                        <p className='metrics-average'>Average: 0,11%</p>
                    </MDBCol>
                    <MDBCol>
                        <div className='metrics-title'><span className='circle-dot'>Zeros: 5,12% </span></div>
                        <p className='metrics-average'>Average: 0,11%</p>
                    </MDBCol>
                    <MDBCol>
                        <div className='metrics-title'><span className='circle-dot'>Timeouts: 0,12%</span></div>
                        <p className='metrics-average'>Average: 0,11%</p>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <div className='bars d-inline-flex'>
                        <div className='bg-warning w-50'></div>
                        <div className='bg-secondary w-25'></div>
                        <div className='bg-primary w-25'></div>
                        <div  className='bg-dark w-25'></div>
                    </div>

                    <div className='error-display d-flex gap-4 pt-3'>
                        <div className='dot-square dot-warning'>Error 500: 1256</div>
                        <div className='dot-square dot-secondary'>Error 501: 800</div>
                        <div className='dot-square dot-primary'>Error 502: 560</div>
                        <div className='dot-square dot-gray'>Other: 330</div>
                    </div>
                </MDBRow>
                </section>

                {/* Second metrics section */}
                <section className='metrics'>
                <MDBRow className='pt-5'>
                    <ul className=''>
                        <li className='d-flex pb-3'>
                            <MDBCol size='1'>
                                <div className='metrics-bullet dot dot-success d-flex align-items-center justify-content-center'>
                                    <i className='fa fa-filter'></i>
                                </div>
                            </MDBCol>
                            <MDBCol size='11'>
                                <div className='d-flex gap-5 border-bottom pb-3'>
                                    <div className='col'>
                                        <div className='metrics-title'>Searches <span className='badge bg-success'>+5%</span></div>
                                        <div className='data'>29 380 <span className='period'>Yesterday</span></div>
                                        <div className='data-disabled'>27 985 <span className='period'>Last Friday</span></div>
                                    </div>
                                    <div className='col'>
                                        <div className='metrics-title'>Mobile traffic:  <span className=''>100%</span></div>
                                        <div className='metrics-title'>Web traffic:  <span className=''>100%</span></div>
                                        <div className='text-mute period'>You get 100% traffic on mobile and desktop devices</div>
                                        <div className='period'>help: <a href='#'>Searches</a>,<a href='#'>Pessimization</a></div>
                                    </div>
                                </div>
                            </MDBCol>
                        </li>
                        <li className='d-flex pb-3 pt-2'>
                            <MDBCol size='1'>
                                <div className='metrics-bullet dot dot-danger d-flex align-items-center justify-content-center'>
                                    <i className='fas fa-hand-point-up'></i>
                                </div>
                            </MDBCol>
                            <MDBCol size='11'>
                                <div className='d-flex gap-5 border-bottom pb-5'>
                                    <div className='col'>
                                        <div className='metrics-title text-danger'>Clicks <span className='badge bg-danger'>-13%</span></div>
                                        <div className='data'>29 380 <span className='period'>Yesterday</span></div>
                                        <div className='data-disabled'>27 985 <span className='period'>Last Friday</span></div>
                                    </div>
                                    <div className='col'>
                                        <div className='metrics-title text-danger'>CTR: 0.4%</div>
                                        <div className='data'>29 380 <span className='period'>Yesterday</span></div>
                                        <div className='data-disabled'>27 985 <span className='period'>Last Friday</span></div>
                                    </div>
                                </div>
                            </MDBCol>
                            
                        </li>

                        <li className='d-flex'>
                            <MDBCol size='1'>
                                <div className='metrics-bullet dot dot-success d-flex align-items-center justify-content-center'>
                                    <i className='fas fa-shopping-cart'></i>
                                </div>
                            </MDBCol>
                            <MDBCol>
                                <div className='d-flex gap-5 pb-5'>
                                    <div className='col'>
                                        <div className='metrics-title'>Sales </div>
                                        <div className='data'>24 <span className='period'>Yesterday</span></div>
                                        <div className='data-disabled'>24 <span className='period'>Last Friday</span></div>
                                    </div>
                                    <div className='col'>
                                        <div className='metrics-title'>STR:  <span className=''>6.2%</span></div>
                                        <div className='metrics-title'>Avg. Check:  <span className=''>8903</span></div>
                                        <div className='text-mute period'>Conversion from clicks to bookings on all devices  </div>
                                        <div className=''>help: 
                                        <a href='#'>STR</a>,<a href='#'>Bookings</a>,<a href='#'>Avg. Check</a>
                                        </div>
                                    </div>
                                </div>
                            </MDBCol>
                        </li>
                    </ul>
                </MDBRow>
            </section>
            </>
        );
    }
}

Metrics.propTypes = {

};

export default Metrics;