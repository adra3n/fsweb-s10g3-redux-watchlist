import { combineReducers } from 'redux'

import { movieReducer } from './movieReducer'
import { favReducer } from './favReducer'

export const reducers = combineReducers({
  movieReducer: movieReducer,
  favReducer: favReducer,
})
