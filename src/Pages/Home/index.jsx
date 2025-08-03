import React from 'react';

import Header from '../../Comps/Header';
import About from './About';
import Services from './Services';
import Knowledges from './Knowledges';
import Networks from './Networks';
import Projects from './Projects';
import Footer from '../../Comps/Footer';

function Home() {
    return (
        <>
        <Header />
        <About />
        <Services />
        <Knowledges />
        <Networks />
        <Projects />
        <Footer />
        </>
    );
}

export default Home;