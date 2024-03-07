import { Button } from "../Button/Button";
import img1 from "../../assets/hero/1.png";

export const HeroSection = () => {
    return (
        <div className="py-[178px]">
            <div className="container">
                <div className="flex justify-between">
                    <div className="flex flex-col justify-between">
                        <div className="text-center xl:text-left">
                            <div className="text-[50px] md:text-[72px] leading-[84px] font-semibold xl:w-[579px] mb-6">
                                Hello, I’m Brooklyn Gilbert
                            </div>
                            <div className="text-[18px] leading-6 xl:w-[648px] text-gray-text mb-6">
                                I'm a Freelance <span className="text-[#000]">UI/UX Designer</span> and{" "}
                                <span className="text-[#000]">Developer</span> based in London, England. I strives to
                                build immersive and beautiful web applications through carefully crafted code and
                                user-centric design.
                            </div>
                            <img className="block xl:hidden w-[400px] 2xl:w-[536px] mb-8 mx-auto" src={img1} alt="" />
                            <Button className="mb-10 xl:mb-0">Say Hello!</Button>
                        </div>
                        <div className="flex justify-between bg-[#EDD8FF88] gap-[5px] rounded-[6px]">
                            <div className="w-full flex flex-col justify-center py-[17px]">
                                <div className="text-center text-[32px] leading-10 font-semibold text-[#424E60] mb-2">
                                    15 Y.
                                </div>
                                <div className="text-center text-gray-text text-[16px] leading-6">Experience</div>
                            </div>
                            <div className="w-full flex flex-col justify-center py-[17px]">
                                <div className="text-center text-[32px] leading-10 font-semibold text-[#424E60] mb-2">
                                    250+
                                </div>
                                <div className="text-center text-gray-text text-[16px] leading-6">
                                    Project Completed
                                </div>
                            </div>
                            <div className="w-full flex flex-col justify-center py-[17px]">
                                <div className="text-center text-[32px] leading-10 font-semibold text-[#424E60] mb-2">
                                    58
                                </div>
                                <div className="text-center text-gray-text text-[16px] leading-6">Happy Client</div>
                            </div>
                        </div>
                    </div>
                    <img
                        className="hidden xl:block w-[400px] 2xl:w-[536px] rounded-[25px] shadow-2xl"
                        src={img1}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};
