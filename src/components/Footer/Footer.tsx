import React from 'react';
import './Footer.scss';

import facebook from '../../assets/images/footer/Facebook.svg';
import instagram from '../../assets/images/footer/Instagram.svg';
import pinterest from '../../assets/images/footer/Pinterest.svg';

import paySystem1 from '../../assets/images/footer/payments/AMEX.svg';
import paySystem2 from '../../assets/images/footer/payments/Apple Pay.svg';
import paySystem3 from '../../assets/images/footer/payments/Maestro.svg';
import paySystem4 from '../../assets/images/footer/payments/Discover.svg';
import paySystem5 from '../../assets/images/footer/payments/JCB.svg';
import paySystem6 from '../../assets/images/footer/payments/Mastercard.svg';
import paySystem7 from '../../assets/images/footer/payments/Paypal.svg';
import paySystem8 from '../../assets/images/footer/payments/Shopify Pay.svg';
import paySystem9 from '../../assets/images/footer/payments/Visa.svg';
import {CollapseItem} from "../common/Collapse/CollapseItem";

type FooterProps = {
    homeRef: React.RefObject<HTMLDivElement>;
    scrollTo: (refObj: React.RefObject<HTMLDivElement>) => void
}

export const Footer: React.FC<FooterProps> = ({homeRef, scrollTo}) => {

    const collapseItemStyle = {
        item: "footer__collapse collapse",
        itemTitle: "collapse__title footer__title",
        itemBody: "collapse__body",
        itemIcon: "collapse__icon",
        itemActive: "collapse__active",
    }

    return (
        <footer className="footer">

            <div className="footer__body">
                <div className="footer__logo logo">
                    Organic <span>fresh foods</span>
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
                    <div className="footer__systems">

                        <div className="footer__item">
                            <div className="footer__image">
                                <img src={paySystem1} alt="pay system"/>
                            </div>
                        </div>

                        <div className="footer__item">
                            <div className="footer__image">
                                <img src={paySystem2} alt="pay system"/>
                            </div>
                        </div>

                        <div className="footer__item">
                            <div className="footer__image">
                                <img src={paySystem3} alt="pay system"/>
                            </div>
                        </div>

                        <div className="footer__item">
                            <div className="footer__image">
                                <img src={paySystem4} alt="pay system"/>
                            </div>
                        </div>

                        <div className="footer__item">
                            <div className="footer__image">
                                <img src={paySystem5} alt="pay system"/>
                            </div>
                        </div>

                        <div className="footer__item">
                            <div className="footer__image">
                                <img src={paySystem6} alt="pay system"/>
                            </div>
                        </div>

                        <div className="footer__item">
                            <div className="footer__image">
                                <img src={paySystem7} alt="pay system"/>
                            </div>
                        </div>

                        <div className="footer__item">
                            <div className="footer__image">
                                <img src={paySystem8} alt="pay system"/>
                            </div>
                        </div>

                        <div className="footer__item">
                            <div className="footer__image">
                                <img src={paySystem9} alt="pay system"/>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="footer__follow">
                    <div className="footer__title">Don't miss out</div>
                    <div className="footer__subtitle">Subscribe to our newsletter</div>
                    <div className="footer__socials">
                        <div className="footer__link">FOLLOW US</div>
                        <div className="footer__networks">
                            <div className="footer__network">
                                <img src={facebook} alt="facebook logo"/>
                            </div>
                            <div className="footer__network">
                                <img src={pinterest} alt="pinterest logo"/>
                            </div>
                            <div className="footer__network">
                                <img src={instagram} alt="instagram logo"/>
                            </div>
                        </div>
                    </div>
                </div>

                <CollapseItem title='Information' style={collapseItemStyle}>
                    <ul className="collapse__list footer__list">
                        <li>Search</li>
                        <li>Contact us</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </CollapseItem>

                <CollapseItem title='Payments' style={collapseItemStyle}>
                    <div className="collapse__systems footer__systems">
                        <div className="collapse__item">
                            <div className="collapse__image">
                                <img src={paySystem1} alt="pay system"/>
                            </div>
                        </div>

                        <div className="collapse__item">
                            <div className="collapse__image">
                                <img src={paySystem2} alt="pay system"/>
                            </div>
                        </div>

                        <div className="collapse__item">
                            <div className="collapse__image">
                                <img src={paySystem3} alt="pay system"/>
                            </div>
                        </div>

                        <div className="collapse__item">
                            <div className="collapse__image">
                                <img src={paySystem4} alt="pay system"/>
                            </div>
                        </div>

                        <div className="collapse__item">
                            <div className="collapse__image">
                                <img src={paySystem5} alt="pay system"/>
                            </div>
                        </div>

                        <div className="collapse__item">
                            <div className="collapse__image">
                                <img src={paySystem6} alt="pay system"/>
                            </div>
                        </div>

                        <div className="collapse__item">
                            <div className="collapse__image">
                                <img src={paySystem7} alt="pay system"/>
                            </div>
                        </div>

                        <div className="collapse__item">
                            <div className="collapse__image">
                                <img src={paySystem8} alt="pay system"/>
                            </div>
                        </div>

                        <div className="collapse__item">
                            <div className="collapse__image">
                                <img src={paySystem9} alt="pay system"/>
                            </div>
                        </div>
                    </div>
                </CollapseItem>

            </div>

            <div className="footer__bottom">
                <div className="footer__copy">© 2020. All Rights Reserved.</div>
                <div className="footer__button">
                    <button onClick={() => scrollTo(homeRef)}>
                        Go top
                    </button>
                </div>
            </div>


        </footer>
    );
}
