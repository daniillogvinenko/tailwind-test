import { Button } from "../Button/Button";
import { Navbar } from "../Navbar/Navbar";

export const Header = () => {
    return (
        <div className="py-5 fixed w-full z-50 bg-[#fff]">
            <div className="container">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="w-14 h-14 bg-main rounded-full mr-3"></div>
                        <div className="text-[32px] leading-10 font-semibold">Brooklyn</div>
                    </div>
                    <Navbar />
                    <div className="hidden lg:flex gap-6 xl:gap-12 items-center text-[16px] font-medium">
                        <div>Home</div>
                        <div>About</div>
                        <div>Process</div>
                        <div>Portfolio</div>
                        <div>Blog</div>
                        <div>Services</div>
                        <Button>Contact</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
