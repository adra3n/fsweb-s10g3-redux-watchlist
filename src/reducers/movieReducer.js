import { movies } from '../movies'
import { NEXT_MOVIE, FIRST_MOVIE, PREV_MOVIE } from '../actions/movieActions.js'

const initialState = {
  movies: movies,
  sira: 0,
}

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_MOVIE:
      if (action.payload < movies.length - 1) {
        return {
          ...state,
          sira: action.payload + 1,
        }
      } else {
        return { ...state, sira: 0 }
      }

    case PREV_MOVIE:
      if (action.payload > 0) {
        return {
          ...state,
          sira: action.payload - 1,
        }
      }

    case FIRST_MOVIE:
      return { ...state, sira: 0 }

    default:
      return state
  }
}
