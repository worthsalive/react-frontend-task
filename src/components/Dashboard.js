import React, { Component } from 'react';
import FilterBar from './filterBar';
import Metrics from './Metrics';

class Dashboard extends Component {
    render() {
        return (
            <div className='dashboard'>
                <h1 className='page-title'>Main metrics</h1>
                <FilterBar/>
                <Metrics/>
            </div>
        );
    }
}

export default Dashboard;