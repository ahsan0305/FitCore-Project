

const ClientSection = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <h2 className="text-xl font-bold text-[#fff] tracking-[8px] uppercase mt-32 mb-5 font-poppins"> Testimonials</h2>
                <h2 className="text-5xl bg-gradient-to-r from-green-500 to-[#A1F65E] text-transparent bg-clip-text font-bold mb-16 font-montserrat">What Say About Our Clients</h2>
            </div>

            <div className="hero mb-[100px] bg-base-100">
                <div className="hero-content flex-col lg:flex-row">

                    <img src="../../../../public/Images/Client_Section.jpg" className="max-w-sm rounded-[2px] shadow-2xl" />
                    <div className="ml-[140px] text-[#FFFFFFCC] text-[21px] font-medium">
                        <p className="py-6">“ Join this fitness member, the best choice that I’ve. They’re very professional and give you suggestion about what food and nutrition that you can eat”</p> <br />
                        <p>Jonathan Edward</p>
                        <p className="text-[17px] font-normal">Athletes</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientSection;