import React, { Component } from 'react'
import store from '../../redux/store'
import { incrementAction, decrementAction, incrementAsyncAction } from '../../redux/count_action'

export default class Count extends Component {
  // 可以有自己的狀態，需要共享再拿到store
  state = { eat: 'all fruit' }

  // 用生命週期檢測 store 中的值變化時觸發 render
  // 這個要寫很多次，可以換成在 src/index.js 改寫
  componentDidMount() {
    store.subscribe(() => {
      // 更新組件 Count 狀態(空物件==>什麼也不更新)
      this.setState({})
    })
  }

  increment = () => {
    const { value } = this.selectNumber
    store.dispatch(incrementAction(value * 1))
  }
  decrement = () => {
    const { value } = this.selectNumber
    store.dispatch(decrementAction(value * 1))
  }
  incrementIfOdd = () => {
    const { value } = this.selectNumber
    const count = store.getState()
    if (count % 2 !== 0) {
      store.dispatch(incrementAction(value * 1))
    }
  }
  incrementAsync = () => {
    const { value } = this.selectNumber
    // setTimeout(() => {
    store.dispatch(incrementAsyncAction(value * 1, 500))
    // }, 1000)
  }

  render() {
    return (
      <div>
        <p>Clicked: <span>{store.getState('count')}</span></p>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select> &nbsp;
        <button onClick={this.increment}>+</button> &nbsp;
        <button onClick={this.decrement}>-</button> &nbsp;
        <button onClick={this.incrementIfOdd}>Increment if odd</button> &nbsp;
        <button onClick={this.incrementAsync}>Increment async</button>
      </div >
    )
  }
}
