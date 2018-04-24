import React, { Component } from 'react';
//import MinHand from './MinHand';
//import HourHand from './HourHand';
import MinRing from './MinRing';
import HourRing from './HourRing';
import Digital from './Digital';
import './Clock.css';
import { tasks } from '../data/index.js';

class Clock extends Component {
    constructor(props){
        super(props);
        this.state={
            tasks:tasks
        };
    }
/*<HourHand/>
                <MinHand/> */
    render() {
        return(
            <svg> 
                <HourRing tasks={this.state.tasks}/>
                <MinRing  tasks={this.state.tasks}/>
                
                <Digital/>
            </svg>
        );
    }
}

export default Clock;
