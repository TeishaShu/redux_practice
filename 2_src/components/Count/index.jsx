import React, { Component } from 'react'
import store from '../../redux/store'

export default class Count extends Component {
  //自己的 state，需要共用的 state 才放 store
  state = { name: 'aaa' }

  // componentDidMount() {
  //   store.subscribe(() => {
  //     //訂閱，只要 store 狀態一改變就會觸發
  //     this.store({})
  //   })
  // }


  increment = () => {
    const { value } = this.selectNumber
    store.dispatch({ type: 'increment', data: value * 1 })
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
        <p>Clicked: <span>{store.getState()}</span></p>
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
