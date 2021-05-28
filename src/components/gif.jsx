import React, { Component } from 'react';

class Gif extends Component {

  handleClick = () => {
    this.props.handleDisplay(this.props.id)
  }

  render() {
    const src = `https://media1.giphy.com/media/${this.props.id}/giphy.gif?cid=ecf05e47701040536bebedc31bb6df06369e170997904307&rid=giphy.gif&ct=g`;
    return (
      <img src={src} alt="gif" onClick={this.handleClick}/>
    );
  }
}

export default Gif;
