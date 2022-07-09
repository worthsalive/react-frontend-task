import React from 'react';
import { MDBBtn, MDBBtnGroup } from 'mdb-react-ui-kit';

export default function FilterBar() {
  return (
      <MDBBtnGroup aria-label='Metric Filter' className='shadow-1 mb-3' id='filter-btn-grp'>
        <a href='#' className='btn btn-sm  text-dark'>Last hour</a>
        <a href='#' className='btn btn-sm  text-dark'>Today</a>
        <a href='#' className='btn btn-sm text-dark active'>Yesterday</a>
        <a href='#' className='btn btn-sm  text-dark'>Last 3 days</a>
        {/* <MDBBtn color="light" className='text-dark'>Last hour</MDBBtn>
        <MDBBtn toggle active color='light' className='text-dark'>Today</MDBBtn>
        <MDBBtn color='light' className='text-dark'>Yesterday</MDBBtn>
        <MDBBtn color='light' className='text-dark'>Last 3 days</MDBBtn> */}
      </MDBBtnGroup>
  );
}