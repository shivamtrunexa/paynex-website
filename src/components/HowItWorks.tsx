const HowItWorks = () => {
    return (
        <section className="w-full px-6 py-6 flex flex-col justify-center items-center">
            <div className="w-full pt-20 bg-[#171717] xl:rounded-[24px] 3xl:rounded-[32px] flex flex-col justify-start items-center">
                {/* Header */}
                <div className="w-full flex flex-col justify-start items-center gap-3">
                    <h2 className="text-center text-white xl:text-[48px] 3xl:text-[60px] font-medium xl:leading-[56px] 3xl:leading-[72px]">
                        How it works
                    </h2>

                    <p className="text-center text-[#EFEFEF] xl:text-base 3xl:text-xl font-normal xl:leading-6 3xl:leading-7">
                        A seamless flow from customer to bank
                    </p>
                </div>

                {/* Complete Flow Diagram SVG */}
                <div >
                    <img
                        src="/howitworks/how it works.svg"
                        alt="Payment flow diagram showing the journey from customer through merchant, payment gateway, issuing bank, to card networks"
                        className="w-full max-w-6xl mx-auto flex justify-center items-center xl:scale-[90%] 3xl:scale-100 xl:py-[20px] 3xl:py-[100px] 3xl:mt-0"
                    />
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
