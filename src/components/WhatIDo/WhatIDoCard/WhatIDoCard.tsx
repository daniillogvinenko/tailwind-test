interface WhatIDoCardProps {
    isActive?: boolean;
    title: string;
    subtitle: string;
}

export const WhatIDoCard = ({ isActive, subtitle, title }: WhatIDoCardProps) => {
    return (
        <div
            className={`w-full 2xl:w-[648px] mb-[24px] shadow-2xl p-8 bg-[#fff] rounded-md border-l-4 border-main ${
                isActive ? "border-solid" : ""
            }`}
        >
            <div className="text-[#132238] font-semibold text-[24px] mb-4">{title}</div>
            <div className="text-gray-text text-[16px] leading-6">{subtitle}</div>
        </div>
    );
};
