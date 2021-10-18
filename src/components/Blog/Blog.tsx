import React from 'react';
import './Blog.scss';

import mainPhoto from '../../assets/images/blog/mainPhoto.jpeg';


export const Blog: React.FC = () => {
    return (
        <section className="blog">
            <div className="blog__row">

                <div className="blog__title title">
                    <h2>Our blog</h2>
                </div>

                <div className="blog__content">

                    <div className="blog__image">
                        <img src={mainPhoto} alt="smoothie"/>
                    </div>
                    <div className="blog__body">
                        <div className="blog__subtitle">
                            <h3>ASAFOETIDA - THE NEXT TURMERIC?</h3>
                        </div>

                        <div className="blog__date">Jun 16, 2020</div>

                        <div className="blog__text">

                            If the fruit ingredients and the green vegetable ingredients are both juiced ahead of
                            time,
                            the mixed juice doesn't even have to be blended like a smoothie, i.e. a green juice or
                            anything...
                            <div className="blog__button button">
                                <button>Read more</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
