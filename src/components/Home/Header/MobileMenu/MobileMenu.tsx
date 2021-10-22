import React from 'react';
import './MobileMenu.scss';
import facebook from '../../../../assets/images/home/facebook.png';
import pinterest from '../../../../assets/images/home/pinterest.png';
import instagram from '../../../../assets/images/home/instagram.png';

import search from '../../../../assets/images/home/search.png';
import cart from '../../../../assets/images/home/cart.png';
import user from '../../../../assets/images/home/user.png';
import { Cart } from "../../../Cart/Cart";

type MobileProps = {
    sectionRefs: {
        homeRef: React.RefObject<HTMLDivElement>;
        shopRef: React.RefObject<HTMLDivElement>;
        storyRef: React.RefObject<HTMLDivElement>;
        aboutRef: React.RefObject<HTMLDivElement>;
        blogRef: React.RefObject<HTMLDivElement>;
        testimonialsRef: React.RefObject<HTMLDivElement>;
    }

    totalProducts: number
    isCart: boolean;
    toggleBurger: (toggleValue: boolean) => void;
    toggleCart: (toggleValue: boolean) => void;

    mobileScrollTo: (refObj: React.RefObject<HTMLDivElement>) => void;
    className: string;
}

export const MobileMenu: React.FC<MobileProps> = ({ className, sectionRefs, mobileScrollTo, toggleBurger, toggleCart, isCart, totalProducts }) => {

    return (
        <div onMouseLeave={() => toggleBurger(false)} className={className + " mobile"}>

            <div onClick={() => toggleBurger(false)} className="mobile__cross cross"></div>

            <ul className="mobile__list">
                <li onClick={() => mobileScrollTo(sectionRefs.homeRef)}>Home</li>
                <li onClick={() => mobileScrollTo(sectionRefs.shopRef)}>Shop</li>
                <li onClick={() => mobileScrollTo(sectionRefs.storyRef)}>Story</li>
                <li onClick={() => mobileScrollTo(sectionRefs.aboutRef)}>About</li>
                <li onClick={() => mobileScrollTo(sectionRefs.blogRef)}>Blog</li>
                <li onClick={() => mobileScrollTo(sectionRefs.testimonialsRef)}>Testimonials</li>
            </ul>

            {isCart && <Cart className="mobile__cart" toggleCart={toggleCart} />}

            <div className="mobile__services">
                <div className="mobile__service">
                    <img draggable={"false"} src={search} alt="facebook icon" />
                </div>
                <div className="mobile__service">
                    <img draggable={"false"} src={user} alt="facebook icon" />
                </div>
                <div className="mobile__service">
                    <img onClick={() => toggleCart(true)} draggable={"false"} src={cart} alt="facebook icon" />
                    {
                        totalProducts > 0 &&
                        <div className="service-label">{totalProducts}</div>
                    }
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
    );
}
