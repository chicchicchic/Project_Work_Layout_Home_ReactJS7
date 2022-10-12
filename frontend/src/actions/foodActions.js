
import { FOOD_DETAILS_FAIL, FOOD_DETAILS_REQUEST, FOOD_DETAILS_SUCCESS, FOOD_LIST_FAIL, FOOD_LIST_REQUEST, FOOD_LIST_SUCCESS } from '../constants/foodConstants';

import axios from 'axios';
// import Axios from 'axios';

const listFoods = () => async (dispatch) => {
    try {
        dispatch({ type: FOOD_LIST_REQUEST });
        const { data } = await axios.get("/api/foods");
        dispatch({ type: FOOD_LIST_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: FOOD_LIST_FAIL, payload: error.message });
    }
}


// const saveProduct = (product) => async (dispatch, getState) => {
//     try {
//         dispatch({ type: PRODUCT_SAVE_REQUEST, payload: product });
//         const { userSignin:{ userInfo } } = getState(); 
//         if(!product._id) {
//             const { data } = await axios.post('/api/products', product, {
//                 headers: {
//                     'Authorization': 'Bearer' + userInfo.token,
//                 }
//             });
//             dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
//         } else {
//             const { data } = await axios.put('/api/products/' + product._id, product, {
//                 headers: {
//                     'Authorization': 'Bearer' + userInfo.token,
//                 }
//             });
//             dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
//         }

//     } catch (error) {
//         dispatch({ type: PRODUCT_SAVE_FAIL, payload: error.message });
//     }
// }



const detailsFood = (foodId) => async (dispatch) => {
    try {
        dispatch({ type: FOOD_DETAILS_REQUEST, payload: foodId });
        const { data } = await axios.get("/api/foods/" + foodId);
        dispatch({ type: FOOD_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FOOD_DETAILS_FAIL, payload: error.message });
    }
}

// const deleteProduct = (productId) => async (dispatch, getState) => {
//     try {
//         const { userSignin: { userInfo } } = getState();
//         dispatch({ type: PRODUCT_DELETE_REQUEST, payload: productId });
//         const { data } = await axios.delete("/api/products/" + productId, {
//             headers: {
//                 Authorization: 'Bearer' + userInfo.token
//             }
//         });
//         dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: data, success: true });
//     } catch (error) {
//         dispatch({ type: PRODUCT_DELETE_FAIL, payload: error.message });
//     }
// }

export { listFoods, detailsFood }