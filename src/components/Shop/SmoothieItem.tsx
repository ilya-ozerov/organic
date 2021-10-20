import React from 'react';
import './Shop.scss';
import {BottleOfSmoothie} from "../../types/types";
import {useDispatch} from "react-redux";
import {addProduct} from "../../redux/cartReducer";

type SmoothieItemProps = {
    smoothie: BottleOfSmoothie,
}

export const SmoothieItem: React.FC<SmoothieItemProps> = ({smoothie}) => {

    const dispatch = useDispatch();

    const addToCard = () => {
      dispatch(addProduct({
          product: smoothie,
          amount: 1,
      }))
    }

    const itemStyle: React.CSSProperties = {
        backgroundColor: smoothie.bgColor,
    }

    return (
        <div style={itemStyle} className="shop__item item">
            <div className="item__image">
                <img src={smoothie.imageUrl} alt={smoothie.imageAlt}/>
            </div>
            <div className="item__name">{smoothie.title}</div>
            <div className="item__label">{smoothie.volume}</div>
            <div className="item__button button">
                <button onClick={addToCard}>Buy</button>
            </div>
        </div>
    );
}
