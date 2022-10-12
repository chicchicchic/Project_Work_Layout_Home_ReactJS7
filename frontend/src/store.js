import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import { foodDetailsReducer, foodListReducer } from './reducers/foodReducers';
const Cookies = require('js-cookie');

const initialState = { 
    cart: { cartItems: Cookies.get('cartItems')? JSON.parse(Cookies.get('cartItems')) : []},
 };
// const initialState = { 
//     cart: { cartItems: Cookies.get('cartItems')? JSON.parse(Cookies.get('cartItems')) : [], shipping: {}, payment: {} },
//     userSignin: { userInfo: Cookies.get('userInfo')? JSON.parse(Cookies.get('userInfo')) : null },
//  };

const reducer = combineReducers({
    foodList: foodListReducer,
    foodDetails: foodDetailsReducer,
    cart: cartReducer,
    // userSignin: userSigninReducer,
    // userRegister: userRegisterReducer,
    // productSave: productSaveReducer,
    // productDelete: productDeleteReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;