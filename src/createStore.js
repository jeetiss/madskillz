import { createStore as cs, applyMiddleware } from 'redux'
import { createTimeMiddleware } from './middlewares/createTimeMiddleware'
import { timeReducer } from './reducers/time'
import { uniTime } from './utils/time'

const timeX = uniTime(new Date('2016-11-18T16:24:00'))
const timer = createTimeMiddleware(timeX)

function createStore () {
  return cs(
    timeReducer(timeX),
    [],
    applyMiddleware(timer)
  )
}

export default createStore
