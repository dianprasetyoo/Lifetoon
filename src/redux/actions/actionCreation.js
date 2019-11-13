import * as types from '../types'
import Axios from 'axios';

export const handleGetCreations = (id, token) => ({
    type: types.GET_CREATION,
    payload: Axios({
        method : "GET",
        url : `http://192.168.0.60:5000/api/v3/creation/users/${id}`,
        headers : {
            Authorization : token
        }
    })
});

