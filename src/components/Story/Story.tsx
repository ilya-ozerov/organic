import React from 'react';
import './Story.scss';

import smoothie from '../../assets/images/story/smoothie.png';
import label from '../../assets/images/story/label.png';

type StoryProps = {
    storyRef: React.RefObject<HTMLDivElement>;
}

export const Story: React.FC<StoryProps> = ({storyRef}) => {
    return (
        <section ref={storyRef} className="story">
            <div className="story__row">
                <div className="story__body">
                    <div className="story__content">
                        <div className="story__title title">
                            <h2>Our story</h2>
                        </div>
                        <div className="story__text">
                            As products typically using raw fruits or vegetables, smoothies include dietary fiber (e.g.
                            pulp, skin, and seeds) and so are thicker than fruit juice, often with a consistency similar
                            to
                            a milkshake.
                        </div>
                        <div className="story__button button">
                            <button>Who we are</button>
                        </div>
                    </div>
                </div>

                <div className="story__image">
                    <div className="story__content">
                        <div className="story__label">
                            <p>Our ingredients <br/>
                                are easy to read <br/>
                                and easier to eat</p>
                            <img src={label} alt=""/>
                        </div>
                        <img src={smoothie} alt="smoothie"/></div>
                </div>
            </div>
        </section>
    );
}
