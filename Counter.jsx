import React from 'react';

const Counter = React.createClass({
    getInitialState() {
        return {
            count: this.props.initialCount
        };
    },

    render() {
        return (
            <div>
                <h2>Count: {this.state.count}</h2>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        );
    },

    handleClick() {
        this.setState({
            count: this.state.count + 1
        });
    }
});

export default Counter;