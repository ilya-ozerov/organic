import React from 'react';
import './App.scss';
import {Home} from './components/Home/Home';
import {What} from "./components/What/What";
import {About} from "./components/About/About";
import { Shop } from './components/Shop/Shop';
import {Story} from "./components/Story/Story";
import {Testimonials} from "./components/Testimonials/Testimonials";
import {Blog} from "./components/Blog/Blog";
import {Instagram} from "./components/Instagram/Instagram";
import {Footer} from "./components/Footer/Footer";

export const App: React.FC = () => {
    return (
        <div className="wrapper">

            <Home/>

            <What />

            <About />

            <Shop />

            <Story />

            <Testimonials />

            <Blog />

            <Instagram />

            <Footer />

        </div>
    );
}
