import * as types from '../types'
import Axios from 'axios';

export const handleGetDetailEpisodes = (id_episode, token) => ({
    type: types.GET_DETAIL_EPISODE,
    payload: Axios({
        method : "GET",
        url : `http://192.168.0.60:5000/api/v3/detail_episodes/${id_episode}`,
        headers : {
            Authorization : token
        }
    })
});
