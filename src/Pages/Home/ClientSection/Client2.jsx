

const client2 = () => {
  return (
    <div>
      <div role="tablist" className="tabs tabs-bordered">

        <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Billed Monthly" />
        <div role="tabpanel" className="tab-content p-10">
          <div className="w-full lg:max-w-7xl mx-auto px-[20px] lg:px-[0px] mt-[80px] pb-[120px] flex flex-col lg:flex-row  gap-0 lg:gap-[5%]  ">
            {/* First card section */}
            <div className="pricing-card mb-[32px] lg:mb-0 border border-white lg:border-0 p-[68px] w-full lg:w-[30%] space-y-3 lg:space-y-6 text-left custom-paragraph-hover relative overflow-hidden lg:hover:mt-[-40px] hover:bg-[#72AF43] group lg:hover:translate-y-0 transition ease-in duration-300">
              <h1 className="text-[20px] font-montserrat font-bold bg-gradient-to-r from-green-500 to-[#A1F65E] text-transparent bg-clip-text group-hover:pt-[22px]">Basic Package</h1>
              <p className="text-[#FFFFFF] font-montserrat text-6xl font-bold">$25</p>
              <p className="text-[16px] font-normal text-[#959595] hover:text-[#FFFFFF] font-poppins">per month, bill annually</p>
              <div className="space-y-2 font-medium text-[14px] lg:text-[16px] font-poppins text-[#E1E1E1] group-hover:pb-[30px] lg:group-hover:pb-[120px]">
                <p><i className="fa-solid fa-circle-check mr-2"></i> Unlimited Gym Access</p>
                <p><i className="fa-solid fa-circle-check mr-2 "></i> 2x Fitness Consultant</p>
                <p><i className="fa-solid fa-circle-check mr-2 "></i> Nutrition Tracking</p>
                <p><i className="fa-solid fa-circle-check mr-2 "></i>1x Free Suplement</p>
                <p><i className="fa-solid fa-circle-check mr-2"></i>3 Days per week</p>
                <p><i className="fa-solid fa-circle-check mr-2"></i>Personal Trainer</p>
              </div>
              <button className=" btn px-[38px] bg-[#FFFFFF] font-medium text-base lg:text-lg rounded text-[#191919] hover:bg-slate-50 hover:hover:bg-gradient-to-r from-green-500 to-[#A1F65E] border-0 hover:text-white font-poppins">Register Now</button>
            </div>
            {/* Second card section */}
            <div className="pricing-card mb-[32px] lg:mb-0 border border-white lg:border-0 p-[68px] w-full lg:w-[30%] space-y-3 lg:space-y-6 text-left bg-[#72AF43] relative overflow-hidden  lg:mt-[-40px]">
              <span className="absolute bg-white w-[200px] font-montserrat right-[-50px] top-[30px] text-center text-black py-2 rotate-45">Best Offer</span>
              <h1 className="text-[20px] font-bold text-[#FFFFFF] font-montserrat">Mid Package</h1>
              <p className="text-[#FFFFFF] text-6xl font-bold font-montserrat">$55</p>
              <p className="text-[16px] font-normal text-[#FFFFFF] font-poppins">per month, bill annually</p>
              <div className="space-y-2 font-medium text-[14px] lg:text-[16px] text-[#E1E1E1] font-poppins pb-[30px] lg:pb-[120px]">
                <p><i className="fa-solid fa-circle-check mr-2"></i> Unlimited Gym Access</p>
                <p><i className="fa-solid fa-circle-check mr-2"></i> 4x Fitness Consultant</p>
                <p><i className="fa-solid fa-circle-check mr-2"></i> Nutrition Tracking</p>
                <p><i className="fa-solid fa-circle-check mr-2"></i>3x Free Suplement</p>
                <p><i className="fa-solid fa-circle-check mr-2"></i>5 Days per week</p>
                <p><i className="fa-solid fa-circle-check mr-2"></i>Personal Trainer</p>
              </div>
              <button className=" btn border-0 px-[41px] bg-[#FFFFFF] font-medium text-base lg:text-lg rounded text-[#191919] hover:bg-gradient-to-r from-green-500 to-[#A1F65E] hover:text-white font-poppins">Register Now</button>
            </div>
            {/* third card section */}
            <div className="pricing-card lg:mb-0  border border-white lg:border-0 p-[68px] w-full lg:w-[30%] space-y-6 text-left custom-paragraph-hover  relative overflow-hidden  lg:hover:mt-[-40px] hover:bg-[#72AF43] group lg:hover:translate-y-0 transition ease-in duration-300">
              <h1 className="text-[20px] font-bold bg-gradient-to-r from-green-500 font-montserrat to-[#A1F65E] text-transparent bg-clip-text group-hover:pt-[22px] ">Pro Package</h1>
              <p className="text-[#FFFFFF] text-6xl font-bold font-montserrat">$75</p>
              <p className="text-[16px] font-normal text-[#959595] font-poppins">per month, bill annually</p>
              <div className="space-y-2 font-medium text-[14px] lg:text-[16px] text-[#E1E1E1] group-hover:pb-[30px] lg:group-hover:pb-[120px] font-poppins">
                <p><i className="fa-solid fa-circle-check mr-2"></i> Unlimited Gym Access</p>
                <p><i className="fa-solid fa-circle-check mr-2"></i> 5x Fitness Consultant</p>
                <p><i className="fa-solid fa-circle-check mr-2"></i> Nutrition Tracking</p>
                <p><i className="fa-solid fa-circle-check mr-2"></i>5x Free Suplement</p>
                <p><i className="fa-solid fa-circle-check mr-2"></i>Gym Card</p>
                <p><i className="fa-solid fa-circle-check mr-2"></i>Personal Trainer</p>
              </div>
              <button className=" btn px-[38px] bg-[#FFFFFF] font-medium text-base lg:text-lg rounded text-[#191919] hover:bg-slate-50 hover:hover:bg-gradient-to-r from-green-500 to-[#A1F65E] border-0 hover:text-white font-poppins hover:ease duration-300">Register Now</button>
            </div>
          </div>
        </div>





        <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Billed Yearly" checked />
        <div role="tabpanel" className="tab-content p-10">
          <div className="w-full lg:max-w-7xl mx-auto px-[20px] lg:px-[0px] mt-[80px] pb-[120px] flex flex-col lg:flex-row  gap-0 lg:gap-[5%]  ">
            {/* First card section */}
            <div className="pricing-card mb-[32px] lg:mb-0 border border-white lg:border-0 p-[68px] w-full lg:w-[30%] space-y-3 lg:space-y-6 text-left custom-paragraph-hover relative overflow-hidden lg:hover:mt-[-40px] hover:bg-[#72AF43] group lg:hover:translate-y-0 transition ease-in duration-300">
              <h1 className="text-[20px] font-montserrat font-bold bg-gradient-to-r from-green-500 to-[#A1F65E] text-transparent bg-clip-text group-hover:pt-[22px]">Basic Package</h1>
              <p className="text-[#FFFFFF] font-montserrat text-6xl font-bold">$25</p>
              <p className="text-[16px] font-normal text-[#959595] hover:text-[#FFFFFF] font-poppins">per year, bill annually</p>
              <div className="space-y-2 font-medium text-[14px] lg:text-[16px] font-poppins text-[#E1E1E1] group-hover:pb-[30px] lg:group-hover:pb-[120px]">
                <p><i className="fa-solid fa-circle-check mr-2"></i> Unlimited Gym Access</p>
                <p><i className="fa-solid fa-circle-check mr-2 "></i> 2x Fitness Consultant</p>
                <p><i className="fa-solid fa-circle-check mr-2 "></i> Nutrition Tracking</p>
                <p><i className="fa-solid fa-circle-check mr-2 "></i>1x Free Suplement</p>
                <p><i className="fa-solid fa-circle-check mr-2"></i>3 Days per week</p>
                <p><i className="fa-solid fa-circle-check mr-2"></i>Personal Trainer</p>
              </div>
              <button className=" btn px-[38px] bg-[#FFFFFF] font-medium text-base lg:text-lg rounded text-[#191919] hover:bg-slate-50 hover:hover:bg-gradient-to-r from-green-500 to-[#A1F65E] border-0 hover:text-white font-poppins">Register Now</button>
            </div>
            {/* Second card section */}
            <div className="pricing-card mb-[32px] lg:mb-0 border border-white lg:border-0 p-[68px] w-full lg:w-[30%] space-y-3 lg:space-y-6 text-left bg-[#72AF43] relative overflow-hidden  lg:mt-[-40px]">
              <span className="absolute bg-white w-[200px] font-montserrat right-[-50px] top-[30px] text-center text-black py-2 rotate-45">Best Offer</span>
              <h1 className="text-[20px] font-bold text-[#FFFFFF] font-montserrat">Mid Package</h1>
              <p className="text-[#FFFFFF] text-6xl font-bold font-montserrat">$620</p>
              <p className="text-[16px] font-normal text-[#FFFFFF] font-poppins">per year, bill annually</p>
              <div className="space-y-2 font-medium text-[14px] lg:text-[16px] text-[#E1E1E1] font-poppins pb-[30px] lg:pb-[120px]">
                <p><i className="fa-solid fa-circle-check mr-2"></i> Unlimited Gym Access</p>
                <p><i className="fa-solid fa-circle-check mr-2"></i> 4x Fitness Consultant</p>
                <p><i className="fa-solid fa-circle-check mr-2"></i> Nutrition Tracking</p>
                <p><i className="fa-solid fa-circle-check mr-2"></i>3x Free Suplement</p>
                <p><i className="fa-solid fa-circle-check mr-2"></i>5 Days per week</p>
                <p><i className="fa-solid fa-circle-check mr-2"></i>Personal Trainer</p>
              </div>
              <button className=" btn border-0 px-[41px] bg-[#FFFFFF] font-medium text-base lg:text-lg rounded text-[#191919] hover:bg-gradient-to-r from-green-500 to-[#A1F65E] hover:text-white font-poppins">Register Now</button>
            </div>
            {/* third card section */}
            <div className="pricing-card lg:mb-0  border border-white lg:border-0 p-[68px] w-full lg:w-[30%] space-y-6 text-left custom-paragraph-hover  relative overflow-hidden  lg:hover:mt-[-40px] hover:bg-[#72AF43] group lg:hover:translate-y-0 transition ease-in duration-300">
              <h1 className="text-[20px] font-bold bg-gradient-to-r from-green-500 font-montserrat to-[#A1F65E] text-transparent bg-clip-text group-hover:pt-[22px] ">Pro Package</h1>
              <p className="text-[#FFFFFF] text-6xl font-bold font-montserrat">$830</p>
              <p className="text-[16px] font-normal text-[#959595] font-poppins">per year, bill annually</p>
              <div className="space-y-2 font-medium text-[14px] lg:text-[16px] text-[#E1E1E1] group-hover:pb-[30px] lg:group-hover:pb-[120px] font-poppins">
                <p><i className="fa-solid fa-circle-check mr-2"></i> Unlimited Gym Access</p>
                <p><i className="fa-solid fa-circle-check mr-2"></i> 5x Fitness Consultant</p>
                <p><i className="fa-solid fa-circle-check mr-2"></i> Nutrition Tracking</p>
                <p><i className="fa-solid fa-circle-check mr-2"></i>5x Free Suplement</p>
                <p><i className="fa-solid fa-circle-check mr-2"></i>Gym Card</p>
                <p><i className="fa-solid fa-circle-check mr-2"></i>Personal Trainer</p>
              </div>
              <button className=" btn px-[38px] bg-[#FFFFFF] font-medium text-base lg:text-lg rounded text-[#191919] hover:bg-slate-50 hover:hover:bg-gradient-to-r from-green-500 to-[#A1F65E] border-0 hover:text-white font-poppins hover:ease duration-300">Register Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default client2;