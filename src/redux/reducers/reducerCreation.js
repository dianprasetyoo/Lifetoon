import * as types from './../types'

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  creations:[],
};

export default function reducerComic(state = initialState, action) {
  switch (action.type) {
       //GET CREATION
    case `${types.GET_CREATION}_PENDING`:
      return {
        ...state,
        isLoading: true
      };

    case `${types.GET_CREATION}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        creations: action.payload.data
      };

    case `${types.GET_CREATION}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true
      };

    default:
      return state;
  }
}