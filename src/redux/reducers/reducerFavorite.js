import * as types from './../types'

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  favorites: [],
};

export default function reducerCustomer(state = initialState, action) {
  switch (action.type) {
    //GET Favorite
    case `${types.GET_FAVORITE}_PENDING`:
      return {
        ...state,
        isLoading: true
      };

    case `${types.GET_FAVORITE}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        favorites: action.payload.data
      };

    case `${types.GET_FAVORITE}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true
      };

      //ADD Favorite
    case `${types.ADD_FAVORITE}_PENDING`:
      return {
        ...state,
        isLoading: true
      };

    case `${types.ADD_FAVORITE}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
      };

    case `${types.ADD_FAVORITE}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true
      };

        //DELETE Favorite
    case `${types.DELETE_FAVORITE}_PENDING`:
      return {
        ...state,
        isLoading: true
      };

    case `${types.DELETE_FAVORITE}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
      };

    case `${types.DELETE_FAVORITE}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true
      };

    default:
      return state;
  }
}