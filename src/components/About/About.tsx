import React from 'react';
import './About.scss';
import welcome from '../../assets/images/about/welcome.png';
import line from '../../assets/images/about/line.png';

export const About: React.FC = () => {
    return (
        <section className="about">
            <div className="about__image">
                <img src={welcome} alt="welcome summer"/>
            </div>
            <div className="about__info">
                <div className="about__title">
                    <h2>
                        What makes Smoothie <br/> an <span>awesome drink?<img src={line} alt=""/></span>
                    </h2>
                </div>
                <ul className="about__list">
                    <li><span>Crunchy</span> Puffs Texture</li>
                    <li><span>100 Calories</span> per drink</li>
                    <li>4g Plant Protein</li>
                    <li>Good source of <span>Magnesium & Vitamin B6</span></li>
                    <li><span>No Sugar</span> in our Savory Flavors</li>
                    <li><span>Non-GMO, Vegan & Paleo</span></li>
                    <li><span>Gluten-Free & Grain-Free</span></li>
                    <li><span>Corn-Free & Soy-Free</span></li>
                </ul>
                <div className="about__button button">
                    <button>About Organic Smoothie</button>
                </div>
            </div>
        </section>
    );
}
