interface BlogCardProps {
    img: string;
}

export const BlogCard = ({ img }: BlogCardProps) => {
    return (
        <div className="rounded-lg shadow-xl text-left overflow-hidden">
            <img className="w-full" src={img} alt="" />
            <div className="p-6">
                <div className="text-gray-text text-[12px] leading-4 mb-1">UI-UX DESIGN</div>
                <div className="text-[#132238] font-semibold text-[18px] leading-[24px] mb-3">
                    Product Admin Dashboard
                </div>
                <div className="text-gray-text text-[14px] leading-[20px] mb-[20px]">
                    Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.
                </div>
            </div>
        </div>
    );
};
