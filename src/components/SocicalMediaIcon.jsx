import github from '../assets/github-mark-white.png';
import linkedin from '../assets/linkedin.png';
import gmail from '../assets/gmail.png';
const SocicalMediaIcon = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7 ">
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://github.com/bncCuong?tab=repositories"
                target="_blank"
                rel="noreferren"
            >
                <img alt="github" src={github} width="32" />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com/in/b%C3%B9i-ng%E1%BB%8Dc-c%C6%B0%E1%BB%9Dng-363098268/"
                target="_blank"
                rel="noreferren"
            >
                <img alt="facebook" src={linkedin} />
            </a>
            <a
                className="hover:opacity-50 transition duration-500 bg-white rounded-full"
                href="https://gmail.com"
                target="_blank"
                rel="noreferren"
            >
                <img alt="gmail" src={gmail} width="30" />
            </a>
        </div>
    );
};

export default SocicalMediaIcon;
