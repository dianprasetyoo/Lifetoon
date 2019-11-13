import * as types from './../types'

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  slides: [],
  detail_episodes:[]
};

export default function reducerDetailEpisode(state = initialState, action) {
  switch (action.type) {
    //GET EPISODE
    case `${types.GET_DETAIL_EPISODE}_PENDING`:
      return {
        ...state,
        isLoading: true
      };

    case `${types.GET_DETAIL_EPISODE}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        detail_episodes: action.payload.data
      };

    case `${types.GET_DETAIL_EPISODE}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true
      };

    default:
      return state;
  }
}