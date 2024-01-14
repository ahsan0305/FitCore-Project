

const ClassSection = () => {
    <style>

    </style>
    return (
        <div className="mt-10 max-w-7xl mx-auto">
            <div>
                <h1 className="text-base font-bold text-[#fff] tracking-[8px] uppercase ">Our Classes</h1>
                <div className="flex justify-between items-center">
                    <h1 className="text-5xl bg-gradient-to-r from-green-500 to-[#A1F65E] text-transparent bg-clip-text font-extrabold">Personalized Fitness <br />
                        Classes for Every Goal</h1>
                    <button className="btn btn-outline border-[#B4F87E]"> More Classes</button>
                </div>
            </div>
            <div className="flex justify-between mt-[57px]">
                <div>
                    <img src="../../../../public/Images/classes1.png" alt="" />

                </div>
                <img src="../../../../public/Images/class2.png" alt="" />
                <img src="../../../../public/Images/class3.png" alt="" />
            </div>

        </div>
    );
};

export default ClassSection;