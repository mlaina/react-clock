import React, { Component } from 'react';
import FactoryPaths from './FactoryPaths';

class HourHand extends Component {
    constructor(props){
        super(props);
        let w =window.innerWidth;
        let h =window.innerHeight;

        this.center = {
            x:w*0.5, 
            y:h*0.5
        };
        this.radius=(w+h)*0.04;
        this.state={
            path:new FactoryPaths(null, null, this.center, this.radius ,true)
        };
    }
    timer(){
        this.setState({path:new FactoryPaths(null, null, this.center, this.radius ,true)});
    }
    componentDidMount() {
        this.intervalId = setInterval(this.timer.bind(this), 100);
    }
    componentWillUnmount(){
        clearInterval(this.intervalId);
    }
    render() {
        return <path  d={this.state.path.getD("hhour")} stroke="#fff" strokeWidth="50" fill="none"/>
    }
}

export default HourHand;
