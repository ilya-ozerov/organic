import React, { useState } from 'react';
import './Header.scss';
import facebook from '../../../assets/images/home/facebook.png';
import pinterest from '../../../assets/images/home/pinterest.png';
import instagram from '../../../assets/images/home/instagram.png';

import search from '../../../assets/images/home/search.png';
import cart from '../../../assets/images/home/cart.png';
import user from '../../../assets/images/home/user.png';
import { Cart } from "../../Cart/Cart";
import { useSelector } from 'react-redux';
import { selectTotalProducts } from '../../../redux/cartSelectors';
import { MobileMenu } from './MobileMenu/MobileMenu';

type HeaderProps = {
    sectionRefs: {
        homeRef: React.RefObject<HTMLDivElement>;
        shopRef: React.RefObject<HTMLDivElement>;
        storyRef: React.RefObject<HTMLDivElement>;
        aboutRef: React.RefObject<HTMLDivElement>;
        blogRef: React.RefObject<HTMLDivElement>;
        testimonialsRef: React.RefObject<HTMLDivElement>;
    }
    scrollTo: (refObj: React.RefObject<HTMLDivElement>) => void;
    className: string;
}

export const Header: React.FC<HeaderProps> = ({ sectionRefs, scrollTo, className }) => {

    const [isBurger, setIsBurger] = useState(false);
    const [isCart, setIsCart] = useState(false);

    const totalProducts = useSelector(selectTotalProducts);

    const toggleBurger = (toggleValue: boolean) => {
        setIsBurger(toggleValue);
    }

    const toggleCart = (toggleValue: boolean) => {
        setIsCart(toggleValue);
    }

    const mobileScrollTo = (refObj: React.RefObject<HTMLDivElement>) => {
        toggleBurger(false);
        scrollTo(refObj);
    }

    return (
        <header className={className + " header"}>

            {!isBurger &&
                <div onClick={() => toggleBurger(true)} onMouseEnter={() => toggleBurger(true)}
                    className="header__burger">
                    <div></div>
                </div>
            }

            {
                isBurger &&
                <MobileMenu className="header__mobile" sectionRefs={sectionRefs} isCart={isCart}
                    mobileScrollTo={mobileScrollTo} totalProducts={totalProducts} toggleBurger={toggleBurger}
                    toggleCart={toggleCart} />
            }

            <div className="header__menu">
                <ul className="header__list">
                    <li onClick={() => scrollTo(sectionRefs.homeRef)}>Home</li>
                    <li onClick={() => scrollTo(sectionRefs.shopRef)}>Shop</li>
                    <li onClick={() => scrollTo(sectionRefs.storyRef)}>Story</li>
                    <li onClick={() => scrollTo(sectionRefs.aboutRef)}>About</li>
                    <li onClick={() => scrollTo(sectionRefs.blogRef)}>Blog</li>
                    <li onClick={() => scrollTo(sectionRefs.testimonialsRef)}>Testimonials</li>
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
                        <img className="header__icon" onClick={() => toggleCart(true)} draggable={"false"}
                            src={cart}
                            alt="facebook icon" />
                        {
                            totalProducts > 0 &&
                            <div className="service-label">{totalProducts}</div>
                        }
                        {isCart && <Cart className="header__cart" toggleCart={toggleCart} />}
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
    );
}
