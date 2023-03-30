import { ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/favActions.js'

const initialState = {
  favs: [],
}

export const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favs: [...state.favs, action.payload],
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
