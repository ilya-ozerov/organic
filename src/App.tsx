import React, {useRef} from 'react';
import './App.scss';
import {Home} from './components/Home/Home';
import {What} from "./components/What/What";
import {About} from "./components/About/About";
import {Shop} from './components/Shop/Shop';
import {Story} from "./components/Story/Story";
import {Testimonials} from "./components/Testimonials/Testimonials";
import {Blog} from "./components/Blog/Blog";
import {Instagram} from "./components/Instagram/Instagram";
import {Footer} from "./components/Footer/Footer";

export const App: React.FC = () => {

    const homeRef = useRef<HTMLDivElement>(null) // type React.RefObject<HTMLDivElement>
    const shopRef = useRef<HTMLDivElement>(null)
    const storyRef = useRef<HTMLDivElement>(null)
    const aboutRef = useRef<HTMLDivElement>(null)
    const blogRef = useRef<HTMLDivElement>(null)
    const testimonialsRef = useRef<HTMLDivElement>(null)

    const scrollTo = (refObj: React.RefObject<HTMLDivElement>) => {
        refObj.current?.scrollIntoView({behavior: "smooth"})
    }

    return (
        <div className="wrapper">

            <Home homeRef={homeRef} aboutRef={aboutRef} blogRef={blogRef}
                  shopRef={shopRef} storyRef={storyRef} testimonialsRef={testimonialsRef}
                  scrollTo={scrollTo}/>

            <What/>

            <About aboutRef={aboutRef}/>

            <Shop shopRef={shopRef}/>

            <Story storyRef={storyRef}/>

            <Testimonials testimonialsRef={testimonialsRef}/>

            <Blog blogRef={blogRef}/>

            <Instagram />

            <Footer homeRef={homeRef} scrollTo={scrollTo}/>

        </div>
    );
}
