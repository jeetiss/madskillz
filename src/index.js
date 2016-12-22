// import 'react-hot-loader/patch'
// import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

const uniTime = (time) => Math.trunc(time / 1000);
const nowTime = () => uniTime(Date.now());

const timeX = uniTime(new Date('2016-11-18T16:24:00')); // utc time
// const timeX = uniTime(new Date('2016-12-21T21:09:00')); // utc time
const val = ['days', 'hours', 'minutes', 'seconds']

const splitTime = time => {
  return [[1000, 86400], [24, 3600], [60, 60], [60, 1]].map(
    function ([mod, gap]) {
      return Math.trunc(time / gap) % mod
    }
  ).reduce((store, next, index, arr) => {
    if (next !== 0 || index === arr.length - 1) {
      return Object.assign(store, {[val[index]]: next})
    }
      return store
  }, {})
}

const arr = {
  days: ['дней', 'день', 'дня', 'дня', 'дня'],
  hours: ['часов', 'час', 'часа', 'часа', 'часа'],
  minutes: ['минут', 'минуту', 'минуты', 'минуты', 'минуты'],
  seconds: ['секунд', 'секунду', 'секунды', 'секунды', 'секунды'],
}

const exp = (splitTime) => Object.keys(arr).map(
  (key) => {
    const last = splitTime[key] % 10
    const mapa = arr[key]
    return { [key]: mapa[last] ? mapa[last] : mapa[0] }
  }
).reduce((store, next) => Object.assign(store, next), {})

function reducer (state, { type, time }) {
  if (type == 'timeUpdate') {
    const value = splitTime(time);
    const text = exp(value);
    return { value, time, text }
  } 
  
  const dt = nowTime() - timeX
  const value = splitTime(dt)
  const text = exp(value);
  return { value, time: dt, text }
} 

const timer = ({ getState, dispatch }) => {
  const step = () => {
    const { time } = getState();
    const now = nowTime() - timeX;
    if (now - time > 0) {
      dispatch({ type: 'timeUpdate', time: now });
    }

    requestAnimationFrame(step);  
  }

  requestAnimationFrame(step);
  
  return function (next) { 
    return function (action) {
      return next(action)
    }
  }
}

const store = createStore(
  reducer,
  [],
  applyMiddleware(timer)
)

// store.subscribe(() => console.log(store.getState()));

const mountPoint = document.getElementById('root')



// if (NODE_ENV === 'development') {
//   const getApp = App => (
//     <AppContainer>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </AppContainer>
//   )


//   ReactDOM.render(getApp(App), mountPoint)

//   if (module.hot) {
//     module.hot.accept('./App', () => {
//       const NewApp = require('./App').default

//       ReactDOM.render(getApp(NewApp), mountPoint)
//     })
//   }
// } else {
  ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    mountPoint
  )
// }