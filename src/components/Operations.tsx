import { Archive, Lock, TicketSlash, TrendingUp } from "lucide-react";

const Operations = () => {
    return (
        <section className="w-full h-full px-7 py-[50px] xl:px-0 xl:py-[80px] bg-[#F3F3F3] overflow-hidden flex flex-col justify-center items-center gap-[50px] xl:gap-[100px]">
            {/* Header Container */}
            <div className="w-full flex flex-col justify-start items-center gap-3">
                {/* Heading 1 */}
                <div className="w-full flex justify-center items-center gap-2.5">
                    <h2 className="text-center text-[#272729] text-[40px] xl:text-[48px] 3xl:text-[60px] font-medium leading-[48px] xl:leading-[56px] 3xl:leading-[72px]">
                        Supported Operations
                    </h2>
                </div>

                {/* Paragraph */}
                <div className="w-full flex justify-center items-center gap-2.5">
                    <p className="flex-1 text-center text-[#4A5565] text-base xl:text-xl font-normal leading-6 xl:leading-7">
                        Comprehensive payment capabilities built for every business flow
                    </p>
                </div>
            </div>

            {/* Mobile Layout - Stacked Cards */}
            <div className="xl:hidden w-full flex flex-col justify-center items-start gap-6">
                {/* Purchase & Tips - Blue Card */}
                <div className="w-full p-7 bg-[#1876F4] overflow-hidden rounded-3xl flex flex-col justify-start items-center gap-6">
                    <img
                        className="w-[124px] h-[124px]"
                        src="/operations/purchase & tips-mobile.png"
                        alt="Purchase & Tips"
                    />
                    <div className="w-full flex flex-col justify-start items-start gap-4">
                        <div className="w-full flex justify-start items-center gap-2.5">
                            <h3 className="text-white text-2xl font-semibold leading-8">
                                Purchase & Tips
                            </h3>
                        </div>
                        <p className="w-full text-white text-base font-normal leading-6">
                            Smooth checkout with tip-enabled transactions
                        </p>
                    </div>
                </div>

                {/* Reversals & Batch Closing - Dark Card */}
                <div className="w-full p-7 bg-[#171717] overflow-hidden rounded-3xl flex justify-start items-end gap-2.5">
                    <div className="flex-1 flex flex-col justify-start items-start gap-5">
                        <Archive color="#fff" size={36} strokeWidth={2} className="w-9 h-9" />
                        <div className="w-full flex flex-col justify-start items-start gap-4">
                            <div className="w-full flex justify-start items-center gap-2.5">
                                <h3 className="flex-1 text-white text-2xl font-semibold leading-8">
                                    Reversals & Batch Closing
                                </h3>
                            </div>
                            <p className="w-full text-[#EFEFEF] text-base font-normal leading-6">
                                Automated settlement for simplified reconciliation
                            </p>
                        </div>
                    </div>
                </div>

                {/* Incremental Pre-Auth - White Card */}
                <div className="w-full p-7 bg-white overflow-hidden rounded-3xl flex flex-col justify-end items-start gap-5">
                    <TrendingUp size={36} strokeWidth={2} className="w-9 h-9 text-[#272729]" />
                    <div className="w-full flex flex-col justify-start items-start gap-4">
                        <div className="w-full flex justify-start items-center gap-2.5">
                            <h3 className="flex-1 text-[#272729] text-2xl font-semibold leading-8">
                                Incremental Pre-Auth
                            </h3>
                        </div>
                        <p className="w-full text-[#4A5565] text-base font-normal leading-6">
                            Adjust authorisation amounts in the real time
                        </p>
                    </div>
                </div>

                {/* Cashback & Refunds - White Card */}
                <div className="w-full p-7 bg-white overflow-hidden rounded-3xl flex justify-start items-end gap-2.5">
                    <div className="flex-1 flex flex-col justify-start items-start gap-5">
                        <TicketSlash size={36} strokeWidth={2} className="w-9 h-9 text-[#272729]" />
                        <div className="w-full flex flex-col justify-start items-start gap-4">
                            <div className="w-full flex justify-start items-center gap-2.5">
                                <h3 className="flex-1 text-[#272729] text-2xl font-semibold leading-8">
                                    Cashback & Refunds
                                </h3>
                            </div>
                            <p className="w-full text-[#4A5565] text-base font-normal leading-6">
                                Smooth checkout with tip-enabled transactions
                            </p>
                        </div>
                    </div>
                </div>

                {/* Pre-Auth & Completion - Dark Card */}
                <div className="w-full p-7 bg-[#171717] overflow-hidden rounded-3xl flex justify-start items-end gap-2.5">
                    <div className="flex-1 flex flex-col justify-start items-start gap-5">
                        <Lock color="#fff" size={36} strokeWidth={2} className="w-9 h-9" />
                        <div className="w-full flex flex-col justify-start items-start gap-4">
                            <div className="w-full flex justify-start items-center gap-2.5">
                                <h3 className="text-white text-2xl font-semibold leading-8">
                                    Pre-Auth & Completion
                                </h3>
                            </div>
                            <p className="w-full text-[#EFEFEF] text-base font-normal leading-6">
                                Smooth checkout with tip-enabled transactions
                            </p>
                        </div>
                    </div>
                </div>

                {/* Multi-merchant - White Card with Image */}
                <div className="w-full p-7 bg-white overflow-hidden rounded-3xl flex flex-col justify-center items-center gap-6">
                    <img
                        className="w-[124px] h-[124px]"
                        src="/operations/coin-mobile.png"
                        alt="Multi-merchant"
                    />
                    <div className="w-full flex flex-col justify-start items-start gap-4">
                        <h3 className="w-full text-[#272729] text-2xl font-semibold leading-8">
                            Multi-merchant,<br />Language & Currency
                        </h3>
                        <p className="w-full text-[#4A5565] text-base font-normal leading-6">
                            Smooth checkout with tip-enabled transactions
                        </p>
                    </div>
                </div>
            </div>

            {/* Desktop Layout - Grid */}
            <div className="hidden xl:flex w-[1280px] mx-auto justify-start items-center gap-6 xl:scale-90 3xl:scale-100">
                {/* Left Column - Operation Details */}
                <div className="flex-1 h-[624px] flex flex-col justify-between items-start">
                    {/* Purchase & Tips - Large Blue Card */}
                    <div className="group w-full h-[272px] px-16 py-8 relative bg-[#1876F4] overflow-hidden rounded-[28px] flex flex-col justify-center items-end gap-2.5 cursor-pointer">
                        <img
                            className="w-full h-[272px] left-[0px] absolute transition-transform duration-300 group-hover:rotate-[8deg]"
                            src="/operations/purchase & tips.png"
                            alt=""
                        />
                        <div className="w-[213px] flex flex-col justify-start items-start gap-4 relative z-10">
                            <div className="w-full flex justify-start items-center gap-2.5">
                                <h3 className="text-white text-[28px] font-semibold leading-9">
                                    Purchase & Tips
                                </h3>
                            </div>
                            <p className="w-full text-white text-lg font-normal xl:leading-6 3xl:leading-[26px]">
                                Smooth checkout with<br />tip-enabled transactions
                            </p>
                        </div>
                    </div>

                    {/* Bottom Row - Reversals & Incremental */}
                    <div className="w-full flex justify-start items-center gap-6">
                        {/* Reversals & Batch Closing - Dark Card */}
                        <div className="group w-[302px] h-[328px] p-8 bg-[#171717] overflow-hidden rounded-[28px] flex justify-start items-end gap-2.5 cursor-pointer">
                            <div className="w-[222px] flex flex-col justify-start items-start gap-5">
                                <Archive color="#fff" size={40} strokeWidth={1.5} className="w-12 h-12 group-hover:rotate-[-8deg] transition-all" />
                                <div className="w-full flex justify-start items-center gap-2.5">
                                    <h3 className="text-white text-[28px] font-semibold leading-9">
                                        Reversals<br />& Batch Closing
                                    </h3>
                                </div>

                                <p className="w-full text-[#EFEFEF] text-base font-normal leading-6">
                                    Automated settlement for simplified reconciliation
                                </p>
                            </div>
                        </div>

                        {/* Incremental Pre-Auth - White Card */}
                        <div className="group w-[302px] h-[328px] p-8 bg-white overflow-hidden rounded-[28px] flex justify-start items-end gap-2.5 cursor-pointer">
                            <div className="flex-1 flex flex-col justify-start items-start gap-5">
                                <TrendingUp size={40} strokeWidth={1.5} className="w-12 h-12 group-hover:rotate-[-8deg] transition-all group-hover:text-[#1876F4]" />
                                <div className="w-full flex justify-start items-center gap-2.5">
                                    <h3 className="flex-1 text-[#272729] text-[28px] font-semibold leading-9 transition-colors duration-300 group-hover:text-[#1876F4]">
                                        Incremental<br />Pre-Auth
                                    </h3>
                                </div>

                                <p className="w-full text-[#4A5565] text-base font-normal leading-6">
                                    Adjust authorisation amounts in real time
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Operation Details */}
                <div className="flex-1 h-[624px] flex flex-col justify-between items-start">
                    {/* Top Row - Cashback & Pre-Auth */}
                    <div className="w-full flex justify-start items-start gap-6">
                        {/* Cashback & Refunds - White Card */}
                        <div className="group w-[302px] h-[328px] p-8 bg-white overflow-hidden rounded-[28px] flex justify-start items-end gap-2.5 cursor-pointer">
                            <div className="flex-1 flex flex-col justify-start items-start gap-5">
                                <TicketSlash size={40} strokeWidth={1.5} className="w-12 h-12 group-hover:rotate-[-8deg] transition-all group-hover:text-[#1876F4]" />
                                <div className="w-full flex justify-start items-center gap-2.5">
                                    <h3 className="flex-1 text-[#272729] text-[28px] font-semibold leading-9 transition-colors duration-300 group-hover:text-[#1876F4]">
                                        Cashback<br />& Refunds
                                    </h3>
                                </div>

                                <p className="w-full text-[#4A5565] text-base font-normal leading-6">
                                    Smooth checkout with<br />tip-enabled transactions
                                </p>
                            </div>
                        </div>

                        {/* Pre-Auth & Completion - Dark Card */}
                        <div className="group w-[302px] h-[328px] p-8 bg-[#171717] overflow-hidden rounded-[28px] flex justify-start items-end gap-2.5 cursor-pointer">
                            <div className="w-[222px] flex flex-col justify-start items-start gap-5">
                                <Lock color="#fff" size={40} strokeWidth={1.5} className="w-12 h-12 group-hover:rotate-[-8deg] transition-all" />
                                <div className="w-full flex justify-start items-center gap-2.5">
                                    <h3 className="text-white text-[28px] font-semibold leading-9">
                                        Pre-Auth<br />& Completion
                                    </h3>
                                </div>

                                <p className="w-full text-[#EFEFEF] text-base font-normal leading-6">
                                    Smooth checkout with<br />tip-enabled transactions
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Multi-merchant - Large White Card */}
                    <div className="group w-full h-[272px] px-[50px] py-8 relative bg-white overflow-hidden rounded-[28px] flex flex-col justify-center items-end gap-2.5 cursor-pointer">
                        <img
                            className="w-full h-[272px] left-0 top-0 absolute transition-transform duration-300 group-hover:rotate-[8deg]"
                            src="/operations/coin.png"
                            alt=""
                        />
                        <div className="flex flex-col justify-start items-center gap-4 relative z-10">
                            <div className="flex justify-start items-center gap-2.5">
                                <h3 className="text-[#272729] text-[28px] font-semibold leading-9 transition-colors duration-300 group-hover:text-[#1876F4]">
                                    Multi-merchant,<br />Language & Currency
                                </h3>
                            </div>
                            <p className="w-full text-[#4A5565] text-lg font-normal xl:leading-6 3xl:leading-[26px]">
                                Smooth checkout with tip-<br /> enabled transactions
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Operations;
