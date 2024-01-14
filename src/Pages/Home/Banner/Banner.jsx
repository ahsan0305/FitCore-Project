

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/7zvsVSw/banner-img.png)' }}>
                <div className="max-w-7xl mx-auto">
                    <div className="w-1/2">
                        <h1 className="mb-5 text-7xl font-extrabold text-white">Refresh Your Routine Shape
                            Your <span className="bg-gradient-to-r from-green-500 to-[#A1F65E] text-transparent bg-clip-text ">Fitness</span></h1>
                        <p className="mb-5 text-[#E8E8E8]">Engaging in regular exercise not only amplifies well-being and fortifies the body but also diminishes the likelihood of injuries thereby optimizing.</p>
                        <div >
                            <button className="btn border-0 text-[#fff] bg-gradient-to-r from-green-500 to-[#A1F65E] text-xl ">Join Now</button>
                            <a className="text-[#E8E8E8] pl-5"> Watch Video</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;