const Integration = () => {
    return (
        <section className="w-full h-full px-6 lg:px-12 xl:px-[200px] 3xl:px-[320px] py-[80px] flex flex-col justify-center items-center gap-[100px]">
            {/* Header Container */}
            <div className="w-full xl:w-[1152px] 3xl:max-w-none 3xl:w-[1280px] mx-auto flex flex-col justify-start items-start gap-4">
                <div className="flex flex-col justify-start items-start gap-3">
                    <h2 className="xl:text-[48px] 3xl:text-[60px] font-medium xl:leading-[56px] 3xl:leading-[72px]">
                        <span className="text-[#272729]">One </span>
                        <span className="text-[#1876F4] italic">Integration.</span>
                        <br />
                        <span className="text-[#272729]">Unlimited Flexibility.</span>
                    </h2>
                    <p className="text-[#45556C] xl:text-base 3xl:text-xl font-normal xl:leading-6 3xl:leading-7">
                        Connect every payment touchpoint through a single, powerful ecosystem
                    </p>
                </div>
            </div>

            {/* Cards Container */}
            <div className="w-full xl:w-[1152px] 3xl:max-w-none 3xl:w-[1280px] mx-auto flex flex-col justify-start items-start gap-6">
                {/* Payment Application - Light Card */}
                <div className="w-full xl:px-9 3xl:px-12 xl:py-[52px] 3xl:py-[70px] bg-[#F8FAFC] xl:rounded-[22px] 3xl:rounded-[28px] flex justify-between items-center">
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
                            Payment Gateway
                        </h3>
                    </div>
                    <div className="flex justify-center items-center gap-2.5">
                        <p className="xl:w-[380px] 3xl:w-[433px] text-white text-base font-normal leading-6">
                            Validates, routes, and processes transactions with enterprise-level performance.
                        </p>
                    </div>
                </div>

                {/* Payment Terminal - Light Card */}
                <div className="w-full xl:px-9 3xl:px-12 xl:py-[52px] 3xl:py-[70px] bg-[#F8FAFC] xl:rounded-[22px] 3xl:rounded-[28px] flex justify-between items-center">
                    <div className="flex flex-col justify-start items-start gap-2.5">
                        <h3 className="text-[#272729] xl:text-[34px] 3xl:text-[42px] font-medium xl:leading-[42px] 3xl:leading-[52px]">
                            Payment Terminal
                        </h3>
                    </div>
                    <div className="flex justify-center items-center gap-2.5">
                        <p className="xl:w-[380px] 3xl:w-[433px] text-[#45556C] text-base font-normal leading-6">
                            Handles contactless, chip, and card payments across retail and unattended environments.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Integration;
