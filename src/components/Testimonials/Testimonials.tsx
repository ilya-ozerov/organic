import React from 'react';
import './Testimonials.scss';

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


            </div>

        </section>
    );
}
