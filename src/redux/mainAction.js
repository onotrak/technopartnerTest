import {
  //LOGIN
  REQ_LOGIN_SUCCESS,
  REQ_LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,

  //HOME
  HOME_DATA,
  HOME_DATA_ERROR,

  //MENU
  MENU_DATA,
  MENU_DATA_ERROR,

} from './types';
import api from '../services/apiProvider';

//LOGIN
export const postReqLogin = params => {
  return dispatch => {
    api
      .postReqLogin(params)
      .then(response => {
        dispatch({type: REQ_LOGIN_SUCCESS, response});
      })
      .catch(error => {
        const response = error.response.data;
        dispatch({type: REQ_LOGIN_ERROR, response});
      });
  };
};
export const postLogin = (params, headers) => {
  return dispatch => {
    api
      .postLogin(params, headers)
      .then(response => {
        if(response.status === 'success'){
          dispatch({type: LOGIN_SUCCESS, response});
        }else{
          dispatch({type: LOGIN_ERROR, response});
        }
      })
      .catch(error => {
        const response = error.response.data;
        dispatch({type: LOGIN_ERROR, response});
      });
  };
};

//HOME
export const postHome = (params, headers) => {
  return dispatch => {
    api
      .postHome(params, headers)
      .then(response => {
        console.log('onotrak response home',response);
        dispatch({type: HOME_DATA, response});
      })
      .catch(error => {
        const response = error.response.data;
        console.log(response, 'error');
        dispatch({type: HOME_DATA_ERROR, response});
      });
  };
};

//MENU
export const getMenu = params => {
  return dispatch => {
    api
      .getMenu(params)
      .then(response => {
        console.log(response);
        dispatch({type: MENU_DATA, response});
      })
      .catch(error => {
        const response = error.response.data;
        console.log(response, 'error');
        dispatch({type: MENU_DATA_ERROR, response});
      });
  };
};