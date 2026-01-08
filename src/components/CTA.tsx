import { MoveRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="w-full py-20 xl:py-[100px] px-7 xl:px-[200px] 3xl:px-[320px] bg-white xl:bg-[#F3F3F3] flex flex-col justify-start items-center gap-9">
      {/* Mobile Layout */}
      <div className="xl:hidden w-full flex flex-col justify-start items-center gap-9">
        {/* Content */}
        <div className="w-full flex flex-col justify-start items-center gap-4">
          {/* Heading */}
          <div className="w-full flex justify-start items-center gap-2.5">
            <h2 className="flex-1 text-center text-[#272729] text-[40px] font-medium leading-[48px]">
              Crafting the Future of Payments
            </h2>
          </div>

          {/* Description */}
          <div className="w-full flex justify-center items-center gap-2.5">
            <p className="flex-1 text-center text-[#45556C] text-base font-normal leading-6">
              Revolutionise the way your business pays and gets paid, making every transaction smooth,<br />trustworthy and streamlined.
            </p>
          </div>
        </div>

        {/* Button */}
        <button className="w-40 px-6 py-3.5 relative bg-[#1876F4] overflow-hidden rounded-[14px] flex justify-start items-center gap-2.5 group hover:shadow-[-3px_2px_7px_rgba(79,79,79,0.15)] transition-all duration-300 cursor-pointer">
          <span className="text-center text-white text-sm font-medium leading-5 relative z-10">
            Get in Touch
          </span>
          <div className="w-5 h-5 relative overflow-hidden flex items-center justify-center z-10">
            <MoveRight className="w-4 h-4 text-white" strokeWidth={1.5} />
          </div>
          {/* Shine effect - animated on hover */}
          <div
            className="w-[72px] h-16 absolute -left-[90px] top-1/2 -translate-y-1/2 rotate-[-45deg] group-hover:left-[180px] transition-all duration-500 ease-in-out pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.30) 50%, rgba(255, 255, 255, 0) 100%)',
              filter: 'blur(7.2px)'
            }}
          />
        </button>
      </div>

      {/* Desktop Layout */}
      <div className="hidden xl:flex flex-col justify-start items-center gap-9">
        {/* Content */}
        <div className="flex flex-col justify-start items-center gap-4">
          {/* Heading */}
          <div className="flex justify-start items-center gap-2.5">
            <h2 className="text-center text-[#272729] xl:text-[48px] 3xl:text-[60px] font-medium xl:leading-[56px] 3xl:leading-[72px]">
              Crafting the Future of Payments
            </h2>
          </div>

          {/* Description */}
          <div className="flex justify-center items-center gap-2.5">
            <p className="text-[#45556C] xl:text-base 3xl:text-xl font-normal xl:leading-6 3xl:leading-7">
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

