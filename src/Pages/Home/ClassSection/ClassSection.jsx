

const ClassSection = () => {
    <style>

    </style>
    return (
        <div className="mt-[126px] max-w-7xl mx-auto">
            <div>
                <h1 className="text-base font-bold text-[#fff] tracking-[8px] uppercase ">Our Classes</h1>
                <div className="flex justify-between items-center">
                    <h1 className="text-5xl bg-gradient-to-r from-green-500 to-[#A1F65E] text-transparent bg-clip-text font-extrabold">Personalized Fitness <br />
                        Classes for Every Goal</h1>
                    <button className="btn btn-outline border-[#B4F87E]"> More Classes</button>
                </div>
            </div>
            <div className="flex justify-between mt-[57px]">

                <div className="card before--none rounded-none w-[48%] bg-base-100 shadow-xl image-full">
                    <figure><img className="w-[100%] " src="../../../../public/Images/class1.png" alt="gym" /></figure>
                    <div className="card-body ">
                        <h2 className="text-4xl font-bold text-[#fff] mt-[123px] ml-[108px] mr-[108px]">Strength Training</h2>
                        <p className="text-[#F3F3F3] font-normal text-[20px] mt-[32px] ml-[108px] mr-[108px]">Classes focusing on building muscle strength and endurance through weightlifting and resistance exercises.</p>
                        <div className="card-actions justify-center">
                            <button className="py-3 px-7 text-white font-medium mb-[132px] rounded bg-gradient-to-r from-green-500 to-[#A1F65E]">Join Now</button>
                        </div>
                    </div>
                </div>

                <div className="card w-[25%] before--none bg-base-100 shadow-xl image-full">
                    <figure><img src="../../../../public/Images/class2.png" alt="Shoes" /></figure>
                    <div className="card-body">

                    </div>
                </div>
                <div className="card w-[25%] before--none bg-base-100 shadow-xl image-full">
                    <figure><img src="../../../../public/Images/class3.png" alt="Shoes" /></figure>
                    <div className="card-body">

                    </div>
                </div>


            </div>

        </div>
    );
};

export default ClassSection;