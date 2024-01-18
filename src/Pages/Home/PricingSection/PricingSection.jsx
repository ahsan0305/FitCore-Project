


const PricingSection = () => {
    return (
        <div className=" pt-[100px] bg-[#121212]">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-xl font-bold text-[#fff] tracking-[8px] uppercase text-center mb-5 font-poppins">Pricing</h2>
                <h3 className="text-5xl bg-gradient-to-r from-green-500 to-[#A1F65E] text-transparent bg-clip-text font-bold text-center mb-12 pb-2 font-montserrat">Affordable Pricing Plans</h3>
                <div className="flex justify-around w-[300px] mx-auto bg-white items-center py-2 rounded-sm">
                    <button className="btn bg-black ">
                        Billed Monthly
                    </button>
                    <span className="text-black bg-white btn border-0 hover:bg-white">
                        Billed Yearly
                    </span>
                </div>
            </div>
            {/* Card section  */}
            <div className="max-w-7xl mx-auto  mt-[80px] pb-[120px] flex sm:flex-wrap-reverse gap-[5%] ">
                {/* First card section */}
                <div className="mb-10 p-[68px] w-[30%] space-y-6 text-left custom-paragraph-hover relative overflow-hidden hover:mt-[-40px] hover:bg-[#72AF43] group hover:translate-y-0 transition ease-in duration-300">
                    <h1 className="text-[20px] font-montserrat font-bold bg-gradient-to-r from-green-500 to-[#A1F65E] text-transparent bg-clip-text group-hover:pt-[22px]">Basic Package</h1>
                    <p className="text-[#FFFFFF] font-montserrat text-6xl font-bold">$25</p>
                    <p className="text-[16px] font-normal text-[#959595] hover:text-[#FFFFFF] font-poppins">per month, bill annually</p>
                    <div className="space-y-2 font-medium text-[16px] font-poppins text-[#E1E1E1] group-hover:pb-[120px]">
                        <p><i className="fa-solid fa-circle-check mr-2"></i> Unlimited Gym Access</p>
                        <p><i className="fa-solid fa-circle-check mr-2 "></i> 2x Fitness Consultant</p>
                        <p><i className="fa-solid fa-circle-check mr-2 "></i> Nutrition Tracking</p>
                        <p><i className="fa-solid fa-circle-check mr-2 "></i>1x Free Suplement</p>
                        <p><i className="fa-solid fa-circle-check mr-2"></i>3 Days per week</p>
                        <p><i className="fa-solid fa-circle-check mr-2"></i>Personal Trainer</p>
                    </div>
                    <button className=" btn px-[38px] bg-[#FFFFFF] font-medium text-lg rounded text-[#191919] hover:bg-slate-50 hover:hover:bg-gradient-to-r from-green-500 to-[#A1F65E] border-0 hover:text-white font-poppins">Register Now</button>
                </div>
                {/* Second card section */}
                <div className="mb-10 p-[68px] w-[30%] space-y-6 text-left bg-[#72AF43] relative overflow-hidden mt-[-40px]">
                    <span className="absolute bg-white w-[200px] font-montserrat right-[-50px] top-[30px] text-center text-black py-2 rotate-45">Best Offer</span>
                    <h1 className="text-[20px] font-bold text-[#FFFFFF] font-montserrat">Mid Package</h1>
                    <p className="text-[#FFFFFF] text-6xl font-bold font-montserrat">$55</p>
                    <p className="text-[16px] font-normal text-[#FFFFFF] font-poppins">per month, bill annually</p>
                    <div className="space-y-2 font-medium text-[16px] text-[#E1E1E1] font-poppins pb-[120px]">
                        <p><i className="fa-solid fa-circle-check mr-2"></i> Unlimited Gym Access</p>
                        <p><i className="fa-solid fa-circle-check mr-2"></i> 4x Fitness Consultant</p>
                        <p><i className="fa-solid fa-circle-check mr-2"></i> Nutrition Tracking</p>
                        <p><i className="fa-solid fa-circle-check mr-2"></i>3x Free Suplement</p>
                        <p><i className="fa-solid fa-circle-check mr-2"></i>5 Days per week</p>
                        <p><i className="fa-solid fa-circle-check mr-2"></i>Personal Trainer</p>
                    </div>
                    <button className=" btn border-0 px-[41px] bg-[#FFFFFF] font-medium text-lg rounded text-[#191919] hover:bg-gradient-to-r from-green-500 to-[#A1F65E] hover:text-white font-poppins">Register Now</button>
                </div>
                {/* third card section */}
                <div className="mb-10 p-[68px] w-[30%] space-y-6 text-left custom-paragraph-hover  relative overflow-hidden hover:mt-[-40px] hover:bg-[#72AF43] group hover:translate-y-0 transition ease-in duration-300">
                    <h1 className="text-[20px] font-bold bg-gradient-to-r from-green-500 font-montserrat to-[#A1F65E] text-transparent bg-clip-text group-hover:pt-[22px] ">Pro Package</h1>
                    <p className="text-[#FFFFFF] text-6xl font-bold font-montserrat">$75</p>
                    <p className="text-[16px] font-normal text-[#959595] font-poppins">per month, bill annually</p>
                    <div className="space-y-2 font-medium text-[16px] text-[#E1E1E1] group-hover:pb-[120px] font-poppins">
                        <p><i className="fa-solid fa-circle-check mr-2"></i> Unlimited Gym Access</p>
                        <p><i className="fa-solid fa-circle-check mr-2"></i> 5x Fitness Consultant</p>
                        <p><i className="fa-solid fa-circle-check mr-2"></i> Nutrition Tracking</p>
                        <p><i className="fa-solid fa-circle-check mr-2"></i>5x Free Suplement</p>
                        <p><i className="fa-solid fa-circle-check mr-2"></i>Gym Card</p>
                        <p><i className="fa-solid fa-circle-check mr-2"></i>Personal Trainer</p>
                    </div>
                    <button className=" btn px-[38px] bg-[#FFFFFF] font-medium text-lg rounded text-[#191919] hover:bg-slate-50 hover:hover:bg-gradient-to-r from-green-500 to-[#A1F65E] border-0 hover:text-white font-poppins hover:ease duration-300">Register Now</button>
                </div>
            </div>
        </div>
    );
};

export default PricingSection;