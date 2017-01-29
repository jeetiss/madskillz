export const timeReducer = (state, { type, time }) => {
  if (type === 'timeUpdate') {
    return Object.assign({}, state, { now: time })
  }

  if (state == null) {
    return 0
  }

  return state
}
