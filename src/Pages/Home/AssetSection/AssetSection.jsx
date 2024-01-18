

const AssetSection = () => {
    return (
        <div className="bg-[#191919]">
            <div className="max-w-7xl mx-auto">
                <div className="hero min-h-screen ">
                    <div className=" flex items-center gap-16 lg:flex-row">
                        <img src="../../../../Images/Frame 75.png" className="max-w-[630px] rounded-lg shadow-2xl " />
                        <div className="space-y-2 lg:space-y-6">
                            <h1 className="text-5xl font-montserrat font-bold bg-gradient-to-r from-green-500 to-[#A1F65E] text-transparent bg-clip-text">Respect Your Body <br />
                                It’s your Greatest <br />
                                Asset</h1><br />
                            <div className="pb-5 text-[#E8E8E8] font-poppins text-base leading-8">
                                <p className=""><i className="fa-solid fa-circle-check mr-2"></i>Increase Muscle and Strength</p>
                                <p><i className="fa-solid fa-circle-check mr-2"></i>Be Healthier than before</p>
                                <p><i className="fa-solid fa-circle-check mr-2"></i>Increase Stamina</p>
                            </div>
                            <div className="flex gap-[15px]">
                                <button className="btn text-xl font-montserrat text-white bg-gradient-to-r from-green-500 to-[#A1F65E]">Join Now</button>
                                <button className="btn text-base font-montserrat btn-outline border-[#B4F87E] hover:bg-gradient-to-r from-green-500 to-[#A1F65E] hover:text-white">Contact Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssetSection;