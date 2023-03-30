import { ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/favActions.js'

const initialState = {
  favs: [],
}

export const favReducer = (state = initialState, action) => {
  const check = (id) => {
    let check = true
    state.favs.forEach((fav) => {
      if (fav.id === id) {
        check = false
      }
    })
    return check
  }
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favs: check(action.payload.id)
          ? [...state.favs, action.payload]
          : state.favs,
      }

    case REMOVE_FAVORITE:
      return {
        ...state,
        favs: state.favs.filter((item) => action.payload !== item.id),
      }
    default:
      return state
  }
}
