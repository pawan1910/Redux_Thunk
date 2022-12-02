import axios from "axios"
import { fetchUsers, users_Failure } from "../userApi/userApi_Actions"

export const userTitle = () => (dispatch) => {
    dispatch(fetchUsers());
    axios.get('https://jsonplaceholder.typicode.com/users').then(res =>{
        dispatch(Users_Success(res.data))
    }).catch(err => {
        dispatch(users_Failure())
    })
}