import LineGradient from './LineGradient';
import { motion } from 'framer-motion';

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
    const projectTitle = title.split(' ').join('-').toLowerCase();

    return (
        <motion.div variants={projectVariant} className="relative cursor-pointer">
            <div className={overlayStyles}>
                <p className="text-2xl font-playfair">{title}</p>
                <p className="mt-7">tor accumsan tincidunt.</p>
            </div>
            <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
        </motion.div>
    );
};
const Projects = () => {
    return (
        <section id="projects" className="pt-10 pb-20 flex flex-col  items-center ">
            {/* HEADER */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
                className="md:w-1/3 flex flex-col items-center"
            >
                <p className="font-playfair font-semibold text-4xl mb-5">
                    <span className="text-red">Pro</span>ject
                </p>
                <LineGradient width="w-[50%]" />
                <p className="my-10 w-[900px] text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ipsum eligendi debitis consectetur
                    voluptatem qui tempore, iure saepe, velit nisi fuga ut voluptatum. Beatae dolore ipsum sequi
                    laudantium suscipit vero?
                </p>
            </motion.div>

            {/* PROJECTS */}
            <div className="flex justify-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                    className="sm:grid sm:grid-cols-3"
                >
                    <div
                        className="flex justify-center text-center items-center bg-red 
                    max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold p-10"
                    >
                        My list project
                    </div>
                    <Project title="project 1" />
                    <Project title="Project 2" />
                    <Project title="Project 3" />
                    <Project title="Project 4" />
                    <div
                        className="flex justify-center text-center items-center bg-blue 
                    max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold p-10"
                    >
                        Thanks
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
