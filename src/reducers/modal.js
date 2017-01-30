export const modalReducer = (state, { type }) => {
  if (type === 'SHOW_MODAL') {
    return Object.assign({}, state, { isActive: !state.isActive })
  }

  if (state == null) {
    return { isActive: false }
  }

  return state
}
