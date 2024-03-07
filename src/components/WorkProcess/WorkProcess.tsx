import img1 from "../../assets/workProcess/1.png";
import img2 from "../../assets/workProcess/2.png";
import img3 from "../../assets/workProcess/3.png";
import img4 from "../../assets/workProcess/4.png";
import { WorkProcessCard } from "./WorkProcessCard/WorkProcessCard";

export const WorkProcess = () => {
    return (
        <div className="bg-[#F0F1F3] pt-[248px] pb-[140px] mt-[-96px] z-0">
            <div className="container">
                <div className="block xl:flex gap-[143px]">
                    <div className="flex flex-col justify-center text-center xl:text-left">
                        <div className="font-semibold text-[48px] leading-[56px] mb-6">Work Process</div>
                        <div className="text-gray-text text-[18px] leading-8 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit
                            non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,
                        </div>
                        <div className="text-gray-text text-[18px] leading-8 mb-16 xl:mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit
                            non.
                        </div>
                    </div>
                    <div className="block md:flex justify-center xl:justify-normal gap-6">
                        <div className="translate-y-[-24px] flex flex-col items-center md:block">
                            <WorkProcessCard img={img1} title="1. Research" />
                            <WorkProcessCard img={img2} title="2. Analyze" />
                        </div>
                        <div className="flex flex-col items-center md:block">
                            <WorkProcessCard img={img3} title="3. Design" />
                            <WorkProcessCard img={img4} title="4. Launch" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
