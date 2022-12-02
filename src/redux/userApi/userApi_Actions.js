import {
  USER_API_FETCH,
  USER_API_SUCCESS,
  USER_API_FAILURE,
} from "./userApi_Types";

export const fetchUsers = (data) => {
  return {
    type: USER_API_FETCH,
    payload: data,
  };
};

export const Users_Success = (data) => {
  return {
    type: USER_API_SUCCESS,
    payload: data,
  };
};

export const users_Failure = (data) => {
  return {
    type: USER_API_FAILURE,
    payload: data,
  };
};
