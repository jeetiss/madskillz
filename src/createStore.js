import { createStore as cs, applyMiddleware, combineReducers } from 'redux'
import { timeMiddleware } from './middlewares/timeMiddleware'
import { timeReducer } from './reducers/time'
import { modalReducer } from './reducers/modal'
import { uniTime, nowTime } from './utils/time'

const timeX = uniTime(new Date('2016-11-18T16:24:00'))

const reducer = combineReducers({
  time: timeReducer,
  modal: modalReducer
})

function createStore () {
  return cs(
    reducer,
    { time: { now: nowTime(), from: timeX } },
    applyMiddleware(timeMiddleware)
  )
}

export default createStore
