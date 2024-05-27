const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center md:w-4/12 mx-auto my-8">
            <p className="text-[#D99904] text-xl italic mb-2">{subHeading}</p>
            <divider></divider>
            <h3 className="text-[40px] dark:text-white text-[#151515] border-y-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;