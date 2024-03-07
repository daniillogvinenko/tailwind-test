import { Button } from "../Button/Button";
import arrow from "../../assets/DiscussYourProject/arrow.png";

export const DiscussYourProject = () => {
    return (
        <div className="bg-[#132238] text-[#fff] px-9 py-[100px] text-center">
            <div className="text-[48px] leading-[56px] font-semibold mb-8">
                Do you have Project Idea?
                <br />
                Let's discuss your project!
            </div>
            <div className="text-[#A5ACB5] text-[18px] leading-6 w-full px-24 lg:w-[581px] mx-auto mb-8">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration.
            </div>
            <Button iconAfter={<img src={arrow} />}>Let’s work Together</Button>
        </div>
    );
};
