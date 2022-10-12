import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";


function cartReducer(state={ cartItems:[], shipping:{}, payment:{} }, action) {

    switch(action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const food = state.cartItems.find(x=> x.food === item.food);
            if(food){
                return { cartItems: 
                    state.cartItems.map(x=> x.food === food.food ? item : x) 
                };
            }
            return { cartItems: [...state.cartItems, item] };
        case CART_REMOVE_ITEM:
            return{cartItems: state.cartItems.filter(x => x.food !== action.payload)}
        default:
            return state
    }
}

export { cartReducer }