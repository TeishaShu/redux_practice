// 創 reducer
export default function countReducer(preState, action) {
  const { type, data } = action

  // reducer 需要返回值，因此用 return
  switch (type) {
    case 'increment':
      console.log('@')
      return preState + data * 1
    case 'decrement':
      return preState - data * 1
    case 'incrementIfOdd':
      return (preState % 2 !== 0) ? preState + 1 : preState
    case 'incrementAsync':
      setTimeout(() => {
        return preState + data * 1
      }, 1000)
      break
    default:
      return 0
  }
}