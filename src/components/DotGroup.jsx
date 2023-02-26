import AnchorLink from 'react-anchor-link-smooth-scroll';

const DotGroup = ({ selectedPage, setSelectedPage }) => {
    const selectedStyle = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;
    return (
        <div className="flex flex-col gap-6 fixed top-[60%] right-7">
            <AnchorLink
                className={`${selectedPage === 'home' ? selectedStyle : 'bg-dark-grey'} w-3 h-3 rounded-full`}
                href="#home"
                onClick={() => setSelectedPage('home')}
            />
            <AnchorLink
                className={`${selectedPage === 'Skill' ? selectedStyle : 'bg-dark-grey'} w-3 h-3 rounded-full`}
                href="#Skill"
                onClick={() => setSelectedPage('Skill')}
            />
            <AnchorLink
                className={`${selectedPage === 'Testimonial' ? selectedStyle : 'bg-dark-grey'} w-3 h-3 rounded-full`}
                href="#Testimonial"
                onClick={() => setSelectedPage('Testimonial')}
            />
            <AnchorLink
                className={`${selectedPage === 'Project' ? selectedStyle : 'bg-dark-grey'} w-3 h-3 rounded-full`}
                href="#Project"
                onClick={() => setSelectedPage('Project')}
            />
            <AnchorLink
                className={`${selectedPage === 'Contact' ? selectedStyle : 'bg-dark-grey'} w-3 h-3 rounded-full`}
                href="#Contact"
                onClick={() => setSelectedPage('Contact')}
            />
        </div>
    );
};

export default DotGroup;
