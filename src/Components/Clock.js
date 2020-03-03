import React, { Component } from 'react';
import MinHand from './MinHand';
import HourHand from './HourHand';
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
        console.log(this.state.tasks);
    }

    render() {
        return(
            <svg> 
                <circle cx="50%" cy="50%" r="10%" stroke="white" fill="none"/>
                <circle cx="50%" cy="50%" r="25%" stroke="white" fill="none"/>
                <HourRing tasks={this.state.tasks}/>
                <HourHand/>
                <MinRing  tasks={this.state.tasks}/>
                <MinHand/>
                <Digital/>
            </svg>
        );
    }
}

export default Clock;
