import img1 from "../../assets/portfolio/1.png";
import img2 from "../../assets/portfolio/2.png";
import img3 from "../../assets/portfolio/3.png";
import img4 from "../../assets/portfolio/4.png";
import img5 from "../../assets/portfolio/5.png";
import img6 from "../../assets/portfolio/6.png";
import { Button } from "../Button/Button";
import { PortoflioCard } from "./PortoflioCard/PortoflioCard";

export const Portfolio = () => {
    return (
        <div className="py-[100px] text-center">
            <div className="container">
                <div className="text-[#132238] text-[48px] leading-[56px] font-semibold mb-6">Portfolio</div>
                <div className="text-gray-text text-[18px] leading-[24px] w-full px-9 lg:w-[577px] mx-auto mb-[70px]">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                    alteration.
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[24px] mb-[50px]">
                    <PortoflioCard img={img1} />
                    <PortoflioCard img={img2} />
                    <PortoflioCard img={img3} />
                    <PortoflioCard img={img4} />
                    <PortoflioCard img={img5} />
                    <PortoflioCard img={img6} />
                </div>
                <Button>More Project</Button>
            </div>
        </div>
    );
};
