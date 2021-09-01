import { INCREMENT, DECREMENT } from './constant'

// function incrementAction(data) {
//   return { type: 'increment', data }
// }
// 上面簡寫
export const incrementAction = data => ({ type: INCREMENT, data })
export const decrementAction = data => ({ type: DECREMENT, data })

// 返回函式的是非同步
// 需要安裝 redux-thunk
export const incrementAsyncAction = (data, time) => {
  // 下面 store 自動幫忙傳 dispatch
  return (dispatch) => {
    setTimeout(() => {
      dispatch(incrementAction(data))
    }, time)
  }
}