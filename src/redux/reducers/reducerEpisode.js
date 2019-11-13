import * as types from './../types'

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  slides: [],
  episodes:[]
};

export default function reducerEpisode(state = initialState, action) {
  switch (action.type) {
    //GET EPISODE
    case `${types.GET_EPISODE}_PENDING`:
      return {
        ...state,
        isLoading: true
      };

    case `${types.GET_EPISODE}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        episodes: action.payload.data
      };

    case `${types.GET_EPISODE}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true
      };

    default:
      return state;
  }
}