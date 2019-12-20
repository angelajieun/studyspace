import React, { Component } from 'react';

class Counter extends Component {
  constructor(props){
    super(props);
    this.state = { // 무조건 객체 형태이여야 한다.
      counter : 0 ,
      fixed: 1,
      updateMe: {
        toggleMe: false,
        dontChangeMe: 1
      }
    }
  }
  handleIncrease = () => {
    this.setState({ 
      counter: this.state.counter + 1,
    });
  }
  handleDecrease = () => {
    this.setState({
      counter : this.state.counter - 1,
    });
  }
  handleToggle = () => {
    this.setState({
      updateMe: {
        ...this.state.updateMe,
        toggleMe: !this.state.updateMe.toggleMe
      }
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
       <button onClick={this.handleIncrease}>+1</button>
       <button onClick={this.handleDecrease}>-1</button>
     </div>
    )
  }
}

export default Counter;