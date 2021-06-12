import { SET_PRODUCTS, SET_CART } from "./actionTypes";

const INIT_STATE = {
    products: [],
    cart: {}
}

const index = (state = INIT_STATE, action) => {
    switch(action.type){
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
        case SET_CART:
            return {
                ...state,
                cart: action.payload
            };
        default: 
            return state;
    }

}

export default index;