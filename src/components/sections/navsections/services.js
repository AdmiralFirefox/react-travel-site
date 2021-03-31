import React, { Component } from 'react';
import './services.css';
import ServicesPartTwo from '../../extracontent/services/servicesparttwo';

class Services extends Component {
    render() { 
        return ( 
            <div className="servicesContentWrapper">
                <div className="servicesContent">
                    <div className="serviceHeader">
                        <h1>SERVICES</h1>
                        <h3>Enhance your travelling experience with our service</h3>
                    </div>
                </div>
                <ServicesPartTwo />
            </div>
         );
    }
}
 
export default Services;