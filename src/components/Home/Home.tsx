import React from 'react';
import './Home.scss';
import bg from '../../assets/images/home/bg.png';
import { Header } from './Header/Header';

type HomeProps = {
    homeRef: React.RefObject<HTMLDivElement>;
    shopRef: React.RefObject<HTMLDivElement>;
    storyRef: React.RefObject<HTMLDivElement>;
    aboutRef: React.RefObject<HTMLDivElement>;
    blogRef: React.RefObject<HTMLDivElement>;
    testimonialsRef: React.RefObject<HTMLDivElement>;

    scrollTo: (refObj: React.RefObject<HTMLDivElement>) => void
}

export const Home: React.FC<HomeProps> = ({
    homeRef, storyRef,
    shopRef, testimonialsRef,
    aboutRef, blogRef,
    scrollTo
}) => {

    const sectionRefs = {
        homeRef, storyRef,
        shopRef, testimonialsRef,
        aboutRef, blogRef,
    }

    return (
        <section ref={homeRef} className="home">
            <div className="home__container">
                <div className="home__bg">
                    <img draggable={"false"} src={bg} alt="bg" />
                </div>
                <div className="home__body">

                    <Header className="home__header" scrollTo={scrollTo} sectionRefs={sectionRefs} />

                    <div className="home__button button">
                        <button onClick={() => scrollTo(shopRef)}>Shop now</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
