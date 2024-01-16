// import from 

const Footer = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <footer className="footer p-10 bg-[#1D2229] text-base-content justify-between">

                <nav>
                    <img src="../../../../public/Images/Logo.png" alt="" />
                    <p>A gym, also known as a fitness center or health <br />
                        club, is a facility dedicated to physical fitness and <br />
                        exercise gyms and typically offer a range</p>
                    <div className="grid grid-flow-col gap-4">
                        <img src="../../../../public/Images/icon/Facebook.svg" alt="" />
                        <img src="../../../../public/Images/icon/Instagram.svg" alt="" />
                        <img src="../../../../public/Images/icon/LinkedIn.svg" alt="" />
                        <img src="../../../../public/Images/icon/Twitter.svg" alt="" />
                        <img src="../../../../public/Images/icon/YouTube.svg" alt="" />
                    </div>
                </nav>
                <nav>
                    <header className="footer-title text-[#FFFFFF]">Category</header>
                    <a className="link link-hover">Strength Training</a>
                    <a className="link link-hover">Body Building</a>
                    <a className="link link-hover">Weight Lost</a>
                    <a className="link link-hover">Basic Yoga</a>
                    <a className="link link-hover">Physical Fitness</a>
                </nav>
                <nav>
                    <header className="footer-title text-[#FFFFFF]">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Classes</a>
                    <a className="link link-hover">Trainers</a>
                    <a className="link link-hover">Price</a>
                </nav>
                <nav>
                    <header className="footer-title text-[#FFFFFF]">Contact Us</header>
                    <a className="link link-hover flex items-center"><i className="fa fa-phone mr-2"></i> +1  269-537-1744</a>
                    <a className="link link-hover flex items-center"> <i className="fa fa-envelope mr-2"></i>  Info@fitcore.com</a>
                    <a className="link link-hover flex items-center"> <i className="fa fa-map-marker mr-2"></i>  3033 Goff Avenue, Michigan, <br />
                        Grand Rapids, USA</a>
                </nav>
            </footer>
            <footer className="footer px-10 pb-10 py-4 border-t border-[#D8D4D433] bg-[#1D2229] text-base-content border-base-300">
                <aside className="items-center grid-flow-col">
                    <p>Copyright © 2024 FitCore</p>
                </aside>

                <nav className="md:place-self-center md:justify-self-end">
                    <p>Terms Of Use | Privacy Policy</p>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;