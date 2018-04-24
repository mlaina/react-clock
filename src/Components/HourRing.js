import React, { Component } from 'react';
import FactoryPaths from './FactoryPaths';

class HourRing extends Component {
    constructor(props){
        super(props);
        let w =window.innerWidth;
        let h =window.innerHeight;

        this.center = {
            x:w*0.5, 
            y:h*0.5
        };
        this.radius=(w+h)*0.05;
    }
    loadPaths(){
        const {tasks}=this.props;
        const items=[];
        tasks.forEach(task => {
            let now =new Date();
            let plusnow=new Date();
            plusnow.setHours(now.getHours()+12);
            if(new Date(task.time.fin)>new Date() && new Date(task.time.ini)<plusnow){
                items.push(
                    <path key={task.time.ini} d={this.getPath(task)} stroke={task.color} strokeWidth="10" fill="none"/>
                );
            }
        });

        return items;
    }

    getPath(task){
        this.factory=new FactoryPaths(new Date(task.time.ini), new Date(task.time.fin), this.center, this.radius, false);
    
        return this.factory.getD("hours");
    }

    render() {
        return (
            <g>
                {this.loadPaths()}
            </g>
        );
    }
}

export default HourRing;
