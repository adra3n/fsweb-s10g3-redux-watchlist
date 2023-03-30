export const NEXT_MOVIE = 'NEXT_MOVIE'

export const nextMovie = (sira) => {
  return { type: NEXT_MOVIE, payload: sira }
}
