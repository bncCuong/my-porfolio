import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import profile from '../assets/profile-image.png';
import SocicalMediaIcon from '../components/SocicalMediaIcon';

const Landing = ({ setSelectedPage }) => {
    const isAboveMediumScreen = useMediaQuery('(min-width: 1060px)');
    return (
        <section id="home" className="gap-16 py-10 md:flex md:justify-between md:items-center md:h-screen ">
            {/* IMAGE SECTION */}
            <div className="md:oder-2 flex basis-3/5 justify-center z-10 mt-16 md:mt-32">
                {isAboveMediumScreen ? (
                    <div
                        className="relative z-0 ml-20 mb-10 before:absolute before:z-[-1] before:rounded-t-[400px] before:border-2 before:border-blue 
                    before:top-[10rem] before:left-0 before:w-full before:max-w-[500px] before:h-[650px] before:border-b-transparent "
                    >
                        <img
                            src={profile}
                            alt="profile-img"
                            className="hover:filter  hover:saturate-200 transition duration-500 z-10 mb-28 max-w-[300px] md:max-w-[600px]"
                        />
                    </div>
                ) : (
                    <img
                        src={profile}
                        alt="profile-img"
                        className="hover:filter hover:saturate-200 transition duration-500 z-10 h-full max-w-[400px] md:max-w-[600px]"
                    />
                )}
            </div>

            {/* MAIN SECTION */}
            <div className="z-30 basis-2/5 mt-12 md:mt-32">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className="text-6xl font-playfair z-10 text-center md:text-start">
                        Bùi Ngọc
                        <span
                            className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush 
                            before:absolute before:-left-[15px]
                            before:-top-[70px] before:z-[-1] before:opacity-90"
                        >
                            {' '}
                            Cường
                        </span>
                    </p>

                    <p>Thành phố Thái Bình, tỉnh Thái Bình</p>
                    <p>0969747389</p>
                    <AnchorLink onClick={() => setSelectedPage('contact')} href="#contact">
                        cuongcuong201194@gmail.com
                    </AnchorLink>
                    <p className="my-10 text-xl text-center md:text-start text-red">Never too late to start </p>
                </motion.div>

                {/* CALL TO ACTIONS */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    className="flex mt-5 justify-center md:justify-start"
                >
                    <AnchorLink
                        onClick={() => setSelectedPage('contact')}
                        href="#contact"
                        className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500"
                    >
                        Contact me
                    </AnchorLink>

                    <AnchorLink
                        onClick={() => setSelectedPage('contact')}
                        href="#contact"
                        className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
                    >
                        <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10 ">
                            Lets talk
                        </div>
                    </AnchorLink>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <SocicalMediaIcon />
                </motion.div>
            </div>
        </section>
    );
};

export default Landing;
