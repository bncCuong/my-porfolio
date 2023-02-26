import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';
import menuIcon from '../assets/menu-icon.svg';
import closeIcon from '../assets/close-icon.svg';
const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink
            className={`${
                selectedPage === lowerCasePage ? 'text-yellow' : ''
            } hover:text-yellow transition duration-500`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggle, setIsMenuToggle] = useState(false);
    const isAboutSmallScreen = useMediaQuery('(min-width: 768px)');
    const navbarBg = isTopOfPage ? '' : 'bg-red opacity-80';

    const toggleMenu = () => {
        setIsMenuToggle((prev) => !prev);
    };
    return (
        <nav className={`${navbarBg} z-40 fixed top-0 w-full px-6 py-2`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-playfair text-3xl font-bold">bnc.Cường</h4>
                {/* Destop navbar */}
                {isAboutSmallScreen ? (
                    <div className="flex justify-between gap-16 font-opensans text-sm font-bold">
                        <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Skills" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Testimonial" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    </div>
                ) : (
                    <button className="rounded-full bg-red p-x" onClick={toggleMenu}>
                        <img src={menuIcon} alt="menu-icon" />
                    </button>
                )}

                {/* Mobie navbar */}
                {!isAboutSmallScreen && isMenuToggle && (
                    <div className="fixed right-0 bottom-0 h-full bg-blue w-[200px]">
                        <button onClick={toggleMenu} className="p-2">
                            <img src={closeIcon} alt="close-icon" />
                        </button>
                        <div className="flex flex-col gap-10 h-screen items-center text-deep-blue">
                            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page="Skills" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page="Testimonial" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
