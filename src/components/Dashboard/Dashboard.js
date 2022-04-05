
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Mybarchart from '../Chart/Mybarchart';
import Mylinechart from '../Chart/Mylinechart';
import Mypiechart from '../Chart/Mypiechart';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div className='container  dashboard-background' >
             
         <h2>This is a Dashboard</h2>
               
             <div>
            <Mypiechart></Mypiechart>
            </div>
            <br />
            <br /> 
            <div>
            <Mybarchart></Mybarchart>
             <br></br>
             <br></br>
             <Mylinechart></Mylinechart>
            </div>
            
    
    <br /> <br />

             
         
 
           
            
            
           
           
           
        </div>
    );
};

export default Dashboard;