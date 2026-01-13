const HowItWorks = () => {
    return (
        <section className="w-full px-0 pt-20 md:px-6 md:py-6 flex flex-col justify-center items-center">
            <div className="w-full pt-12 bg-[#171717] rounded-none md:rounded-[24px] 3xl:rounded-[32px] flex flex-col justify-start items-center">
                {/* Header */}
                <div className="w-full flex flex-col justify-start items-center gap-3">
                    <h2 className="text-center text-white text-[40px] lg:text-[48px] xl:text-[48px] 3xl:text-[60px] font-medium leading-[48px] lg:leading-[56px] xl:leading-[56px] 3xl:leading-[72px]">
                        How it works
                    </h2>

                    <p className="text-center text-[#EFEFEF] text-base lg:text-base xl:text-base 3xl:text-xl font-normal leading-6 lg:leading-6 xl:leading-6 3xl:leading-7">
                        A seamless flow from customer to bank
                    </p>
                </div>

                {/* Complete Flow Diagram SVG */}
                <div>
                    {/* Mobile Image */}
                    <img
                        src="/howitworks/howitworks-m.svg"
                        alt="Payment flow diagram showing the journey from customer through merchant, payment gateway, issuing bank, to card networks"
                        className="w-full max-w-md mx-auto flex justify-center items-center py-8 md:hidden"
                    />
                    {/* Desktop Image */}
                    <img
                        src="/howitworks/how-it-works.svg"
                        alt="Payment flow diagram showing the journey from customer through merchant, payment gateway, issuing bank, to card networks"
                        className="hidden md:block w-full max-w-6xl mx-auto justify-center items-center xl:scale-[90%] 3xl:scale-100 xl:py-[20px] 3xl:py-[100px] 3xl:mt-0"
                    />
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
