import img1 from "../../assets/blog/1.png";
import img2 from "../../assets/blog/2.png";
import img3 from "../../assets/blog/3.png";
import img4 from "../../assets/blog/4.png";
import { BlogCard } from "./BlogCard/BlogCard";

export const Blog = () => {
    return (
        <div className="text-center py-[100px]">
            <div className="container">
                <div className="text-[#132238] text-[48px] leading-[56px] font-semibold mb-6">Blog</div>
                <div className="text-gray-text text-[18px] leading-[24px] w-full px-9 lg:w-[577px] mx-auto mb-[70px]">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                    alteration.
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <BlogCard img={img1} />
                    <BlogCard img={img2} />
                    <BlogCard img={img3} />
                    <BlogCard img={img4} />
                </div>
            </div>
        </div>
    );
};
