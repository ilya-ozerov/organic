import React, {useState} from 'react';
import './Home.scss';
import bg from '../../assets/images/home/bg.png';
import facebook from '../../assets/images/home/facebook.png';
import pinterest from '../../assets/images/home/pinterest.png';
import instagram from '../../assets/images/home/instagram.png';

import search from '../../assets/images/home/search.png';
import cart from '../../assets/images/home/cart.png';
import user from '../../assets/images/home/user.png';

export const Home: React.FC = () => {

    const [isBurger, setIsBurger] = useState(false);

    const toggleBurger = (toggleValue: boolean) => {
        setIsBurger(toggleValue);
        // if (document.body.style.overflow !== "hidden") {
        //     document.body.style.overflow = "hidden";
        // } else {
        //     document.body.style.overflow = "scroll";
        // }
    }

    return (
        <section className="home">
            <div className="home__container">
                <div className="home__bg">
                    <img draggable={"false"} src={bg} alt="bg"/>
                </div>
                <div className="home__body">

                    <header className="home__header header">

                        {!isBurger &&
                        <div onClick={() => toggleBurger(true)} className="header__burger">
                            <div></div>
                        </div>
                        }

                        {
                            isBurger &&
                            <div className="header__mobile mobile">

                                <div onClick={() => toggleBurger(false)} className="mobile__cross"></div>

                                <ul className="mobile__list">
                                    <li>Home</li>
                                    <li>Shop</li>
                                    <li>Story</li>
                                    <li>About</li>
                                    <li>Blog</li>
                                    <li>Testimonials</li>
                                </ul>

                                <div className="mobile__services">
                                    <div className="mobile__service">
                                        <img draggable={"false"} src={search} alt="facebook icon"/>
                                    </div>
                                    <div className="mobile__service">
                                        <img draggable={"false"} src={user} alt="facebook icon"/>
                                    </div>
                                    <div className="mobile__service">
                                        <img draggable={"false"} src={cart} alt="facebook icon"/>
                                    </div>
                                </div>

                                <div className="mobile__socials">
                                    <div className="mobile__social">
                                        <img draggable={"false"} src={facebook} alt="facebook icon"/>
                                    </div>
                                    <div className="mobile__social">
                                        <img draggable={"false"} src={pinterest} alt="pinterest icon"/>
                                    </div>
                                    <div className="mobile__social">
                                        <img draggable={"false"} src={instagram} alt="instagram icon"/>
                                    </div>
                                </div>

                            </div>
                        }

                        <div className="header__menu">
                            <ul className="header__list">
                                <li>Home</li>
                                <li>Shop</li>
                                <li>Story</li>
                                <li>About</li>
                                <li>Blog</li>
                                <li>Testimonials</li>
                            </ul>
                        </div>
                        <div className="header__logo logo">
                            Organic<span>fresh foods</span>
                        </div>

                        <div className="header__panel">
                            <div className="header__services">
                                <div className="header__service-item">
                                    <img draggable={"false"} src={search} alt="facebook icon"/>
                                </div>
                                <div className="header__service-item">
                                    <img draggable={"false"} src={user} alt="facebook icon"/>
                                </div>
                                <div className="header__service-item">
                                    <img draggable={"false"} src={cart} alt="facebook icon"/>
                                </div>
                            </div>
                            <div className="header__socials">
                                <div className="header__social-item">
                                    <img draggable={"false"} src={facebook} alt="facebook icon"/>
                                </div>
                                <div className="header__social-item">
                                    <img draggable={"false"} src={pinterest} alt="pinterest icon"/>
                                </div>
                                <div className="header__social-item">
                                    <img draggable={"false"} src={instagram} alt="instagram icon"/>
                                </div>
                            </div>
                        </div>
                    </header>

                    <div className="home__button button">
                        <button>Shop now</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
