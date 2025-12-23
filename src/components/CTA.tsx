import { ArrowRight, MoveRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="self-stretch px-[320px] py-[100px] bg-[#F3F3F3] flex flex-col justify-start items-center gap-9">
      <div className="flex flex-col justify-start items-center gap-9">
        {/* Content */}
        <div className="flex flex-col justify-start items-center gap-4">
          {/* Heading */}
          <div className="flex justify-start items-center gap-2.5">
            <h2 className="text-center text-[#272729] text-[60px] font-medium leading-[72px]">
              Crafting the Future of Payments
            </h2>
          </div>

          {/* Description */}
          <div className="flex justify-center items-center gap-2.5">
            <p className="text-[#45556C] text-base font-normal leading-[26px]">
              Revolutionize the way your business pays and gets paid, making every transaction smooth, trustworthy and streamlined.
            </p>
          </div>
        </div>

        {/* Button */}
        <button className="px-6 py-3.5 relative bg-[#1876F4] overflow-hidden rounded-[14px] flex justify-center items-center gap-2.5 group hover:shadow-[-3px_2px_7px_rgba(79,79,79,0.15)] transition-all duration-300 cursor-pointer">
          <span className="text-center text-white text-sm font-medium leading-5 relative z-10">
            Get in Touch
          </span>
          <div className="w-5 h-5 relative overflow-hidden flex items-center justify-center z-10">
            <MoveRight className="w-4 h-4 text-white" />
          </div>
          {/* Shine effect - animated on hover */}
          <div
            className="w-[100px] h-[100px] absolute -left-[120px] top-1/2 -translate-y-1/2 rotate-[-45deg] group-hover:left-[180px] transition-all duration-500 ease-in-out pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0) 100%)',
              filter: 'blur(4px)'
            }}
          />
        </button>
      </div>
    </section>
  );
};

export default CTA;
