import React, { Component } from 'react';

class RandomColor extends Component {
  state = {
    color: '',
    trigger: new Date(),
    img: '',
  };

  randomColor = () => {
    const colors = ['tomato', 'dodgerblue', 'mediumspringgreen', 'gold', 'orange', 'purple', 'deeppink'];
    const n = Math.floor(Math.random() * colors.length);

    return colors[n];
  }

  // componentDidMount() {
  //   this.intervalId = setInterval(() => {
  //     this.setState({ color: this.randomColor(), trigger: new Date(), img: '' });
  //   }, 2000);
  // }

  componentDidMount() {
    this.setState({ color: this.randomColor(), trigger: new Date(), img: '' });
  }

  // componentDidUpdate(prevProps, prevState) {
  //   // console.log('hi');
  //   // if(prevState.color === this.state.color) {
  //   //   this.setState({ img: 'https://thumbs.gfycfgat.com/DemandingWelltodoGallinule-poster.jpg', color: null });
  //   // }
  // }

  componentWillUnmount() {
    this.intervalId && clearInterval(this.intervalId);
  }

  colorChange = () => {
    this.setState(
      { color: this.randomColor(), img: null });
  };
  

  render() {
    const { color, img } = this.state;
    const styles = {
      background: img ? `center / contain url(${img})` : color,
      width: '50em',
      height: '50em',
    };

    return (
      <>
        <button onClick={this.colorChange}>Change color of color block</button>
        <div style={styles}></div>
      </>
    );
  }
}

export default RandomColor;
