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
        <section className="py-[50px] xl:py-[100px] bg-[#F3F3F3]">
            {/* Mobile Layout */}
            <div className="xl:hidden w-full px-7 flex flex-col justify-center items-center gap-20">
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
                    <div className="w-full p-7 bg-white rounded-3xl border border-[#45556C]/10 flex flex-col justify-start items-start gap-6">
                        {/* Icon */}
                        <Cpu className="w-9 h-9 text-[#1876F4]" strokeWidth={1.7} />
                        {/* Content */}
                        <div className="w-full flex flex-col justify-center items-start gap-3">
                            {/* Title */}
                            <h3 className="w-full text-[28px] font-medium leading-9">
                                <span className="text-[#272729]">Hardware-</span>
                                <span className="text-[#1876F4] italic">Agnostic</span>
                            </h3>
                            {/* Description */}
                            <p className="w-full text-[#4A5565] text-base font-normal leading-6">
                                Deploy instantly across existing setup. Our flexibility ensures seamless compatibility with any payment hardware.
                            </p>
                        </div>
                    </div>

                    {/* Third Card - Acquirer-Independent */}
                    <div className="w-full p-7 bg-white rounded-3xl border border-[#45556C]/10 flex flex-col justify-start items-start gap-6">
                        {/* Icon */}
                        <Zap className="w-9 h-9 text-[#1876F4]" strokeWidth={1.7} />
                        {/* Content */}
                        <div className="w-full flex flex-col justify-center items-start gap-3">
                            {/* Title */}
                            <h3 className="w-full text-[28px] font-medium leading-9">
                                <span className="text-[#272729]">Acquirer-</span>
                                <span className="text-[#1876F4] italic">Independent</span>
                            </h3>
                            {/* Description */}
                            <p className="w-full text-[#4A5565] text-base font-normal leading-6">
                                Easily integrate and switch between multiple bank acquirers to maximise your savings & ensure transaction redundancy.
                            </p>
                        </div>
                    </div>

                    {/* Fourth Card - Omni-channel Ready */}
                    <div className="w-full p-7 bg-white rounded-3xl border border-[#45556C]/10 flex flex-col justify-start items-start gap-6">
                        {/* Icon */}
                        <Network className="w-9 h-9 text-[#1876F4]" strokeWidth={1.7} />
                        {/* Content */}
                        <div className="w-full flex flex-col justify-center items-start gap-3">
                            {/* Title */}
                            <h3 className="w-full text-[28px] font-medium leading-9">
                                <span className="text-[#1876F4] italic">Omni-channel </span>
                                <span className="text-[#272729]">Ready</span>
                            </h3>
                            {/* Description */}
                            <p className="w-full text-[#4A5565] text-base font-normal leading-6">
                                Consolidate all physical, online & mobile payments into one central platform to future-proof your business operations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden xl:block max-w-[1920px] mx-auto px-6 lg:px-12 xl:px-[200px] 3xl:px-[320px]">
                {/* Grid Container - 3 columns */}
                <div className="xl:w-[1152px] 3xl:w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* First Card - Spans all 3 columns */}
                    <div className="lg:col-span-3 bg-white xl:rounded-[22px] 3xl:rounded-[28px] border border-[#45556C]/10 overflow-hidden group">
                        <div className="grid lg:grid-cols-2 gap-0 pt-3 pb-3 pl-3">
                            {/* Left - Image */}
                            <div className="relative h-[400px] lg:h-auto overflow-hidden rounded-[20px]">
                                <img
                                    src="/payment-choices/keyboard.png"
                                    alt="Payment Choices"
                                    className="w-full h-full object-cover rounded-[20px] group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Right - Content */}
                            <div className="xl:p-9 3xl:p-12 flex flex-col justify-center">
                                {/* Icon */}
                                <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-lg">
                                    <Banknote className="text-[#1876F4] group-hover:rotate-[-8deg] transition-transform duration-500" absoluteStrokeWidth size={56} strokeWidth={3.5} />
                                </div>

                                {/* Title */}
                                <h2 className="text-[#272729] xl:text-[34px] 3xl:text-[42px] font-medium xl:leading-[42px] 3xl:leading-[52px] mb-4">
                                    Freedom in<br />
                                    Payment Choices
                                </h2>

                                {/* Description */}
                                <p className="text-[#4A5565] xl:text-base 3xl:text-[20px] xl:leading-6 3xl:leading-[28px]">
                                    Build your payment ecosystem your way
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Second Card - Hardware-Agnostic */}
                    <div className="bg-white xl:rounded-[20px] 3xl:rounded-[24px] border border-[#45556C]/10 xl:p-6 3xl:p-8 flex flex-col group">
                        {/* Icon */}
                        <div className="mb-6 flex rounded-lg">
                            <Cpu className="text-[#1876F4] group-hover:rotate-[-8deg] transition-transform duration-500" absoluteStrokeWidth size={32} strokeWidth={2} />
                        </div>

                        {/* Title */}
                        <h3 className="text-[#272729] xl:text-[22px] 3xl:text-[28px] font-medium xl:leading-[30px] 3xl:leading-[36px] mb-3">
                            Hardware-<span className="italic text-[#1876F4]">Agnostic</span>
                        </h3>

                        {/* Description */}
                        <p className="text-[#4A5565] text-[14px] leading-[20px]">
                            Deploy instantly across your existing setup. Our flexibility ensures seamless compatibility with virtually any payment hardware.
                        </p>
                    </div>

                    {/* Third Card - Acquirer-Independent */}
                    <div className="bg-white xl:rounded-[20px] 3xl:rounded-[24px] border border-[#45556C]/10 xl:p-6 3xl:p-8 flex flex-col group">
                        {/* Icon */}
                        <div className="mb-6 flex rounded-lg">
                            <Zap className="text-[#1876F4] group-hover:rotate-[-8deg] transition-transform duration-500" absoluteStrokeWidth size={32} strokeWidth={2} />
                        </div>

                        {/* Title */}
                        <h3 className="text-[#272729] xl:text-[22px] 3xl:text-[28px] font-medium xl:leading-[30px] 3xl:leading-[36px] mb-3">
                            Acquirer-<span className="italic text-[#1876F4]">Independent</span>
                        </h3>

                        {/* Description */}
                        <p className="text-[#4A5565] text-[14px] leading-[20px]">
                            Easily integrate and switch between multiple bank acquirers to maximize your savings and ensure transaction redundancy.
                        </p>
                    </div>

                    {/* Fourth Card - Omni-channel Ready */}
                    <div className="bg-white xl:rounded-[20px] 3xl:rounded-[24px] border border-[#45556C]/10 xl:p-6 3xl:p-8 flex flex-col group">
                        {/* Icon */}
                        <div className="mb-6 flex rounded-lg">
                            <Network className="text-[#1876F4] group-hover:rotate-[-8deg] transition-transform duration-500" absoluteStrokeWidth size={32} strokeWidth={2} />
                        </div>

                        {/* Title */}
                        <h3 className="text-[#272729] xl:text-[22px] 3xl:text-[28px] font-medium xl:leading-[30px] 3xl:leading-[36px] mb-3">
                            <span className="italic text-[#1876F4] pr-1">Omni-channel</span> Ready
                        </h3>

                        {/* Description */}
                        <p className="text-[#4A5565] text-[14px] leading-[20px]">
                            Consolidate all physical, online, and mobile payments into one central platform to future-proof your business operations.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Freedom;

