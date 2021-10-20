import React from 'react';
import './Cart.scss';

import smoothie1 from '../../assets/images/shop/smoothie1.png';
import {useSelector} from "react-redux";
import {selectProducts, selectTotalPrice} from "../../redux/cartSelectors";
import {CartItem} from "./CartItem";

type CartProps = {
    setIsCart: (toggleVal: boolean) => void
}

export const Cart: React.FC<CartProps> = ({setIsCart}) => {
    
    const products = useSelector(selectProducts);
    const totalPrice = useSelector(selectTotalPrice);

    const emptyStyle: React.CSSProperties = {
        textAlign: 'center',
        fontSize: '24px',
        fontWeight: 700,
    }

    const productsList = products.map(p => {
        return <CartItem key={p.product.id} product={p.product} amount={p.amount}/>
    })

    return (
        <div className="header__cart cart popup">

            <div onClick={() => setIsCart(false)}
                 className="cart__cross cross"></div>

            <div className="cart__body">
                {productsList.length === 0 ? <div style={emptyStyle}>
                    Cart is Empty
                </div> : productsList }
            </div>
            <div className="cart__total">
                {totalPrice === 0 ? null : totalPrice.toFixed(2) + '$'}
            </div>
        </div>
    );
}
