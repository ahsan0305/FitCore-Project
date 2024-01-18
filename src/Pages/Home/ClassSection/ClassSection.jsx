

const ClassSection = () => {
    <style>

    </style>
    return (
        <div className="mt-[126px] max-w-7xl mx-auto">
            <div>
                <h1 className="text-base pb-5 font-bold text-[#fff] tracking-[8px] uppercase font-poppins">Our Classes</h1>
                <div className="flex justify-between items-center">
                    <h1 className="text-5xl font-montserrat leading-[58px] bg-gradient-to-r from-green-500 to-[#A1F65E] text-transparent bg-clip-text font-extrabold pb-2">Personalized Fitness <br />
                        Classes for Every Goal</h1>
                    <button className="btn btn-outline border-[#B4F87E]  hover:bg-gradient-to-r from-green-500 to-[#A1F65E] hover:text-white text-[22px] font-medium font-montserrat"> More Classes</button>
                </div>
            </div>
            <div className="flex justify-between mt-[57px]">

                <div className="card before--none rounded-none w-[48%] bg-base-100 shadow-xl image-full">
                    <figure><img className="w-[100%] " src="../../../Images/class1.png" alt="gym" /></figure>
                    <div className="card-body ">
                        <h2 className="text-4xl font-bold text-[#fff] font-poppins mt-[123px] ml-[108px] mr-[108px]">Strength Training</h2>
                        <p className="text-[#F3F3F3] font-normal  text-[20px] mt-[32px] ml-[108px] mr-[108px]">Classes focusing on building muscle strength and endurance through weightlifting and resistance exercises.</p>
                        <div className="card-actions justify-center ">
                            <button className="py-3 px-7 mt-10 text-white font-medium mb-[132px] text-[24px] rounded bg-gradient-to-r from-green-500 to-[#A1F65E] font-montserrat">Join Now</button>
                        </div>
                    </div>
                </div>

                <div className="card w-[25%] rounded-none before--none bg-base-100 shadow-xl image-full">
                    <figure><img src="../../../Images/class2.png" alt="gym-body" /></figure>
                    <div className="card-body">

                    </div>
                </div>
                <div className="card w-[25%] rounded-none before--none bg-base-100 shadow-xl image-full">
                    <figure><img src="../../..//Images/class3.png" alt="gym-body" /></figure>
                    <div className="card-body">

                    </div>
                </div>


            </div>

        </div>
    );
};

export default ClassSection;