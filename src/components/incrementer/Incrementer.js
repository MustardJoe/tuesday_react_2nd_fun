import React, { Component } from 'react';

class Incrementer extends Component {
  state = {
    count: 0,
    otherThing: 'happyDay',
  };

  incrementCount = () => {
    this.setState(state => {
      return { count: state.count + 1 };
    });
  }

  render() {
    const { count, otherThing } = this.state;

    return (
      <>
        <p>Current count: {count}</p>
        <p>{otherThing}</p>
        <button onClick={this.incrementCount}>Make go up by one!</button>
      </>
    );
  }
}

export default Incrementer;
