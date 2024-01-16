

const AssetSection = () => {
    return (
        <div className="bg-[#191919]">
            <div className="max-w-7xl mx-auto ">
            <div className="hero min-h-screen ">
                <div className=" flex items-center gap-14 lg:flex-row">
                    <img  src="../../../../public/Images/Asset_Side.png" className="max-w-[630px] rounded-lg shadow-2xl " />
                    <div className="space-y-6">
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-green-500 to-[#A1F65E] text-transparent bg-clip-text">Respect Your Body
                            It’s your Greatest Asset</h1><br />
                        <div className="pb-5 text-[#E8E8E8]">
                        <p className=""><i className="fa-solid fa-circle-check mr-2"></i>Increase Muscle and Strength</p>
                        <p><i className="fa-solid fa-circle-check mr-2"></i>Be Healthier than before</p>
                        <p><i className="fa-solid fa-circle-check mr-2"></i>Increase Stamina</p>
                        </div>
                        <div className="flex gap-5">
                            <button className="btn text-xl text-white bg-gradient-to-r from-green-500 to-[#A1F65E]">Join Now</button>
                            <button className="btn text-lg btn-outline border-[#B4F87E] ">Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AssetSection;