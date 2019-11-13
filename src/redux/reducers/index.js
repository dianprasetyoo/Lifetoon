//combine all reducer
import { combineReducers } from 'redux';




import reducerLogin from './reducerLogin'
import reducerComic from './reducerComic'
import reducerFavorite from './reducerFavorite'
import reducerEpisode from './reducerEpisode'
import reducerDetailEpisode from './reducerDetailEpisode'
import reducerCreation from './reducerCreation'

const appReducer = combineReducers({
  login: reducerLogin,
  comics: reducerComic,
  slides: reducerComic,
  favorites: reducerFavorite,
  episodes: reducerEpisode,
  detail_episodes : reducerDetailEpisode,
  creations : reducerCreation
})

export default appReducer