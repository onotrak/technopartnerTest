import {
  GET_MAIN_DATA,
  MAIN_DATA_FAILED,
} from './types';
import api from '../services/apiProvider';

export const getMainData = params => {
  return dispatch => {
    api
      .getMainData(params)
      .then(response => {
        console.log(response);
        dispatch({type: GET_MAIN_DATA, response});
      })
      .catch(error => {
        const response = error.response.data;
        console.log(response, 'error');
          dispatch({type: MAIN_DATA_FAILED, response});
      });
  };
};