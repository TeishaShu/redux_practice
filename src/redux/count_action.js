import { INCREMENT, DECREMENT } from './constant'

// function createIncrement(data) {
//   return { type: 'increment', data }
// }
// 上面簡寫
export const incrementAction = data => ({ type: INCREMENT, data })
export const decrementAction = data => ({ type: DECREMENT, data })