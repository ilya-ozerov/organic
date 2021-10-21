import React, { useState } from 'react';
import './Home.scss';
import bg from '../../assets/images/home/bg.png';
import facebook from '../../assets/images/home/facebook.png';
import pinterest from '../../assets/images/home/pinterest.png';
import instagram from '../../assets/images/home/instagram.png';

import search from '../../assets/images/home/search.png';
import cart from '../../assets/images/home/cart.png';
import user from '../../assets/images/home/user.png';
import { Cart } from "../Cart/Cart";

type HomeProps = {
    homeRef: React.RefObject<HTMLDivElement>;
    shopRef: React.RefObject<HTMLDivElement>;
    storyRef: React.RefObject<HTMLDivElement>;
    aboutRef: React.RefObject<HTMLDivElement>;
    blogRef: React.RefObject<HTMLDivElement>;
    testimonialsRef: React.RefObject<HTMLDivElement>;

    scrollTo: (refObj: React.RefObject<HTMLDivElement>) => void
}

export const Home: React.FC<HomeProps> = ({
    homeRef, storyRef,
    shopRef, testimonialsRef,
    aboutRef, blogRef,
    scrollTo
}) => {

    const [isBurger, setIsBurger] = useState(false);
    const [isCart, setIsCart] = useState(false);

    const toggleBurger = (toggleValue: boolean) => {
        setIsBurger(toggleValue);
    }

    const mobileScrollTo = (refObj: React.RefObject<HTMLDivElement>) => {
        toggleBurger(false);
        scrollTo(refObj);
    }

    return (
        <section ref={homeRef} className="home">
            <div className="home__container">
                <div className="home__bg">
                    <img draggable={"false"} src={bg} alt="bg" />
                </div>
                <div className="home__body">

                    <header className="home__header header">

                        {!isBurger &&
                            <div onClick={() => toggleBurger(true)} onMouseEnter={() => toggleBurger(true)}
                                className="header__burger">
                                <div></div>
                            </div>
                        }

                        {
                            isBurger &&
                            <div onMouseLeave={() => toggleBurger(false)} className="header__mobile mobile popup">

                                <div onClick={() => toggleBurger(false)} className="mobile__cross cross"></div>

                                <ul className="mobile__list">
                                    <li onClick={() => mobileScrollTo(homeRef)}>Home</li>
                                    <li onClick={() => mobileScrollTo(shopRef)}>Shop</li>
                                    <li onClick={() => mobileScrollTo(storyRef)}>Story</li>
                                    <li onClick={() => mobileScrollTo(aboutRef)}>About</li>
                                    <li onClick={() => mobileScrollTo(blogRef)}>Blog</li>
                                    <li onClick={() => mobileScrollTo(testimonialsRef)}>Testimonials</li>
                                </ul>

                                <div className="mobile__services">
                                    <div className="mobile__service">
                                        <img draggable={"false"} src={search} alt="facebook icon" />
                                    </div>
                                    <div className="mobile__service">
                                        <img draggable={"false"} src={user} alt="facebook icon" />
                                    </div>
                                    <div className="mobile__service">
                                        <img draggable={"false"} src={cart} alt="facebook icon" />
                                    </div>
                                </div>

                                <div className="mobile__socials">
                                    <div className="mobile__social">
                                        <img draggable={"false"} src={facebook} alt="facebook icon" />
                                    </div>
                                    <div className="mobile__social">
                                        <img draggable={"false"} src={pinterest} alt="pinterest icon" />
                                    </div>
                                    <div className="mobile__social">
                                        <img draggable={"false"} src={instagram} alt="instagram icon" />
                                    </div>
                                </div>

                            </div>
                        }

                        <div className="header__menu">
                            <ul className="header__list">
                                <li onClick={() => scrollTo(homeRef)}>Home</li>
                                <li onClick={() => scrollTo(shopRef)}>Shop</li>
                                <li onClick={() => scrollTo(storyRef)}>Story</li>
                                <li onClick={() => scrollTo(aboutRef)}>About</li>
                                <li onClick={() => scrollTo(blogRef)}>Blog</li>
                                <li onClick={() => scrollTo(testimonialsRef)}>Testimonials</li>
                            </ul>
                        </div>
                        <div className="header__logo logo">
                            Organic<span>fresh foods</span>
                        </div>

                        <div className="header__panel">
                            <div className="header__services">
                                <div className="header__service-item">
                                    <img className="header__icon" draggable={"false"} src={search} alt="facebook icon" />
                                </div>
                                <div className="header__service-item">
                                    <img className="header__icon" draggable={"false"} src={user} alt="facebook icon" />
                                </div>
                                <div className="header__service-item">
                                    <img className="header__icon" onClick={() => setIsCart(true)} draggable={"false"}
                                        src={cart}
                                        alt="facebook icon" />
                                    {isCart && <Cart setIsCart={setIsCart} />}
                                </div>
                            </div>
                            <div className="header__socials">
                                <div className="header__social-item">
                                    <img draggable={"false"} src={facebook} alt="facebook icon" />
                                </div>
                                <div className="header__social-item">
                                    <img draggable={"false"} src={pinterest} alt="pinterest icon" />
                                </div>
                                <div className="header__social-item">
                                    <img draggable={"false"} src={instagram} alt="instagram icon" />
                                </div>
                            </div>
                        </div>
                    </header>

                    <div className="home__button button">
                        <button onClick={() => scrollTo(shopRef)}>Shop now</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
