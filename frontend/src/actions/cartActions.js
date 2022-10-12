import Axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";
const Cookies = require('js-cookie');


// Add food into the Cart
const addToCart = (foodId, quantity) => async (dispatch, getState) => {
    try {
        const { data } = await Axios.get("/api/foods/" + foodId);
        dispatch({
            type: CART_ADD_ITEM, payload: {
                food: data._id,
                title: data.title,
                imgSource: data.imgSource,
                price: data.price,
                countInTheKitchen: data.countInTheKitchen,
                quantity
            }
        }); 

        // Nếu muốn lưu với Cookie (Server Side)
        const { cart: { cartItems } } = getState();
        Cookies.set("cartItems", JSON.stringify(cartItems));

        // Nếu muốn lưu với Local Storage (Client Side)
        // localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
    } catch (error) {
        
    }
}

// Remove product from cart
const removeFromCart = (foodId) => (dispatch, getState) => {
    dispatch({type: CART_REMOVE_ITEM, payload: foodId});

    // Nếu muốn lưu với Cookie (Server Side)
    const { cart: { cartItems } } = getState();
    Cookies.set("cartItems", JSON.stringify(cartItems));

    // Nếu muốn lưu với Local Storage (Client Side)
    // localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}


// Save shipping
// const saveShipping = (data) => (dispatch) => {
//     dispatch({ type: CART_SAVE_SHIPPING, payload: data });
// }

// // Save payment
// const savePayment = (data) => (dispatch) => {
//     dispatch({ type: CART_SAVE_PAYMENT, payload: data });
// }

export { addToCart, removeFromCart }