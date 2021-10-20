import React from 'react';
import './Cart.scss';
import {MinusOutlined, PlusOutlined} from "@ant-design/icons";
import {Product} from "../../types/types";
import {useDispatch} from "react-redux";
import {addProduct, deleteProduct} from "../../redux/cartReducer";

// type CartItemProps = {
//     product: Product
// }

export const CartItem: React.FC<Product> = ({product, amount}) => {

    const dispatch = useDispatch()

    const increaseAmount = () => {
        dispatch(addProduct({
            product: product,
            amount: amount,
        }))
    }

    const decreaseAmount = () => {
        dispatch(deleteProduct(product.id))
    }

    return (
        <div className="cart__item">
            <div className="cart__image">
                <img src={product.imageUrl} alt={product.imageAlt}/>
            </div>
            <div className="cart__title">{product.title}</div>
            <div className="cart__amount">
                <PlusOutlined onClick={increaseAmount} className="cart__plus" />
                <span>{amount}</span>
                <MinusOutlined onClick={decreaseAmount} className="cart__minus" />
            </div>
            <div className="cart__price">{(product.price * amount) + '$'}</div>
        </div>
    );
}
