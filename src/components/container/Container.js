import React, { Component } from 'react';
import Incrementer from '../incrementer/Incrementer';
import Header from '../header/Header';

class Container extends Component {
  state = {
    name: 'Jorn Jor Jo Jorno'
  };

  render() {
    return (
      <>
        <Header name={this.state.name} />
        <Incrementer />
      </>
    );
  }
}

export default Container;
