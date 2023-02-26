import useMediaQuery from '../hooks/useMediaQuery';
import LineGradient from './LineGradient';
import { motion } from 'framer-motion';
import skill from '../assets/skills-image.png';

const MySkill = () => {
    const isAboveMediumScreen = useMediaQuery('(min-width: 1060px)');
    return (
        <section id="skills" className="pt-10 pb-24">
            {/* HEADER AND IMAGE SECTION */}
            <div className="md:flex md:justify-between md:gap-16 mt-32 ">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    className="md:w-1/3 "
                >
                    <p className="font-playfair font-semibold text-4xl mb-5">
                        MY <span className="text-red">Skills</span>
                    </p>
                    <LineGradient width="w-[29%]" />
                    <p className="mt-10 mb-7">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ipsum eligendi debitis
                        consectetur voluptatem qui tempore, iure saepe, velit nisi fuga ut voluptatum. Beatae dolore
                        ipsum sequi laudantium suscipit vero?
                    </p>
                </motion.div>
                <div className="mt-16 md:mt-0">
                    {isAboveMediumScreen ? (
                        <div
                            className="relative z-0 ml-20 before:absolute before:z-[-1] before:border-2 before:border-blue 
                    before:-top-10 before:-left-10 before:w-full  before:h-full "
                        >
                            <img src={skill} alt="skills-img" className="z-10" />
                        </div>
                    ) : (
                        <img src={skill} alt="skills-img" className="z-10" />
                    )}
                </div>
            </div>

            {/* SKILL */}
            <div className="md:flex md:justify-between mt-16 ">
                {/* EXPERIENCE */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-3xl">01</p>
                            <p className="font-playfair font-semibold text-5xl mt-3">Experience</p>
                        </div>

                        {/* <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" /> */}
                    </div>
                    <p className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum repellat nulla impedit quia
                        dicta. Iste, quisquam rerum labore perferendis reprehenderit laborum ipsam sunt! Expedita nulla
                        accusantium inventore nihil cum eaque?
                    </p>
                </motion.div>

                {/* INNOVATIVE */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    className="md:mt-0 mt-20"
                >
                    <div className="relative h-20">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-3xl">02</p>
                            <p className="font-playfair font-semibold text-5xl mt-3">Innovative</p>
                        </div>

                        {/* <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" /> */}
                    </div>
                    <p className="mt-10">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum repellat nulla impedit quia
                        dicta. Iste, quisquam rerum labore perferendis reprehenderit laborum ipsam sunt! Expedita nulla
                        accusantium inventore nihil cum eaque?
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default MySkill;
