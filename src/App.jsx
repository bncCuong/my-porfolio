import { useState, useEffect } from 'react';
import useMediaQuery from './hooks/useMediaQuery';

import DotGroup from './components/DotGroup';
import Navbar from './components/Navbar';
import LandingPage from './components/Landing';

function App() {
    const [selectedPage, setSelectedPage] = useState('home');
    const [isTopOfPage, setIsTopOfPage] = useState(true);
    const isAboutMediumScreens = useMediaQuery('(min-width: 1060px)');

    useEffect(() => {
        const scrollHanler = () => {
            if (window.scrollY === 0)  setIsTopOfPage(true);
            if (window.scrollY !== 0) setIsTopOfPage(false)
        };
        window.addEventListener('scroll', scrollHanler);
        return () =>  window.removeEventListener('scroll', scrollHanler);
    }, []);
    return (
        <div className="app bg-deep-blue ">
            <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <div className="w-5/6 mx-auto md:h-full ">
                {isAboutMediumScreens && <DotGroup setSelectedPage={setSelectedPage} selectedPage={selectedPage} />}
            </div>
            <LandingPage setSelectedPage={setSelectedPage} />
        </div>
    );
}

export default App;
