import React from 'react';
import './Testimonials.scss';

import userPhoto from '../../assets/images/testimonials/userPhoto.png'
import left from '../../assets/images/testimonials/arrowLeft.png'
import right from '../../assets/images/testimonials/arrowRight.png'
import {CommentsCarousel} from "./Carousel/CommentsCarousel";

type TestimonialsProps = {
    testimonialsRef: React.RefObject<HTMLDivElement>;
}

export const Testimonials: React.FC<TestimonialsProps> = ({testimonialsRef}) => {
    return (
        <section ref={testimonialsRef} className="testimonials">
            <div className="testimonials__row">
                <div className="testimonials__title title">
                    <h2>Why clients <span>LOVE</span> us?</h2>
                </div>

                <CommentsCarousel />

                {/*<div className="testimonials__comments">*/}
                {/*    <div className="testimonials__item">*/}
                {/*        <div className="testimonials__background">*/}
                {/*            <div className="testimonials__name">Sarah A</div>*/}
                {/*        </div>*/}
                {/*        <div className="testimonials__body">*/}
                {/*            <div className="testimonials__text">*/}
                {/*                Smoothie is great. I don't know what else to say.*/}
                {/*                I will let my mum know about this, she*/}
                {/*                could really make use of Smoothie! Smoothie saved my business.*/}
                {/*            </div>*/}
                {/*            <div className="testimonials__address">*/}
                {/*                - from Santa Monica, CA*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="testimonials__photo">*/}
                {/*            <img src={userPhoto} alt="author"/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}



            </div>

        </section>
    );
}