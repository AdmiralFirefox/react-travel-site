import React, { Component } from 'react';
import './homeparttwo.css';
import HomeCardCompile from './cardcompile';
import HomeFooter from './homefooter';

class HomeTwo extends Component {
    render() { 
        return ( 
            <div className="homePartTwoContentWrapper" id="homePartTwo">
                <div className="homePartTwoContent">
                    <h2>Choose your Destination</h2>
                    <HomeCardCompile />
                    <HomeFooter />
                </div>  
            </div>
         );
    }
}
 
export default HomeTwo;