import React from 'react';
import './App.scss';
import { Home } from './components/Home/Home';

export const App: React.FC = () => {
    return (
        <div className="wrapper">

            <Home />

            <section className="what">
                <div className="what__title title">
                    <h2>What are these smoothies?</h2>
                </div>
                <div className="what__text">
                    <p></p>
                </div>

                <div className="what__table">
                    <div className="what__item">
                        <div className="what__image">
                            <img src="#" alt="vegetable"/>
                        </div>
                        <div className="what__name">Plant Based</div>
                    </div>
                    <div className="what__item">
                        <div className="what__image">
                            <img src="#" alt="vegetable"/>
                        </div>
                        <div className="what__name">Plant Based</div>
                    </div>
                    <div className="what__item">
                        <div className="what__image">
                            <img src="#" alt="vegetable"/>
                        </div>
                        <div className="what__name">Plant Based</div>
                    </div>
                    <div className="what__item">
                        <div className="what__image">
                            <img src="#" alt="vegetable"/>
                        </div>
                        <div className="what__name">Plant Based</div>
                    </div>

                    <div className="what__item">
                        <div className="what__image">
                            <img src="#" alt="vegetable"/>
                        </div>
                        <div className="what__name">Plant Based</div>
                    </div>
                    <div className="what__item">
                        <div className="what__image">
                            <img src="#" alt="vegetable"/>
                        </div>
                        <div className="what__name">Plant Based</div>
                    </div>
                    <div className="what__item">
                        <div className="what__image">
                            <img src="#" alt="vegetable"/>
                        </div>
                        <div className="what__name">Plant Based</div>
                    </div>
                    <div className="what__item">
                        <div className="what__image">
                            <img src="#" alt="vegetable"/>
                        </div>
                        <div className="what__name">Plant Based</div>
                    </div>
                </div>
            </section>

            <section className="shop">
                <div className="shop__image">
                    <img src="#" alt="welcome summer"/>
                </div>
                <div className="shop__info">
                    <div className="shop__title">
                        <h2>
                            What makes Smoothie an <span>awesome drink?</span>
                        </h2>
                    </div>
                    <ul className="shop__list">
                        <li>Crunchy Puffs Texture</li>
                        <li>100 Calories per drink</li>
                        <li>4g Plant Protein</li>
                        <li>Good source of Magnesium & Vitamin B6</li>
                        <li>No Sugar in our Savory Flavors</li>
                        <li>Non-GMO, Vegan & Paleo</li>
                        <li>Gluten-Free & Grain-Free</li>
                        <li>Corn-Free & Soy-Free</li>
                    </ul>
                    <div className="shop__button button">
                        <button>About Organic Smoothie</button>
                    </div>
                </div>
                <div className="shop__gallery">
                    <div className="shop__item item">
                        <div className="item__image">
                            <img src="#" alt="item"/>
                        </div>
                        <div className="item__name">Dark Chocolate Smoothie</div>
                        <div className="item__label">100 ml</div>
                        <div className="item__button button">
                            <button>Buy</button>
                        </div>
                    </div>
                    <div className="shop__item item">
                        <div className="item__image">
                            <img src="#" alt="item"/>
                        </div>
                        <div className="item__name">Dark Chocolate Smoothie</div>
                        <div className="item__label">100 ml</div>
                        <div className="item__button button">
                            <button>Buy</button>
                        </div>
                    </div>
                    <div className="shop__item item">
                        <div className="item__image">
                            <img src="#" alt="item"/>
                        </div>
                        <div className="item__name">Dark Chocolate Smoothie</div>
                        <div className="item__label">100 ml</div>
                        <div className="item__button button">
                            <button>Buy</button>
                        </div>
                    </div>
                    <div className="shop__item item">
                        <div className="item__image">
                            <img src="#" alt="item"/>
                        </div>
                        <div className="item__name">Dark Chocolate Smoothie</div>
                        <div className="item__label">100 ml</div>
                        <div className="item__button button">
                            <button>Buy</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="story">
                <div className="story__body">
                    <div className="story__title">
                        <h2>Our story</h2>
                    </div>
                    <div className="story__text">
                        As products typically using raw fruits or vegetables, smoothies include dietary fiber (e.g.
                        pulp, skin, and seeds) and so are thicker than fruit juice, often with a consistency similar to
                        a milkshake.
                    </div>
                    <div className="story__button button">
                        <button>Who we are</button>
                    </div>
                </div>

                <div className="story__image">
                    <div className="story__label">
                        <p>Our ingredients
                            are easy to read
                            and easier to eat</p>
                    </div>
                    <img src="#" alt="smoothie"/>
                </div>
            </section>

            <section className="testimonials">
                <div className="testimonials__title title">
                    <h2>Why clients <span>LOVE</span> us?</h2>
                </div>

                <div className="testimonials__comments">
                    <div className="testimonials__item">

                        <div className="testimonials__background">
                            <div className="testimonials__name">Sarah A</div>
                        </div>

                        <div className="testimonials__body">
                            <div className="testimonials__text">
                                Smoothie is great. I don't know what else to say. I will let my mum know about this, she
                                could really make use of Smoothie! Smoothie saved my business.
                            </div>
                            <div className="testimonials__address">
                                - from Santa Monica, CA
                            </div>
                        </div>


                        <div className="testimonials__photo">
                            <img src="#" alt="author"/>
                        </div>

                    </div>
                </div>

            </section>

            <section className="blog">
                <div className="blog__title title">
                    <h2>Our blog</h2>
                </div>

                <div className="blog__body">
                    <div className="blog__image">
                        <img src="#" alt="smoothie"/>
                    </div>
                    <div className="blog__subtitle">
                        <h3>ASAFOETIDA - THE NEXT TURMERIC?</h3>
                    </div>

                    <div className="blog__data">Jun 16, 2020</div>

                    <div className="blog__text">
                        <p>
                            If the fruit ingredients and the green vegetable ingredients are both juiced ahead of time,
                            the mixed juice doesn't even have to be blended like a smoothie, i.e. a green juice or
                            anything...
                        </p>
                        <div className="blog__button">
                            <button>Read more</button>
                        </div>
                    </div>
                </div>

                <div className="blog__instagram">
                    ashasuperfoods
                </div>

                <div className="blog__gallery">
                    <div className="blog__item">
                        <img src="#" alt="our instagram"/>
                    </div>
                </div>
            </section>

            <footer className="footer">

                <div className="footer__body">
                    <div className="footer__logo logo">
                        Organic <span>fresh foods</span>
                        {/*<img src="#" alt="our logo"/>*/}
                    </div>
                    <div className="footer__information">

                        <div className="footer__title">Information</div>

                        <ul className="footer__list">
                            <li>Search</li>
                            <li>Contact us</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>

                    <div className="footer__payments">
                        <div className="footer__title">Payments</div>
                    </div>

                    <div className="footer__follow">
                        <div className="footer__title">Don't miss out</div>
                        <div className="footer__subtitle">Subscribe to our newsletter</div>
                        <div className="footer__socials">
                            <div className="footer__link">FOLLOW US</div>
                            <div className="footer__facebook">f</div>
                            <div className="footer__pinterest">p</div>
                            <div className="footer__instagram">inst</div>
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <div className="footer__copy">© 2020. All Rights Reserved.</div>
                    <div className="footer__button">
                        <button>
                            Go top
                        </button>
                    </div>
                </div>


            </footer>

        </div>
    );
}
