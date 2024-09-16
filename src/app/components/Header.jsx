import { IconHeader } from "./svg/IconHeader";
import { IconText } from "./svg/IconTaxt";

export const Header = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-container max-w-[1280px] inline-flex pt-[50px] pb-[50px] gap-[150px] justify-between">
        <div className="inline-flex max-w-[149px] max-h-[36.23px] justify-center items-center gap-3">
          <IconHeader />
          <IconText />
        </div>
        <div className="max-h-[36.23px] inline-flex justify-center items-center gap-10">
          <button className="text-[#4F5665] text-[16px]">About</button>
          <button className="text-[#4F5665] text-[16px]">Features</button>
          <button className="text-[#4F5665] text-[16px]">Pricing</button>
          <button className="text-[#4F5665] text-[16px]">Testimonials</button>
          <button className="text-[#4F5665] text-[16px]">Help</button>
        </div>
        <div className="max-h-[36.23px] inline-flex justify-center items-center gap-10">
          <button>Sign In</button>
          <button className="w-[150px] h-[45px] border border-[#F53855] rounded-[20px] text-[16px] text-[#F53855]">Sign Up</button>
        </div>
      </div>
    </div>
  );
};
