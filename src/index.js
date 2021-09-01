import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'

ReactDOM.render(<App />, document.getElementById('root'))

// subscribe (訂閱)，只要 redux 狀態變化使用 render。(render整個複製一份，不然頁面顯示不了)
// 整個渲染，因為有 diff 會偵測 dom 哪些改了，所以效能也不會到很差。
store.subscribe(() => {
  ReactDOM.render(<App />, document.getElementById('root'))
})
