import { useState, useEffect } from 'react';
import useMediaQuery from './hooks/useMediaQuery';

import DotGroup from './components/DotGroup';
import Navbar from './components/Navbar';
import LandingPage from './components/Landing';
import LineGradient from './components/LineGradient';
import MySkill from './components/MySkill';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    const [selectedPage, setSelectedPage] = useState('home');
    const [isTopOfPage, setIsTopOfPage] = useState(true);
    const isAboutMediumScreens = useMediaQuery('(min-width: 1060px)');

    useEffect(() => {
        const scrollHanler = () => {
            if (window.scrollY === 0) setIsTopOfPage(true);
            if (window.scrollY !== 0) setIsTopOfPage(false);
        };
        window.addEventListener('scroll', scrollHanler);
        return () => window.removeEventListener('scroll', scrollHanler);
    }, []);
    return (
        <div className="app bg-deep-blue ">
            <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <div className="w-5/6 mx-auto md:h-full ">
                {isAboutMediumScreens && <DotGroup setSelectedPage={setSelectedPage} selectedPage={selectedPage} />}
            </div>
            <LandingPage setSelectedPage={setSelectedPage} />
            <LineGradient />
            <div className="w-5/6 mx-auto md:h-full mb-20 md:mb-0">
                <MySkill />
            </div>
            <LineGradient />
            <div className="w-5/6 mx-auto">
                <Projects />
            </div>
            <LineGradient />
            <div className="w-5/6 mx-auto">
                <Contact />
            </div>{' '}
            <LineGradient />
            <div className="w-5/6 mx-auto">
                <Footer />
            </div>
        </div>
    );
}

export default App;
