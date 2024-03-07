interface WorkProcessCardProps {
    img: string;
    title: string;
}

export const WorkProcessCard = ({ img, title }: WorkProcessCardProps) => {
    return (
        <div className="p-8 rounded-xl shadow-xl bg-[#FFF] mb-6 w-full md:w-[312px] text-center md:text-left">
            <img src={img} alt="" className="mb-8 mx-auto md:mx-0" />
            <div className="text-[#132238] text-[20px] leading-6 font-semibold mb-3">{title}</div>
            <div className="text-[16px] leading-6 text-[#556070]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.
            </div>
        </div>
    );
};
