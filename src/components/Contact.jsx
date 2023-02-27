import LineGradient from './LineGradient';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import contactImg from '../assets/contact-image.jpeg';

const Contact = () => {
    const {
        register,
        trigger,
        formState: { errors },
    } = useForm();

    const onSubmitHanler = async (e) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    };
    return (
        <section id="contact" className="py-48">
            {/* HEADING */}
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
                <div>
                    <p className="font-playfair font-semibold text-4xl mb-5 text-red text-center">
                        <span className="text-yellow">CONTACT ME</span> TO GET STARTED
                    </p>
                    <div className="flex md:justify-end my-5">
                        <LineGradient width="mx-auto w-1/2" />
                    </div>
                </div>
            </motion.div>

            {/* FORM AND IMAGE */}
            <div className="md:flex md:justify-between gap-16 mt-5 ">
                <motion.div
                    className="basis-1/2 flex justify-center mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: -50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <img src={contactImg} alt="contact" />
                </motion.div>

                <motion.div
                    className="basis-1/2  mt-20 md:mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: -50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <form
                        target="_blank"
                        onSubmit={onSubmitHanler}
                        action="http://formsubmit.co/261d2b282558d3f7fdeb7aed02cc48ed"
                        method="POST"
                    >
                        <input
                            className="w-full rounded-md outline-none bg-blue text-xl font-semibold placeholder-opaque-black p-3"
                            type="text"
                            placeholder="Name"
                            {...register('name', {
                                required: true,
                                maxLength: 20,
                            })}
                        />
                        {errors.name && (
                            <p className="text-red mt-1">
                                {errors.name.type === 'required' && 'Enter your name'}
                                {errors.name.type === 'maxLength' && 'Name less than 20 characters'}
                            </p>
                        )}

                        <input
                            className="w-full rounded-md outline-none bg-blue text-xl font-semibold
                             placeholder-opaque-black p-3 mt-5"
                            type="text"
                            placeholder="Email"
                            {...register('email', {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,}$/i,
                            })}
                        />
                        {errors.email && (
                            <p className="text-red mt-1">
                                {errors.email.type === 'required' && 'Enter your email'}
                                {errors.email.type === 'pattern' && 'Invalid email address'}
                            </p>
                        )}

                        <textarea
                            className="w-full rounded-md outline-none bg-blue text-xl font-semibold
                             placeholder-opaque-black p-3 mt-5"
                            type="text"
                            placeholder="Message"
                            {...register('message', {
                                required: true,
                                maxLength: 2000,
                            })}
                        />
                        {errors.email && (
                            <p className="text-red mt-1">
                                {errors.message.type === 'required' && 'Enter your message'}
                                {errors.message.type === 'maxLength' && 'Message less than 2000 characters'}
                            </p>
                        )}

                        <button
                            className="p-5 rounded-lg bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red 
                        hover:text-white transition duration-500 "
                        >
                            SEND ME A MESSAGE
                        </button>
                        <p>
                            Don't worry about sending gmail. This is actually sent to my gmail. Or you can directly
                            contact this phone number: 0969747389
                        </p>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
