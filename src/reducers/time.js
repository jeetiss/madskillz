export const timeReducer = (state, { type, time }) => {
  if (type === 'timeUpdate') {
    return Object.assign({}, state, { time })
  }

  return state
}
