import React, { Component } from 'react';
import FactoryPaths from './FactoryPaths';

class MinHand extends Component {
    constructor(props){
        super(props);
        let w =window.innerWidth;
        let h =window.innerHeight;

        this.center = {
            x:w*0.5, 
            y:h*0.5
        };
        this.path=new FactoryPaths(null, null, this.center, true);
    }


    render() {
        return <path  d={this.path.getD("hmin")} stroke="#fff" strokeWidth="100" fill="none"/>;
    }
}

export default MinHand;
