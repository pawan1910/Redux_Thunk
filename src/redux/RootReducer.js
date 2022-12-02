import {combineReducers} from 'redux';
import userReducer from './userDetails/userReducer';
import userAPI_Reducer from './userApi/userApi_Reducer';

const rootReducer = combineReducers({
    userDetails:userReducer,
    userData : userAPI_Reducer
})

export default rootReducer;
