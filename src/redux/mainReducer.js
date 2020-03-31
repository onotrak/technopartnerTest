import {
  DATA_SUCCESS,
  DATA_RESET,
} from './types';
import {mainInitialState as initialState} from './initialState';

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_RESET:
      return {
        ...state,
        dataSuccess: false,
      };
    case DATA_SUCCESS:
      return {
        ...state,
        dataMain: action.response.payload,
        dataSuccess: true,
      };
    default:
      return state;
  }
};

export default mainReducer;
