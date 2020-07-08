import React from 'react';
import './reloj.css';

class Reloj extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.iteration(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    iteration() {
        this.setState({ date: new Date() });
    }
    render() {
        return (
            <div>
                <h2>Current Time {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Reloj;