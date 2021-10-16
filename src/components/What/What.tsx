import React from 'react';
import './What.scss';

import image1 from '../../assets/images/what/1.png';
import image2 from '../../assets/images/what/2.png';
import image3 from '../../assets/images/what/3.png';
import image4 from '../../assets/images/what/4.png';
import image5 from '../../assets/images/what/5.png';
import image6 from '../../assets/images/what/6.png';
import image7 from '../../assets/images/what/7.png';
import image8 from '../../assets/images/what/8.png';

export const What: React.FC = () => {
    return (
        <section className="what">
            <div className="what__title title">
                <h2>What are these smoothies?</h2>
            </div>
            <div className="what__text">
                <p>
                    A smoothie is a drink made from pureed raw fruit, vegetables, and sometimes dairy products
                    (milk, yogurt, ice-cream or cottage cheese), typically using a blender. Smoothies may be made
                    using other ingredients, such as water, crushed ice, fruit juice, sweeteners (e.g. honey, sugar,
                    stevia, or syrup), whey powder, plant milk, nuts, nut butter, seeds, tea, chocolate, herbal
                    supplements, or nutritional supplements.
                </p>
            </div>

            <div className="what__table">

                <div className="what__row">
                    <div className="what__item">
                        <div className="what__image">
                            <img src={image1} alt="vegetable"/>
                        </div>
                        <div className="what__name">Plant Based</div>
                    </div>
                    <div className="what__item">
                        <div className="what__image">
                            <img src={image2} alt="vegetable"/>
                        </div>
                        <div className="what__name">Vegan</div>
                    </div>
                    <div className="what__item">
                        <div className="what__image">
                            <img src={image3} alt="vegetable"/>
                        </div>
                        <div className="what__name">Paleo</div>
                    </div>
                    <div className="what__item">
                        <div className="what__image">
                            <img src={image4} alt="vegetable"/>
                        </div>
                        <div className="what__name">Gluten-Free</div>
                    </div>
                </div>

                <div className="what__row">
                    <div className="what__item">
                        <div className="what__image">
                            <img src={image5} alt="vegetable"/>
                        </div>
                        <div className="what__name">Corn-Free</div>
                    </div>
                    <div className="what__item">
                        <div className="what__image">
                            <img src={image6} alt="vegetable"/>
                        </div>
                        <div className="what__name">Soy-Free</div>
                    </div>
                    <div className="what__item">
                        <div className="what__image">
                            <img src={image7} alt="vegetable"/>
                        </div>
                        <div className="what__name">Ayurvedic</div>
                    </div>
                    <div className="what__item">
                        <div className="what__image">
                            <img src={image8} alt="vegetable"/>
                        </div>
                        <div className="what__name">Made With Love</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
