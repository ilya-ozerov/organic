import React from 'react';
import './Cart.scss';
import { useSelector } from "react-redux";
import { selectProducts, selectTotalPrice } from "../../redux/cartSelectors";
import { CartItem } from "./CartItem";

type CartProps = {
    toggleCart: (toggleVal: boolean) => void

    className: string;
}

export const Cart: React.FC<CartProps> = ({ toggleCart, className }) => {

    const products = useSelector(selectProducts);
    const totalPrice = useSelector(selectTotalPrice);

    const emptyStyle: React.CSSProperties = {
        textAlign: 'center',
        fontSize: '24px',
        lineHeight: '200%',
        fontWeight: 700,
    }

    const productsList = products.map(p => {
        return <CartItem key={p.product.id} product={p.product} amount={p.amount} />
    })

    return (
        <div onMouseLeave={() => toggleCart(false)} className={className + " cart"}>

            <div onClick={() => toggleCart(false)}
                className="cart__cross cross"></div>


            {
                productsList.length === 0 &&
                <div style={emptyStyle}>
                    Cart is Empty
                </div>
            }

            {
                productsList.length > 0 &&
                <React.Fragment>
                    <div className="cart__body">
                        {productsList}
                    </div>
                    <div className="cart__total">
                        <span>Total price: </span>
                        {totalPrice === 0 ? null : totalPrice.toFixed(2) + '$'}
                    </div>

                    <div className="cart__button button">
                        <button>Buy</button>
                    </div>
                </React.Fragment>
            }
        </div>
    );
}
