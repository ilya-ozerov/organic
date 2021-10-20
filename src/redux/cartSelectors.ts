import { AppStateType } from "./store";
import {Product} from "../types/types";

export const selectProducts = (state: AppStateType): Product[] => {
    return state.cart.products;
}

export const selectTotalPrice = (state: AppStateType): number => {
    return state.cart.totalPrice;
}

export const selectTotalProducts = (state: AppStateType): number => {
    return state.cart.totalProducts;
}