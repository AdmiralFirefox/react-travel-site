import React, { Component } from 'react';
import './servicesparttwo.css';
import ServiceCardCompile from './servicecardcompile';

class ServicesPartTwo extends Component {
    render() { 
        return ( 
            <div className="servicesPartTwoWrapper">
                <div className="servicesPartTwoContent"> 
                    <h1>Our Services</h1>
                </div>
                <ServiceCardCompile />
            </div>
         );
    }
}
 
export default ServicesPartTwo;