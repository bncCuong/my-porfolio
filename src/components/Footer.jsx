import SocialMediaIcons from '../components/SocicalMediaIcon';

const Footer = () => {
    return (
        <footer className="h-64 bg-red pt-10 mt-10">
            <div className="w-10/12 mx-auto">
                <SocialMediaIcons />
                <div className="md:flex justify-center md:justify-between text-center ">
                    <p className="font-playfair font-semibold text-2xl text-yellow">Bùi Ngọc Cường</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
