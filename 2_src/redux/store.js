// createStore 一個 redux 中的方法，用於創建 store
import { createStore } from 'redux'

// store 會使用reducer
import countReducer from './count_reducer'

// 輸出 store
export default createStore(countReducer)