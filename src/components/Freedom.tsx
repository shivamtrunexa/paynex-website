import { Plus, Cpu, Zap, Grid3x3, Banknote, Network } from "lucide-react";

const Freedom = () => {
    return (
        <section className="py-20 lg:py-32 bg-[#F3F3F3]">
            <div className="max-w-[1920px] mx-auto px-6 lg:px-12 2xl:px-[320px]">
                {/* Grid Container - 3 columns */}
                <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* First Card - Spans all 3 columns */}
                    <div className="lg:col-span-3 bg-white rounded-[28px] border border-[#45556C]/10 overflow-hidden group">
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
                            <div className="p-12 flex flex-col justify-center">
                                {/* Icon */}
                                <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-lg">
                                    <Banknote className="text-[#1876F4] group-hover:rotate-[-8deg] transition-transform duration-500" absoluteStrokeWidth size={56} strokeWidth={3.5} />
                                </div>

                                {/* Title */}
                                <h2 className="text-[#272729] text-[42px] font-medium leading-[52px] mb-4">
                                    Freedom in<br />
                                    Payment Choices
                                </h2>

                                {/* Description */}
                                <p className="text-[#4A5565] text-[20px] leading-[28px]">
                                    Build your payment ecosystem your way
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Second Card - Hardware-Agnostic */}
                    <div className="bg-white rounded-[24px] border border-[#45556C]/10 p-8 flex flex-col group">
                        {/* Icon */}
                        <div className="mb-6 flex rounded-lg">
                            <Cpu className="text-[#1876F4] group-hover:rotate-[-8deg] transition-transform duration-500" absoluteStrokeWidth size={32} strokeWidth={2} />
                        </div>

                        {/* Title */}
                        <h3 className="text-[#272729] text-[28px] font-medium leading-[36px] mb-3">
                            Hardware-<span className="italic text-[#1876F4]">Agnostic</span>
                        </h3>

                        {/* Description */}
                        <p className="text-[#4A5565] text-[16px] leading-[22px]">
                            Deploy instantly across your existing setup. Our flexibility ensures seamless compatibility with virtually any payment hardware.
                        </p>
                    </div>

                    {/* Third Card - Acquirer-Independent */}
                    <div className="bg-white rounded-[24px] border border-[#45556C]/10 p-8 flex flex-col group">
                        {/* Icon */}
                        <div className="mb-6 flex rounded-lg">
                            <Zap className="text-[#1876F4] group-hover:rotate-[-8deg] transition-transform duration-500" absoluteStrokeWidth size={32} strokeWidth={2} />
                        </div>

                        {/* Title */}
                        <h3 className="text-[#272729] text-[28px] font-medium leading-[36px] mb-3">
                            Acquirer-<span className="italic text-[#1876F4]">Independent</span>
                        </h3>

                        {/* Description */}
                        <p className="text-[#4A5565] text-[16px] leading-[22px]">
                            Easily integrate and switch between multiple bank acquirers to maximize your savings and ensure transaction redundancy.
                        </p>
                    </div>

                    {/* Fourth Card - Omni-channel Ready */}
                    <div className="bg-white rounded-[24px] border border-[#45556C]/10 p-8 flex flex-col group">
                        {/* Icon */}
                        <div className="mb-6 flex rounded-lg">
                            <Network className="text-[#1876F4] group-hover:rotate-[-8deg] transition-transform duration-500" absoluteStrokeWidth size={32} strokeWidth={2} />
                        </div>

                        {/* Title */}
                        <h3 className="text-[#272729] text-[28px] font-medium leading-[36px] mb-3">
                            <span className="italic text-[#1876F4] pr-1">Omni-channel</span> Ready
                        </h3>

                        {/* Description */}
                        <p className="text-[#4A5565] text-[16px] leading-[22px]">
                            Consolidate all physical, online, and mobile payments into one central platform to future-proof your business operations.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Freedom;
