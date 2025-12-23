const Integration = () => {
    return (
        <section className="w-full h-full px-6 lg:px-12 2xl:px-[320px] py-[100px] flex flex-col justify-center items-center gap-[100px]">
            {/* Header Container */}
            <div className="w-[1280px] flex flex-col justify-start items-start gap-4">
                <div className="flex flex-col justify-start items-start gap-3">
                    <h2 className="text-[60px] font-medium leading-[72px]">
                        <span className="text-[#272729]">One </span>
                        <span className="text-[#1876F4] italic">Integration.</span>
                        <br />
                        <span className="text-[#272729]">Unlimited Flexibility.</span>
                    </h2>
                    <p className="text-[#45556C] text-xl font-normal leading-7">
                        Connect every payment touchpoint through a single, powerful ecosystem
                    </p>
                </div>
            </div>

            {/* Cards Container */}
            <div className="w-[1280px] mx-auto flex flex-col justify-start items-start gap-6">
                {/* Payment Application - Light Card */}
                <div className="w-full px-12 py-[70px] bg-[#F8FAFC] rounded-[28px] flex justify-between items-center">
                    <div className="flex flex-col justify-start items-start gap-2.5">
                        <h3 className="text-[#272729] text-[42px] font-medium leading-[52px]">
                            Payment Application
                        </h3>
                    </div>
                    <div className="flex justify-center items-center gap-2.5">
                        <p className="w-[433px] text-[#45556C] text-base font-normal leading-6">
                            Enables seamless in-app and device-based payments with a secure, customizable flow.
                        </p>
                    </div>
                </div>

                {/* Payment Gateway - Blue Card */}
                <div className="w-full px-12 py-[70px] bg-[#1876F4] rounded-[28px] flex justify-between items-center">
                    <div className="flex flex-col justify-start items-start gap-2.5">
                        <h3 className="text-white text-[42px] font-medium leading-[52px]">
                            Payment Gateway
                        </h3>
                    </div>
                    <div className="flex justify-center items-center gap-2.5">
                        <p className="w-[433px] text-white text-base font-normal leading-6">
                            Validates, routes, and processes transactions with enterprise-level performance.
                        </p>
                    </div>
                </div>

                {/* Payment Terminal - Light Card */}
                <div className="w-full px-12 py-[70px] bg-[#F8FAFC] rounded-[28px] flex justify-between items-center">
                    <div className="flex flex-col justify-start items-start gap-2.5">
                        <h3 className="text-[#272729] text-[42px] font-medium leading-[52px]">
                            Payment Terminal
                        </h3>
                    </div>
                    <div className="flex justify-center items-center gap-2.5">
                        <p className="w-[433px] text-[#45556C] text-base font-normal leading-6">
                            Handles contactless, chip, and card payments across retail and unattended environments.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Integration;
