import React from 'react';
import "swiper/swiper.scss";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Autoplay} from 'swiper';

import './commentsСarousel.scss';

import left from "../../../assets/images/testimonials/arrowLeft.png";
import right from "../../../assets/images/testimonials/arrowRight.png";
import userPhoto from "../../../assets/images/testimonials/userPhoto.png";

SwiperCore.use([Navigation, Autoplay]);

export const CommentsCarousel: React.FC = () => {


    return (
        <div className="carousel">

            <Swiper className="carousel__swiper"
                    navigation={{
                        nextEl: ".carousel__right",
                        prevEl: ".carousel__left",
                    }} slidesPerView={1} spaceBetween={50}
                    autoplay={{
                        "delay": 5000,
                        "disableOnInteraction": true
                    }}>

                <SwiperSlide className="carousel__content">
                    <div className="carousel__item">
                        <div className="carousel__background">
                            <div className="carousel__name">Sarah A</div>
                        </div>
                        <div className="carousel__body">
                            <div className="carousel__text">
                                Smoothie is great. I don't know what else to say.
                                I will let my mum know about this, she
                                could really make use of Smoothie! Smoothie saved my business.
                            </div>
                            <div className="carousel__address">
                                - from Santa Monica, CA
                            </div>
                        </div>
                        <div className="carousel__photo">
                            <img src={userPhoto} alt="author"/>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="carousel__content">
                    <div className="carousel__item">
                        <div className="carousel__background">
                            <div className="carousel__name">Mark G</div>
                        </div>
                        <div className="carousel__body">
                            <div className="carousel__text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolorem eius expedita
                                quae quibusdam tempora.
                            </div>
                            <div className="carousel__address">
                                - from New York, NY
                            </div>
                        </div>
                        <div className="carousel__photo">
                            <img src={userPhoto} alt="author"/>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="carousel__arrows">
                <div className="carousel__left">
                    <img src={left} alt=""/>
                </div>
                <div className="carousel__right">
                    <img src={right} alt=""/>
                </div>
            </div>

        </div>
    );
}