import { takeEvery, fork, put, all } from 'redux-saga/effects';
import { setCart, setProducts } from './actions';
import { commerce } from '../lib/commerce';

import { FETCH_CART, FETCH_PRODUCTS } from './actionTypes';

function * fetchCart(){
    try{
        const cartData = yield commerce.cart.retrieve();
        console.log('cartData', cartData);
        if(cartData){
            yield put(setCart(cartData));
        }
    } catch(e){}
}

function * fetchProducts(){
    try{
        const { data } = yield commerce.products.list();
        yield put(setProducts(data));
    } catch(e){}

  };

export function* fetchCartHanlder() {
    yield takeEvery(FETCH_CART, fetchCart);
}


export function* fetchProductsHanlder() {
    yield takeEvery(FETCH_PRODUCTS, fetchProducts);
}


export default function* rootSaga() {
    yield all([
        fork(fetchCartHanlder),
        fork(fetchProductsHanlder),
    ]);
}