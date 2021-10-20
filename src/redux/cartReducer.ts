import {AppStateType, InferActionTypes} from "./store";
import {ThunkAction} from "redux-thunk";
import {Product} from "../types/types";
import { Dispatch } from "react";


const PRODUCT_ADDED = 'organic/cart/PRODUCT_ADDED';
const PRODUCT_DELETED = 'organic/cart/PRODUCT_DELETED';

const TOTAL_PRODUCTS_CHANGED = 'organic/cart/TOTAL_PRODUCTS_CHANGED';
const TOTAL_PRICE_CHANGED = 'organic/cart/TOTAL_PRICE_CHANGED';

let initialState = {
    totalProducts: 0,
    totalPrice: 0,

    products: [] as Product[],
}

const cartReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case PRODUCT_ADDED:
            return _productAdded(state, action.product);
        case PRODUCT_DELETED:
            return _productDeleted(state, action.productID);
        case TOTAL_PRODUCTS_CHANGED:
            return _totalProductsChanged(state, action.amount);
        case TOTAL_PRICE_CHANGED:
            return _totalPriceChanged(state, action.totalPrice);
        default:
            return state;
    }
}

const _productAdded = (state: InitialStateType, product: Product): InitialStateType => {

    // let newProducts = state.products.map(p => {
    //     if (p.product.id === product.product.id) {
    //         let temp: Product = {
    //             product: p.product,
    //             amount: p.amount + 1,
    //         }
    //         return  temp;
    //     }
    //     return p;
    // })

    const newProducts = [...state.products]
    const index = newProducts.findIndex(p => p.product.id === product.product.id);

    if (index === -1) {
        return {
            ...state,
            products: [...newProducts, product]
        }
    } else {
        newProducts[index].amount += 1;

        return {
            ...state,
            products: newProducts
        }
    }
}

const _productDeleted = (state: InitialStateType, productID: string): InitialStateType => {

    const newProducts = [...state.products]
    const index = newProducts.findIndex(p => p.product.id === productID);

    if (newProducts[index].amount === 1) {
        return {
            ...state,
            products: [...state.products].filter(p => p.product.id !== productID),
        }
    } else {

        newProducts[index].amount -= 1;
        return {
            ...state,
            products: newProducts
        }
    }
}

const _totalProductsChanged = (state: InitialStateType, amount: number): InitialStateType => {
    return {
        ...state,
        totalProducts: amount,
    }
}

const _totalPriceChanged = (state: InitialStateType, totalPrice: number): InitialStateType => {
    return {
        ...state,
        totalPrice: totalPrice,
    }
}

const cartActions = {
    productAdded: (product: Product) => ({type: PRODUCT_ADDED, product} as const),
    productDeleted: (productID: string) => ({type: PRODUCT_DELETED, productID} as const),
    totalProductsChanged: (amount: number) => ({type: TOTAL_PRODUCTS_CHANGED, amount} as const),
    totalPriceChanged: (totalPrice: number) => ({type: TOTAL_PRICE_CHANGED, totalPrice} as const),
}

export const addProduct = (product: Product): ThunkType => async (dispatch, getState) => {
    dispatch(cartActions.productAdded(product))
    _updateTotals(getState().cart, dispatch)
    // let newTotalPrice = 0;
    // let newTotalProducts = 0;
    // getState().cart.products.forEach(p => {
    //     newTotalPrice = newTotalPrice + (p.product.price * p.amount);
    //     newTotalProducts += p.amount;
    // })
    //
    // dispatch(cartActions.totalPriceChanged(newTotalPrice))
    // dispatch(cartActions.totalProductsChanged(newTotalProducts));
}

export const deleteProduct = (productID: string): ThunkType => async (dispatch, getState) => {

    dispatch(cartActions.productDeleted(productID))

    _updateTotals(getState().cart, dispatch)
}

const _updateTotals = (state: InitialStateType, dispatch: Dispatch<ActionTypes>) => {
    let newTotalPrice = 0;
    let newTotalProducts = 0;
    state.products.forEach(p => {
        newTotalPrice = newTotalPrice + (p.product.price * p.amount);
        newTotalProducts += p.amount;
    })

    dispatch(cartActions.totalPriceChanged(newTotalPrice))
    dispatch(cartActions.totalProductsChanged(newTotalProducts));
}

export type InitialStateType = typeof initialState;
type ActionTypes = InferActionTypes<typeof cartActions>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;

export default cartReducer;