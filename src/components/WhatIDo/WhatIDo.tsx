import { Button } from "../Button/Button";
import { WhatIDoCard } from "./WhatIDoCard/WhatIDoCard";

export const WhatIDo = () => {
    return (
        <div className="py-[150px] bg-[#F0F1F3]">
            <div className="container">
                <div className="block 2xl:flex justify-between items-center">
                    <div className="2xl:w-[529px] text-center 2xl:text-left">
                        <div className="text-[#333333] text-[48px] leading-[56px] font-semibold mb-6">What I do?</div>
                        <div className="text-gray-text text-[18px] leading-[24px] mb-[16px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit
                            non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,
                        </div>
                        <div className="text-[#87909D] text-[50px] md:text-[72px] leading-[84px] font-semibold mb-[50px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit
                            non.
                        </div>
                        <Button className="mb-16 2xl:mb-0">Say Hello!</Button>
                    </div>
                    <div>
                        <WhatIDoCard
                            title="User Experience (UX)"
                            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum."
                            isActive
                        />
                        <WhatIDoCard
                            title="User Interface (UI)"
                            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum."
                        />
                        <WhatIDoCard
                            title="Web Development"
                            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
