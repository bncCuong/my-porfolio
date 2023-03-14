import LineGradient from './LineGradient';
import { motion } from 'framer-motion';
import project_1 from '../assets/project-1.png';
import project_2 from '../assets/project-2.png';
import project_3 from '../assets/project-3.png';
import project_4 from '../assets/project-4.png';

const image = [project_1, project_2, project_3, project_4];

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

const Project = ({ href, id, title, description }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-80 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-10 text-deep-blue`;
    return (
        <a href={href} target="_blank">
            <motion.div variants={projectVariant} className="relative cursor-pointer">
                <div className={overlayStyles}>
                    <p className="text-2xl font-playfair">{title}</p>
                    <p className="mt-4 text-lg font-semibold font-playfair">{description}</p>
                    <p className="font-playfair font-semibold">Click here to visit</p>
                </div>
                <img src={`${image[id]}`} alt="project" className="h-[100%]" />
            </motion.div>
        </a>
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
                <p className="my-10 w-[900px] text-center font-playfair leading-[30px]">
                    After six months of self-study from sources such as: F8, youtube, udemy. The knowledge gained is
                    focused on ReactJs - Redux toolkit and Tailwindcss. Here are 4 small projects written on the React
                    library. Although not really 100% complete, but I hope with this knowledge I can get a job related
                    to programming. Thank you for taking the time to look through my projects
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
                    max-w-[600px] max-h-[400px] text-2xl font-playfair font-semibold p-10"
                    >
                        My list project
                    </div>
                    <Project
                        href="https://todoapp-wheat-nu.vercel.app/"
                        id="0"
                        title="1"
                        description="Todo App - the first project written and desgin by me"
                    />
                    <Project href="https://amazon-web-phi.vercel.app/" id="1" title="2" description="Amazon webside" />
                    <Project
                        href="http://modren-web.vercel.app"
                        id="2"
                        title="3"
                        description="Modern interface website has reponse"
                    />
                    <Project href="http://mp3-app-bnccuong.vercel.app" id="3" title="4" description="Mp3 webside " />
                    <div
                        className="flex justify-center text-center items-center bg-blue 
                    max-w-[600px] max-h-[400px] text-2xl font-playfair font-semibold p-10"
                    >
                        Thanks
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
