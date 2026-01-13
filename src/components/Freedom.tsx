import { Banknote, Cpu, Zap, Network } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Freedom = () => {
    const imageRef = useRef(null);
    const isInView = useInView(imageRef, {
        once: false,
        margin: "-40% 0px -40% 0px" // Triggers when element is in center of viewport
    });

    return (
        <section className="py-[50px] md:py-[60px] lg:py-[80px] xl:py-[100px] bg-[#F3F3F3]">
            {/* Mobile Layout */}
            <div className="md:hidden w-full px-7 flex flex-col justify-center items-center gap-20">
                {/* Cards Container */}
                <div className="w-full flex flex-col justify-start items-start gap-6">
                    {/* First Card - Freedom in Payment Choices */}
                    <div className="w-full pt-3 pb-7 px-3 bg-white rounded-3xl border border-[#45556C]/10 flex flex-col justify-start items-start gap-6">
                        {/* Image with scale animation */}
                        <div ref={imageRef} className="w-full overflow-hidden rounded-[14px]">
                            <motion.img
                                src="/payment-choices/keyboard.png"
                                alt="Payment Choices"
                                className="w-full h-auto rounded-[14px] object-cover"
                                animate={{
                                    scale: isInView ? 1.1 : 1
                                }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut"
                                }}
                            />
                        </div>
                        {/* Content */}
                        <div className="w-full px-4 flex flex-col justify-start items-start gap-4">
                            {/* Icon */}
                            <Banknote className="w-9 h-9 text-[#1876F4]" strokeWidth={1.7} />
                            {/* Title */}
                            <h2 className="w-full text-[#272729] text-[32px] font-medium leading-10">
                                Freedom in<br />Payment Choices
                            </h2>
                            {/* Description */}
                            <p className="w-full text-[#45556C] text-lg font-normal leading-6">
                                Build your payment ecosystem<br />your way
                            </p>
                        </div>
                    </div>

                    {/* Second Card - Hardware-Agnostic */}
                    <div className="w-full p-9 bg-white rounded-[24px] border-[1.5px] border-[#45556C]/10 flex flex-col justify-start items-start gap-8">
                        {/* Icon */}
                        <Cpu className="w-8 h-8 text-[#1876F4]" strokeWidth={1.7} />
                        {/* Title */}
                        <h3 className="w-full text-[28px] font-medium leading-9">
                            <span className="text-[#272729]">Hardware-</span>
                            <span className="text-[#1876F4] italic">Agnostic</span>
                        </h3>
                    </div>

                    {/* Third Card - Acquirer-Independent */}
                    <div className="w-full p-9 bg-white rounded-[24px] border-[1.5px] border-[#45556C]/10 flex flex-col justify-start items-start gap-8">
                        {/* Icon */}
                        <Zap className="w-8 h-8 text-[#1876F4]" strokeWidth={1.7} />
                        {/* Title */}
                        <h3 className="w-full text-[28px] font-medium leading-9">
                            <span className="text-[#272729]">Acquirer-</span>
                            <span className="text-[#1876F4] italic">Independent</span>
                        </h3>
                    </div>

                    {/* Fourth Card - Omni-channel Ready */}
                    <div className="w-full p-9 bg-white rounded-[24px] border-[1.5px] border-[#45556C]/10 flex flex-col justify-start items-start gap-8">
                        {/* Icon */}
                        <Network className="w-8 h-8 text-[#1876F4]" strokeWidth={1.7} />
                        {/* Title */}
                        <h3 className="w-full text-[28px] font-medium leading-9">
                            <span className="text-[#1876F4] italic">Omni-channel  </span>
                            <span className="text-[#272729]">Ready</span>
                        </h3>
                    </div>
                </div>
            </div>

            {/* Tablet & Desktop Layout */}
            <div className="hidden md:block max-w-[1920px] mx-auto px-10 lg:px-12 xl:px-[200px] 3xl:px-[320px]">
                {/* Grid Container - 3 columns */}
                <div className="md:w-full lg:w-[900px] xl:w-[1152px] 3xl:w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">

                    {/* First Card - Spans all 3 columns */}
                    <div className="md:col-span-3 bg-white md:rounded-[18px] lg:rounded-[20px] xl:rounded-[22px] 3xl:rounded-[28px] border border-[#45556C]/10 overflow-hidden group">
                        <div className="grid md:grid-cols-2 gap-0 pt-2 md:pt-3 pb-2 md:pb-3 pl-2 md:pl-3">
                            {/* Left - Image */}
                            <div className="relative h-[280px] md:h-[280px] lg:h-[350px] xl:h-auto overflow-hidden rounded-[16px] lg:rounded-[20px]">
                                <img
                                    src="/payment-choices/keyboard.png"
                                    alt="Payment Choices"
                                    className="w-full h-full object-cover rounded-[20px] group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Right - Content */}
                            <div className="md:p-6 lg:p-8 xl:p-9 3xl:p-12 flex flex-col justify-center">
                                {/* Icon */}
                                <div className="w-10 md:w-12 h-10 md:h-12 mb-4 md:mb-6 flex items-center justify-center rounded-lg">
                                    <Banknote className="text-[#1876F4] group-hover:rotate-[-8deg] transition-transform duration-500" absoluteStrokeWidth size={48} strokeWidth={3.5} />
                                </div>

                                {/* Title */}
                                <h2 className="text-[#272729] md:text-[28px] lg:text-[32px] xl:text-[34px] 3xl:text-[42px] font-medium md:leading-[36px] lg:leading-[40px] xl:leading-[42px] 3xl:leading-[52px] mb-3 md:mb-4">
                                    Freedom in<br />
                                    Payment Choices
                                </h2>

                                {/* Description */}
                                <p className="text-[#4A5565] md:text-sm lg:text-base xl:text-base 3xl:text-[20px] md:leading-5 lg:leading-6 xl:leading-6 3xl:leading-[28px]">
                                    Build your payment ecosystem your way
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Second Card - Hardware-Agnostic */}
                    <div className="bg-white rounded-[24px] border-[1.5px] border-[#45556C]/10 p-9 flex flex-col justify-start items-start gap-8 group h-full">
                        {/* Icon */}
                        <div className="w-[42px] h-[42px] flex items-center justify-center">
                            <Cpu className="text-[#1876F4] group-hover:rotate-[-8deg] transition-transform duration-500" size={35} strokeWidth={2.5} absoluteStrokeWidth />
                        </div>

                        {/* Title */}
                        <h3 className="text-[#272729] text-[36px] font-medium leading-[48px]">
                            Hardware-<br /><span className="italic text-[#1876F4]">Agnostic</span>
                        </h3>
                    </div>

                    {/* Third Card - Acquirer-Independent */}
                    <div className="bg-white rounded-[24px] border-[1.5px] border-[#45556C]/10 p-9 flex flex-col justify-start items-start gap-8 group h-full">
                        {/* Icon */}
                        <div className="w-[42px] h-[42px] flex items-center justify-center">
                            <Zap className="text-[#1876F4] group-hover:rotate-[-8deg] transition-transform duration-500" size={35} strokeWidth={2.5} absoluteStrokeWidth />
                        </div>

                        {/* Title */}
                        <h3 className="text-[#272729] text-[36px] font-medium leading-[48px]">
                            Acquirer-<br /><span className="italic text-[#1876F4]">Independent</span>
                        </h3>
                    </div>

                    {/* Fourth Card - Omni-channel Ready */}
                    <div className="bg-white rounded-[24px] border-[1.5px] border-[#45556C]/10 p-9 flex flex-col justify-start items-start gap-8 group h-full">
                        {/* Icon */}
                        <div className="w-[42px] h-[42px] flex items-center justify-center">
                            <Network className="text-[#1876F4] group-hover:rotate-[-8deg] transition-transform duration-500" size={35} strokeWidth={2.5} absoluteStrokeWidth />
                        </div>

                        {/* Title */}
                        <h3 className="text-[#272729] text-[36px] font-medium leading-[48px]">
                            <span className="italic text-[#1876F4]">Omni-channel</span><br /> Ready
                        </h3>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Freedom;

