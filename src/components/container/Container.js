import React, { Component } from 'react';
import Incrementer from '../incrementer/Incrementer';
import Header from '../header/Header';
import RandomColor from '../randomcolor/RandomColor';
import ColorPicker from '../colorpicker/ColorPicker';

class Container extends Component {
  state = {
    name: 'Jorn Jor Jo Jorno'
  };

  render() {
    return (
      <>
        <Header name={this.state.name} />
        <Incrementer name={this.state.name} />
        <ColorPicker />
        <RandomColor />
      </>
    );
  }
}

export default Container;
