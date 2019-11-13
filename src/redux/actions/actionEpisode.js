import * as types from '../types'
import Axios from 'axios';

export const handleGetEpisodes = (comics_id, token) => ({
    type: types.GET_EPISODE,
    payload: Axios({
        method : "GET",
        url : `http://192.168.0.60:5000/api/v3/episodes/${comics_id}`,
        headers : {
            Authorization : token
        }
    })
});
