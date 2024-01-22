

const MemberSection = () => {
    return (
        <div className="mb-[20px] lg:mb-[90px] ">
            <div className="hero  h-[394px]" style={{ backgroundImage: 'url(https://i.ibb.co/vLvK7Gk/Membership-Section.jpg)' }}>
                <div className=""></div>
                <div className="hero-content text-center ">
                    <div className="">
                        <p className="mb-[30px] lg:mb-[70px] font-bold text-3xl lg:text-5xl text-white bg-gradient-to-t font-montserrat">Get A Free Consultancy <br /> Right Now Here!</p>
                        <button className="font-montserrat bg-gradient-to-r from-green-500 to-[#A1F65E] text-[#E8E8E8] font-semibold rounded py-[12px] px-[18px] lg:py-[20px] lg:px-[40px] cursor-pointer relative hover:bg-gradient-to-l from-green-500 to-[#A1F65E] hover:text-[#191919] ease-in duration-200 translate-x-1 hover:translate-x-2 hover:translate-y-2 text-[16px] lg:text-xl ">Join Membership</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MemberSection;