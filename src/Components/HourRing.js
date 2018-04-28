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
        this.state={
            tasks:this.props.tasks,
            current:null,
            its:[]
        };
        
        this.markers();
    }
    markers(){
        let ts=this.state.tasks;
        let now=new Date();
        for (let t of ts){
            const ini=new Date(t.ini);
            const fin=new Date(t.fin);
           
            if(ini<now && fin<now){
                t.pass=true;
            }

            if(ini>now && now<fin){
                this.setState({current:t});
                break;
            }
        }

        this.setState({tasks:ts});
    }

    loadPaths(){
        const items=[];
        this.state.tasks.forEach(task => {
            let now =new Date();
            let plusnow=new Date();
            plusnow.setHours(now.getHours()+12);
            if(new Date(task.time.fin)>now && new Date(task.time.ini)<plusnow && !task.pass){
                items.push(
                    <path key={task.time.ini} d={this.getPath(task)} stroke={task.color} strokeWidth="10" fill="none"/>
                );
            }
        });
        this.setState({its:items});
    }

    getPath(task){
        if(task===this.state.current){
            this.factory=new FactoryPaths(new Date(), new Date(task.time.fin), this.center, this.radius, false);
            console.log("as");
        }else{
            this.factory=new FactoryPaths(new Date(task.time.ini), new Date(task.time.fin), this.center, this.radius, false);
        }
        return this.factory.getD("hours");
    }

    componentDidMount() {
        this.intervalId = setInterval(this.loadPaths.bind(this), 100);
    }
    
    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <g>
                {this.state.items}
            </g>
        );
    }
}

export default HourRing;
