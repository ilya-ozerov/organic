import React from 'react';
import './Shop.scss';

import smoothie1 from '../../assets/images/shop/smoothie1.png';
import smoothie2 from '../../assets/images/shop/smoothie2.png';
import smoothie3 from '../../assets/images/shop/smoothie3.png';
import smoothie4 from '../../assets/images/shop/smoothie4.png';

type ShopProps = {
    shopRef: React.RefObject<HTMLDivElement>;
}

export const Shop: React.FC<ShopProps> = ({shopRef}) => {
    return (
        <section ref={shopRef} className="shop">
            <div className="shop__gallery">
                <div className="shop__item item">
                    <div className="item__image">
                        <img src={smoothie1} alt="item"/>
                    </div>
                    <div className="item__name">Dark Chocolate Smoothie</div>
                    <div className="item__label">100 ml</div>
                    <div className="item__button button">
                        <button>Buy</button>
                    </div>
                </div>
                <div className="shop__item item">
                    <div className="item__image">
                        <img src={smoothie2} alt="item"/>
                    </div>
                    <div className="item__name">Dark Chocolate Smoothie</div>
                    <div className="item__label">100 ml</div>
                    <div className="item__button button">
                        <button>Buy</button>
                    </div>
                </div>
                <div className="shop__item item">
                    <div className="item__image">
                        <img src={smoothie3} alt="item"/>
                    </div>
                    <div className="item__name">Dark Chocolate Smoothie</div>
                    <div className="item__label">100 ml</div>
                    <div className="item__button button">
                        <button>Buy</button>
                    </div>
                </div>
                <div className="shop__item item">
                    <div className="item__image">
                        <img src={smoothie4} alt="item"/>
                    </div>
                    <div className="item__name">Dark Chocolate Smoothie</div>
                    <div className="item__label">100 ml</div>
                    <div className="item__button button">
                        <button>Buy</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
