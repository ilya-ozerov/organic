import React, { useEffect, useState } from 'react';
import './Shop.scss';
import { BottleOfSmoothie } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct } from "../../redux/cartReducer";
import { selectProducts } from '../../redux/cartSelectors';
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

type SmoothieItemProps = {
    smoothie: BottleOfSmoothie,
}

export const SmoothieItem: React.FC<SmoothieItemProps> = ({ smoothie }) => {

    const dispatch = useDispatch();

    const products = useSelector(selectProducts);

    const [currentProductIndex, setCurrentProductIndex] = useState(products.findIndex(
        p => p.product.id === smoothie.id)
    )

    useEffect(() => {
        setCurrentProductIndex(products.findIndex(
            p => p.product.id === smoothie.id)
        )
    }, [products, smoothie])

    const increaseAmount = () => {
        dispatch(addProduct({
            product: products[currentProductIndex].product,
            amount: products[currentProductIndex].amount,
        }))
    }

    const decreaseAmount = () => {
        dispatch(deleteProduct(smoothie.id))
    }

    const addToCard = () => {
        dispatch(addProduct({
            product: smoothie,
            amount: 1,
        }))
    }

    const productInCart = (): boolean => {
        const index = products.findIndex(p => p.product.id === smoothie.id)

        if (index === -1) return false;

        return true;
    }

    const itemStyle: React.CSSProperties = {
        backgroundColor: smoothie.bgColor,
    }

    return (
        <div style={itemStyle} className="shop__item item">
            <div className="item__image">
                <img src={smoothie.imageUrl} alt={smoothie.imageAlt} />
            </div>
            <div className="item__name">{smoothie.title}</div>
            <div className="item__label">{smoothie.volume}</div>

            {
                productInCart() &&
                <div className="item__amount">
                    <PlusOutlined onClick={increaseAmount} className="item__plus" />
                    <span>{products[currentProductIndex]?.amount}</span>
                    <MinusOutlined onClick={decreaseAmount} className="item__minus" />
                </div>
            }

            {
                !productInCart() &&
                <div className="item__button button">
                    <button onClick={addToCard}>Buy</button>
                </div>
            }
        </div>
    );
}
