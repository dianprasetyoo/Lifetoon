import * as types from '../types'
import Axios from 'axios';

export const handleGetSlides = (token) => ({
    type: types.GET_SLIDE,
    payload: Axios({
        method : "GET",
        url : "http://192.168.0.60:5000/api/v3/comics/slide",
        headers : {
            Authorization : token
        }
    })
});

export const handleGetAllComics = (id, token) => ({
    type: types.GET_ALL_COMIC,
    payload: Axios({
        method : "GET",
        url : `http://192.168.0.60:5000/api/v3/allComics/users/${id}`,
        headers : {
            Authorization : token
        }
    })
});


// export const handleUploadImageCustomer = (param) => ({
//     type: types.UPLOAD_IMAGE_CUSTOMER,
//     payload: Axios({
//         method : "POST",
//         url : `https://us-central1-hotelpedia-d7bd2.cloudfunctions.net/uploadFile`,
//         headers : {
//             Authorization : param.token
//         },
//         data : param.data
//     })
// });

// export const handleEditCustomer = (name, identityNumber, phoneNumber, id, image, token) => ({
//     type: types.EDIT_CUSTOMER,
//     payload: Axios({
//         method : "PATCH",
//         url : `http://hotelpedias-rest-api.herokuapp.com/api/v2/customers/${id}`,
//         headers : {
//             Authorization : token
//         },
//         data : {
//             name: name,
//             identity_number : identityNumber,
//             phone_number : phoneNumber,
//             image: image
//         },
//     })
// });

// export const handleDeleteCustomer = (id, token) => ({
//     type: types.DELETE_CUSTOMER,
//     payload: Axios({
//         method : "DELETE",
//         url : `http://hotelpedias-rest-api.herokuapp.com/api/v2/customers/${id}`,
//         headers : {
//             Authorization : token
//         },
//     })
// });

