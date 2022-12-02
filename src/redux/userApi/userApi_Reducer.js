import {
  USER_API_FETCH,
  USER_API_SUCCESS,
  USER_API_FAILURE,
} from "./userApi_Types";

const initialState = {
  isLoading: false,
  users: [],
  isFailure: false,
};

const userAPI_Reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case USER_API_FETCH:
      return {
        ...state,
        isLoading: true,
      };
    case USER_API_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: actions.payload,
      };
    case USER_API_FAILURE:
      return {
        ...state,
        isLoading: false,
        isFailure: true,
      };

    default:
      return state;
  }
};


export default userAPI_Reducer;