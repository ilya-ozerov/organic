import { Product } from "../types/types";
import cartReducer, {cartActions, InitialStateType} from "./cartReducer";

let state: InitialStateType  = {
    totalProducts: 2,
    totalPrice: 21.98,

    products: [
        {
            product: {
                id: 'gfdbn12',
                title: 'Dark Chocolate Smoothie',
                price: 10.99,
                volume: 100,
            },
            amount: 2,
        }
    ],
}

beforeEach(() => {
    state  = {
        totalProducts: 2,
        totalPrice: 21.98,

        products: [
            {
                product: {
                    id: 'gfdbn12',
                    title: 'Dark Chocolate Smoothie',
                    price: 10.99,
                    volume: 100,
                },
                amount: 2,
            }
        ],
    }
})

test("product added success", () => {

    const newProduct: Product = {
        product: {
            id: 'gfdbn12',
            title: 'Dark Chocolate Smoothie',
            price: 10.99,
            volume: 100,
        },
        amount: 1
    }

    const newState = cartReducer(state, cartActions.productAdded(newProduct))

    expect(newState.products.length).toBe(1);
    expect(newState.products[0].amount).toBe(3);

});

test("product deleted success", () => {

    const id = 'gfdbn12';

    let newState = cartReducer(state, cartActions.productDeleted(id))
    newState = cartReducer(state, cartActions.productDeleted(id))

    expect(newState.products.length).toBe(0);
    expect(newState.products[0]).toBeFalsy();
});

