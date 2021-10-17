import React from 'react';
import './Instagram.scss';

import photo1 from '../../assets/images/instagram/1.jpeg';
import photo2 from '../../assets/images/instagram/2.jpeg';
import photo3 from '../../assets/images/instagram/3.jpeg';
import photo4 from '../../assets/images/instagram/4.jpeg';
import photo5 from '../../assets/images/instagram/5.jpeg';


export const Instagram: React.FC = () => {
    return (
        <section className="instagram">
            <div className="instagram__row">
                <div className="instagram__title">
                    ashasuperfoods
                </div>

                <div className="instagram__gallery">
                    <div className="instagram__item">
                        <img src={photo1} alt="our instagram"/>
                    </div>
                    <div className="instagram__item">
                        <img src={photo2} alt="our instagram"/>
                    </div>
                    <div className="instagram__item">
                        <img src={photo3} alt="our instagram"/>
                    </div>
                    <div className="instagram__item">
                        <img src={photo4} alt="our instagram"/>
                    </div>
                    <div className="instagram__item">
                        <img src={photo5} alt="our instagram"/>
                    </div>
                </div>
            </div>
        </section>
    );
}
