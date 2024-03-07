import img1 from "../../assets/happyClients/1.png";
import img2 from "../../assets/happyClients/2.png";
import img3 from "../../assets/happyClients/3.png";
import img4 from "../../assets/happyClients/4.png";
import img5 from "../../assets/happyClients/5.png";
import img6 from "../../assets/happyClients/6.png";

export const HappyClients = () => {
    return (
        <div className="text-center py-[100px]">
            <div className="container">
                <div className="text-[#132238] text-[48px] leading-[56px] font-semibold mb-6">Happy Clients</div>
                <div className="text-gray-text text-[18px] leading-[24px] w-full px-9 lg:w-[577px] mx-auto mb-[24px]">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                    alteration.
                </div>
                <div className="flex flex-wrap justify-around">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                    <img src={img6} alt="" />
                </div>
            </div>
        </div>
    );
};
