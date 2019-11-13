import * as types from './../types'

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  slides: [],
  comics:[],
  creations:[],
};

export default function reducerComic(state = initialState, action) {
  switch (action.type) {
    //GET SLIDE
    case `${types.GET_SLIDE}_PENDING`:
      return {
        ...state,
        isLoading: true
      };

    case `${types.GET_SLIDE}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        slides: action.payload.data
      };

    case `${types.GET_SLIDE}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true
      };

      //GET ALL COMICS
    case `${types.GET_ALL_COMIC}_PENDING`:
      return {
        ...state,
        isLoading: true
      };

    case `${types.GET_ALL_COMIC}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        comics: action.payload.data
      };

    case `${types.GET_ALL_COMIC}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true
      };

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