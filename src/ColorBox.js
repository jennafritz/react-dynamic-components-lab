import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    let newOpacity = this.props.opacity - 0.1
    console.log(newOpacity)
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.props.opacity >= 0.2 ? (<ColorBox opacity = {newOpacity}/>) : null}
      </div>
    )
  }

}

