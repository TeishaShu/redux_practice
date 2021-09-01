// 創 reducer
const initState = 0
export default function countReducer(preState = initState, action) {
  const { type, data } = action

  // reducer 需要返回值，因此用 return
  switch (type) {
    case 'increment':
      return preState + data * 1
    case 'decrement':
      return preState - data * 1

    default:
      return initState
  }
}