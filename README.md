## 2.mini 版
  (1). 使資料狀態加入 store，不是只在自己的組件中
  (2). store.js：
       引入 store 中的 createStore 創建一個 store 
  (3). count_reducer.js:
        1). reducer 本質是函數，接收 preState、action，加工後返回
        2). reducer 2種作用：初始化狀態、加工狀態
        3). reducer 第一次使用 store 自動觸發，
            (preState 是 undefined，action={type:'@@REDUX/INIT'})
  (4). redux 只管理狀態不管渲染。
        所以在 src/index.js 中增加 store.subscribe 的方法

## 3.完整版
  文件增加 count_action.js 、constant.js(管理程式讓文字錯誤率降低)