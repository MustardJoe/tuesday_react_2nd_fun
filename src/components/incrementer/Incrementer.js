import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

  decrementCount = () => {
    this.setState(state => {
      return { count: state.count - 1 };
    });
  }

  render() {
    const { count, otherThing } = this.state;
    const { name } = this.props;

    return (
      <>
        <p>Current count: {count}</p>
        <p>{otherThing}, {name}</p>
        <button onClick={this.incrementCount}>Make go up by one!</button>
        <button onClick={this.decrementCount}>Decrement!</button>
      </>
    );
  }
}

Incrementer.propTypes = {
  name: PropTypes.string,
};

export default Incrementer;
