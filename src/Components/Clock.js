import React, { Component } from 'react';
import './Clock.css';
import { tasks } from '../data/index.js';

class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {digital: "00:00"};
    }
    timer() {
        let t=new Date();
        let text;
        let hours = t.getHours();
        let mins = t.getMinutes();

        if (t.getHours() < 10)
            hours = '0' + hours;

        if (t.getMinutes() < 10)
            mins = '0' + mins;

        text = hours + ':' + mins;

        this.setState({digital: text});
    }

    componentDidMount() {
        this.intervalId = setInterval(this.timer.bind(this), 100);
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    render() {
        return(
            <svg>
                <circle cx="50%" cy="50%" r="30%" stroke="white" strokeWidth="3" fill="none" />
                <circle cx="50%" cy="50%" r="10%" stroke="white" strokeWidth="3" fill="none" />
                <text x="50%" y="50%" fill="white" textAnchor="middle">{this.state.digital}</text>
            </svg>
        );
    }
}

export default Clock;
