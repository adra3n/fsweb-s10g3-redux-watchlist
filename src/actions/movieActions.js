export const NEXT_MOVIE = 'NEXT_MOVIE'
export const FIRST_MOVIE = 'FIRST_MOVIE'
export const PREV_MOVIE = 'PREV_MOVIE'

export const nextMovie = (sira) => {
  return { type: NEXT_MOVIE, payload: sira }
}
export const firstMovie = (sira) => {
  return { type: FIRST_MOVIE, payload: sira }
}
export const prevMovie = (sira) => {
  return { type: PREV_MOVIE, payload: sira }
}
