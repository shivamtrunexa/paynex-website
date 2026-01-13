const Integration = () => {
    return (
        <section className="w-full h-full bg-[#F3F3F3] pt-20 pb-20 px-7 xl:px-[200px] 3xl:px-[320px] xl:py-[80px] flex flex-col justify-start xl:justify-center items-start xl:items-center gap-[50px] xl:gap-[100px]">
            {/* Header Container */}
            <div className="w-full xl:w-[1152px] 3xl:max-w-none 3xl:w-[1280px] mx-auto flex flex-col justify-start items-start gap-4">
                <div className="flex flex-col justify-start items-start gap-3">
                    <h2 className="text-[40px] xl:text-[48px] 3xl:text-[60px] font-medium leading-[48px] xl:leading-[56px] 3xl:leading-[72px]">
                        <span className="text-[#272729]">One </span>
                        <span className="text-[#1876F4] italic">Integration.<br /></span>
                        <span className="text-[#272729]" style={{ letterSpacing: '-0.5px' }}>Unlimited Flexibility</span>
                    </h2>
                    <p className="text-[#45556C] text-base xl:text-base 3xl:text-xl font-normal leading-6 xl:leading-6 3xl:leading-7">
                        Connect every payment touchpoint through a single, powerful ecosystem
                    </p>
                </div>
            </div>

            {/* Mobile Cards Container */}
            <div className="xl:hidden w-full flex flex-col justify-start items-start gap-6">
                {/* Payment Application - Light Card */}
                <div className="w-full p-7 bg-[#fff] rounded-[24px] flex flex-col justify-start items-start gap-4">
                    <div className="w-full flex flex-col justify-start items-start gap-2.5">
                        <h3 className="w-full text-[#272729] text-[28px] font-medium leading-9">
                            Payment Application
                        </h3>
                    </div>
                    <div className="w-full flex justify-center items-center gap-2.5">
                        <p className="flex-1 text-[#45556C] text-base font-normal leading-6">
                            Enables seamless in-app and device-based payments with a secure, customizable flow.
                        </p>
                    </div>
                </div>

                {/* Payment Gateway - Blue Card */}
                <div className="w-full p-7 bg-[#1876F4] rounded-3xl flex flex-col justify-start items-start gap-4">
                    <div className="flex flex-col justify-start items-start gap-2.5">
                        <h3 className="w-full text-white text-[28px] font-medium leading-9">
                            Payment Orchestration Platform
                        </h3>
                    </div>
                    <div className="w-full flex justify-center items-center gap-2.5">
                        <p className="flex-1 text-white text-base font-normal leading-6">
                            Validates, routes, and processes transactions with enterprise-level performance.
                        </p>
                    </div>
                </div>

                {/* Payment Terminal - Light Card */}
                <div className="w-full p-7 bg-[#fff] rounded-3xl flex flex-col justify-start items-start gap-4">
                    <div className="flex flex-col justify-start items-start gap-2.5">
                        <h3 className="w-full text-[#272729] text-[28px] font-medium leading-9">
                            Payment Terminal
                        </h3>
                    </div>
                    <div className="w-full flex justify-center items-center gap-2.5">
                        <p className="flex-1 text-[#45556C] text-base font-normal leading-6">
                            Handles contactless payments across retail and unattended environments.
                        </p>
                    </div>
                </div>
            </div>

            {/* Desktop Cards Container */}
            <div className="hidden xl:flex w-full xl:w-[1152px] 3xl:max-w-none 3xl:w-[1280px] mx-auto flex-col justify-start items-start gap-6">
                {/* Payment Application - Light Card */}
                <div className="w-full xl:px-9 3xl:px-12 xl:py-[52px] 3xl:py-[70px] bg-[#ffffff] xl:rounded-[22px] 3xl:rounded-[28px] flex justify-between items-center">
                    <div className="flex flex-col justify-start items-start gap-2.5">
                        <h3 className="text-[#272729] xl:text-[34px] 3xl:text-[42px] font-medium xl:leading-[42px] 3xl:leading-[52px]">
                            Payment Application
                        </h3>
                    </div>
                    <div className="flex justify-center items-center gap-2.5">
                        <p className="xl:w-[380px] 3xl:w-[433px] text-[#45556C] text-base align-left font-normal leading-6">
                            Enables seamless in-app and device-based payments with a secure, customizable flow.
                        </p>
                    </div>
                </div>

                {/* Payment Gateway - Blue Card */}
                <div className="w-full xl:px-9 3xl:px-12 xl:py-[52px] 3xl:py-[70px] bg-[#1876F4] xl:rounded-[22px] 3xl:rounded-[28px] flex justify-between items-center">
                    <div className="flex flex-col justify-start items-start gap-2.5">
                        <h3 className="text-white xl:text-[34px] 3xl:text-[42px] font-medium xl:leading-[42px] 3xl:leading-[52px]">
                            Payment Orchestration Platform
                        </h3>
                    </div>
                    <div className="flex justify-center items-center gap-2.5">
                        <p className="xl:w-[380px] 3xl:w-[433px] text-white text-base font-normal leading-6">
                            Validates, routes, and processes transactions with enterprise-level performance.
                        </p>
                    </div>
                </div>

                {/* Payment Terminal - Light Card */}
                <div className="w-full xl:px-9 3xl:px-12 xl:py-[52px] 3xl:py-[70px] bg-[#ffffff] xl:rounded-[22px] 3xl:rounded-[28px] flex justify-between items-center">
                    <div className="flex flex-col justify-start items-start gap-2.5">
                        <h3 className="text-[#272729] xl:text-[34px] 3xl:text-[42px] font-medium xl:leading-[42px] 3xl:leading-[52px]">
                            Payment Terminal
                        </h3>
                    </div>
                    <div className="flex justify-center items-center gap-2.5">
                        <p className="xl:w-[380px] 3xl:w-[433px] text-[#45556C] text-base font-normal leading-6">
                            Handles contactless payments across retail and unattended environments.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Integration;

