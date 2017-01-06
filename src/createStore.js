import { createStore as cs, applyMiddleware } from 'redux'
import { timeMiddleware } from './middlewares/timeMiddleware'
import { timeReducer } from './reducers/time'
import { uniTime, nowTime } from './utils/time'

const timeX = uniTime(new Date('2016-11-18T16:24:00'))

function createStore () {
  return cs(
    timeReducer,
    { from: timeX, time: nowTime() },
    applyMiddleware(timeMiddleware)
  )
}

export default createStore
