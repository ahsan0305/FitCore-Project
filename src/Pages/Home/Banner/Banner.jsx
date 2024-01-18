

const Banner = () => {
    return (
        <div className="">
            <div className=" hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/7zvsVSw/banner-img.png)'}}>
                <div className="max-w-7xl mx-auto">
                    <div className="w-1/2">
                        <h1 className="mb-[30px] text-3xl lg:text-7xl font-extrabold text-white uppercase font-montserrat">Refresh Your Routine Shape
                            Your <span className="bg-gradient-to-r from-green-500 to-[#A1F65E] text-transparent bg-clip-text ">Fitness</span></h1>
                        <p className="mb-[80px] text-[#E8E8E8] text-[20px]  font-medium w-[556px]">Engaging in regular exercise not only amplifies well-being and fortifies the body but also diminishes the likelihood of injuries thereby optimizing.</p>
                        <div >
                            <button className="btn border-0 text-[#fff] bg-gradient-to-r from-green-500 to-[#A1F65E] text-[10px] lg:tex-[24px] font-medium font-montserrat">Join Now</button>
                            <a className="text-[#E8E8E8] font-medium text-[20px] pl-5"><i className="fa-regular fa-circle-play mr-1 items-center text-[24px]"></i> Watch Video</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;