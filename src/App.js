import React, { Component } from 'react';
import Clock from './Components/Clock';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                </header>
                <Clock/>
            </div>
        );
    }
}


export default App;