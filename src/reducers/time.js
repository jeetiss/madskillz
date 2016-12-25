import { splitTime, exp, nowTime } from '../utils/time'

export const timeReducer = timeFrom => (state, { type, time }) => {
  if (type === 'timeUpdate') {
    const value = splitTime(time)
    const text = exp(value)
    return { value, time, text }
  }

  const dt = nowTime() - timeFrom
  const value = splitTime(dt)
  const text = exp(value)
  return { value, time: dt, text }
}
