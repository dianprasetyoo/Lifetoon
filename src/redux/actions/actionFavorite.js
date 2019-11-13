import * as types from '../types'
import Axios from 'axios';

export const handleGetFavorites = (id, token) => ({
    type: types.GET_FAVORITE,
    payload: Axios({
        method : "GET",
        url : `http://192.168.0.60:5000/api/v3/favorites/users/${id}`,
        headers : {
            Authorization : token
        }
    })
});

export const handleAddFavorites = (id_user, id_comic, token) => ({
    type: types.ADD_FAVORITE,
    payload: Axios({
        method : "POST",
        url : `http://192.168.0.60:5000/api/v3/favorites/users/${id_user}/comics/${id_comic}`,
        headers : {
            Authorization : token
        },
        data : {
            isFavorite: 1
        },
    })
});

export const handleDeleteFavorites = (id_favorite, token) => ({
    type: types.DELETE_FAVORITE,
    payload: Axios({
        method : "DELETE",
        url : `http://192.168.0.60:5000/api/v3/favorites/${id_favorite}`,
        headers : {
            Authorization : token
        },
    })
});