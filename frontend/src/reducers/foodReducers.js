import { FOOD_DETAILS_FAIL, FOOD_DETAILS_REQUEST, FOOD_DETAILS_SUCCESS, FOOD_LIST_FAIL, FOOD_LIST_REQUEST, FOOD_LIST_SUCCESS } from "../constants/foodConstants";


// All Food List
function foodListReducer(state = { foods: [] }, action) {
    switch (action.type) {
        case FOOD_LIST_REQUEST:
            return { loading: true, foods: [] };
        case FOOD_LIST_SUCCESS:
            return { loading: false, foods: action.payload };
        case FOOD_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

// Details of food
function foodDetailsReducer(state = { food: {} }, action) {
    switch (action.type) {
        case FOOD_DETAILS_REQUEST:
            return { loading: true };
        case FOOD_DETAILS_SUCCESS:
            return { loading: false, food: action.payload };
        case FOOD_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}


// function productDeleteReducer(state = { product: {} }, action) {
//     switch (action.type) {
//         case FOOD_DELETE_REQUEST:
//             return { loading: true };
//         case FOOD_DELETE_SUCCESS:
//             return { loading: false, product: action.payload, success: true };
//         case FOOD_DELETE_FAIL:
//             return { loading: false, error: action.payload };
//         default:
//             return state;
//     }
// }


// function productSaveReducer(state = { product: {} }, action) {
//     switch (action.type) {
//         case FOOD_SAVE_REQUEST:
//             return { loading: true };
//         case FOOD_SAVE_SUCCESS:
//             return { loading: false, success: true, product: action.payload };
//         case FOOD_SAVE_FAIL:
//             return { loading: false, error: action.payload };
//         default:
//             return state;
//     }
// }

export { foodListReducer, foodDetailsReducer }