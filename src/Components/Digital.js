import React, { Component } from 'react';

class Digital extends Component {
    constructor(props){
        super(props);
        this.state={
            now:new Date()
        };
    }
  
    timer() {
        this.setState({now:new Date()});
        let text;
        let hours = this.state.now.getHours();
        let mins = this.state.now.getMinutes();

        if (this.state.now.getHours() < 10)
            hours = '0' + hours;

        if (this.state.now.getMinutes() < 10)
            mins = '0' + mins;

        text = hours + '-' + mins;
        this.setState({time:text});
        
    }
    
    componentDidMount() {
        this.intervalId = setInterval(this.timer.bind(this), 100);
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }
    render() {
        return(
            <text x="50%" y="50%" fill="white" textAnchor="middle">
                {this.state.time}
            </text>
        );
    }
}

export default Digital;
