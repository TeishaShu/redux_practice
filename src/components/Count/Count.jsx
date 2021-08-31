import React, { Component } from 'react'

export default class Count extends Component {
  state = { count: 0 }
  increment = () => {
    const { value } = this.selectNumber
    const { count } = this.state
    this.setState({ count: count + value * 1 })
  }
  decrement = () => {
    const { value } = this.selectNumber
    const { count } = this.state
    this.setState({ count: count - value * 1 })
  }
  incrementIfOdd = () => {
    const { count } = this.state
    const temNum = (count % 2 !== 0) ? count + 1 : count
    this.setState({ count: temNum })
  }
  incrementAsync = () => {
    const { value } = this.selectNumber
    const { count } = this.state
    setTimeout(() => {
      this.setState({ count: count + value * 1 })
    }, 1000)
  }

  render() {
    return (
      <div>
        <p>Clicked: <span>{this.state.count}</span></p>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select> &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>Increment if odd</button>&nbsp;
        <button onClick={this.incrementAsync}>Increment async</button>
      </div>
    )
  }
}
