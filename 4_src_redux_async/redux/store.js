import thunk from 'redux-thunk'

// 創建 store，並增加 createStore 創建、applyMiddleware 中間鍵2種方法
import { createStore, applyMiddleware } from 'redux'

// store 會使用reducer
import countReducer from './count_reducer'

// 輸出 store
export default createStore(countReducer, applyMiddleware(thunk))