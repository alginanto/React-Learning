import React from "react";
import './square.css';

export class Square extends React.Component {

    render() {
      return (
        <button 
        className="square" 
        onClick={()=>{this.props.onClick()}}
        >
          {this.props.value}
        </button>
      );
    }
  }