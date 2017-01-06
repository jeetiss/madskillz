import { nowTime } from '../utils/time'

export const timeMiddleware = ({ getState, dispatch }) => {
  const step = () => {
    const now = nowTime()
    const { time: lastTime } = getState()
    if (now - lastTime > 0) {
      dispatch({ type: 'timeUpdate', time: now })
    }

    window.requestAnimationFrame(step)
  }

  window.requestAnimationFrame(step)

  return next => action => next(action)
}
