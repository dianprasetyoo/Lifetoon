import * as types from './../types'

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  login: []
};

export default function reducerLogin(state = initialState, action) {
  switch (action.type) {
    case `${types.LOGIN}_PENDING`:
      return {
        ...state,
        isLoading: true
      };

    case `${types.LOGIN}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        login: action.payload.data
      };

    case `${types.LOGIN}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      return state;
  }
}