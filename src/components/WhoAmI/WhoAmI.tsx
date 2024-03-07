import img1 from "../../assets/whoAmI/1.png";
import img2 from "../../assets/whoAmI/2.png";
import img3 from "../../assets/whoAmI/3.png";
import img4 from "../../assets/whoAmI/4.png";
import img5 from "../../assets/whoAmI/5.png";
import img6 from "../../assets/whoAmI/6.png";
import img7 from "../../assets/whoAmI/7.png";

import { Button } from "../Button/Button";

export const WhoAmI = () => {
    return (
        <div className="relative z-10">
            <div className="container">
                <div className="shadow-2xl block xl:flex justify-between p-[50px] md:p-[70px] lg:p-[112px] rounded-[16px] bg-[#fff]">
                    <div className="lg:min-w-[424px] xl:mr-[136px] text-center">
                        <img className="ml-[50%] translate-x-[-50%]" src={img1} alt="" />
                        <div className="flex justify-center relative translate-y-[-50%]">
                            <div className="inline-flex shadow-lg p-3 rounded-[4px] bg-[#fff]">
                                <div className="p-[15px]">
                                    <img src={img3} alt="" />
                                </div>
                                <div className="p-[15px]">
                                    <img src={img4} alt="" />
                                </div>
                                <div className="p-[15px]">
                                    <img src={img5} alt="" />
                                </div>
                                <div className="p-[15px] bg-main rounded-[4px]">
                                    <img src={img6} alt="" />
                                </div>
                                <div className="p-[15px]">
                                    <img src={img7} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center text-center lg:text-left">
                        <div>
                            <div className="font-semibold text-[38px] leading-[50px] text-[#132238] mb-8">
                                I am Professional User Experience Designer
                            </div>
                            <div className="text-gray-text text-[18px] leading-[24px] mb-[16px]">
                                I design and develop services for customers specializing creating stylish, modern
                                websites, web services and online stores. My passion is to design digital user
                                experiences.
                            </div>
                            <div className="text-gray-text text-[18px] leading-[24px] mb-[32px]">
                                I design and develop services for customers specializing creating stylish, modern
                                websites, web services.
                            </div>
                            <div className="flex gap-4 justify-center lg:justify-normal">
                                <Button>My Project</Button>
                                <Button iconBefore={<img style={{ display: "inline" }} src={img2} />} variant="outline">
                                    Download CV
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
