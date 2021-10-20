import React from 'react';
import './Shop.scss';

import smoothie1 from '../../assets/images/shop/smoothie1.png';
import smoothie2 from '../../assets/images/shop/smoothie2.png';
import smoothie3 from '../../assets/images/shop/smoothie3.png';
import smoothie4 from '../../assets/images/shop/smoothie4.png';
import {BottleOfSmoothie} from "../../types/types";
import {v1 as createId} from "uuid"
import {SmoothieItem} from "./SmoothieItem";

type ShopProps = {
    shopRef: React.RefObject<HTMLDivElement>;
}

const smoothies: BottleOfSmoothie[] = [
    {
        title: "Dark Chocolate Smoothie",
        id: createId(),
        price: 1.99,
        volume: 100,
        imageUrl: smoothie1,
        imageAlt: 'bottle of dark chocolate smoothie',
        bgColor: '#64281C',
    },
    {
        title: "Vegan Lettuce Smoothie",
        id: createId(),
        price: 2.59,
        volume: 100,
        imageUrl: smoothie2,
        imageAlt: 'bottle of vegan lettuce smoothie',
        bgColor: '#1C896E',
    },
    {
        title: "Lemon Ginger Smoothie",
        id: createId(),
        price: 1.99,
        volume: 100,
        imageUrl: smoothie3,
        imageAlt: 'bottle of lemon ginger smoothie',
        bgColor: '#F5B039',
    },
    {
        title: "Turmeric Garlic Smoothie",
        id: createId(),
        price: 1.99,
        volume: 100,
        imageUrl: smoothie4,
        imageAlt: 'bottle of turmeric garlic smoothie',
        bgColor: '#C24A1F',
    },
]

export const Shop: React.FC<ShopProps> = ({shopRef}) => {

    const smoothiesList = smoothies.map(s => {
        return <SmoothieItem key={s.id} smoothie={s} />
    })

    return (
        <section ref={shopRef} className="shop">
            <div className="shop__gallery">
                {smoothiesList}
            </div>
        </section>
    );
}
