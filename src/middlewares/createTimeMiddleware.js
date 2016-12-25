import { nowTime } from '../utils/time'

export const createTimeMiddleware = timeFrom => ({ getState, dispatch }) => {
  const step = () => {
    const { time } = getState()
    const now = nowTime() - timeFrom
    if (now - time > 0) {
      dispatch({ type: 'timeUpdate', time: now })
    }

    window.requestAnimationFrame(step)
  }

  window.requestAnimationFrame(step)

  return function (next) {
    return function (action) {
      return next(action)
    }
  }
}
