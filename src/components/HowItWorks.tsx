const HowItWorks = () => {
    return (
        <section className="w-full px-6 py-6 flex flex-col justify-center items-center">
            <div className="w-full pt-20 bg-[#171717] rounded-[32px] flex flex-col justify-start items-center">
                {/* Header */}
                <div className="w-full flex flex-col justify-start items-center gap-3">
                    <h2 className="text-center text-white text-[60px] font-medium leading-[72px]">
                        How it works
                    </h2>

                    <p className="text-center text-[#EFEFEF] text-xl font-medium leading-7">
                        A seamless flow from customer to bank
                    </p>
                </div>

                {/* Complete Flow Diagram SVG */}
                <div className="w-full max-w-6xl mx-auto flex justify-center items-center scale-[0.8] 3xl:scale-100 py-[100px]">
                    <img
                        src="/howitworks/how it works.svg"
                        alt="Payment flow diagram showing the journey from customer through merchant, payment gateway, issuing bank, to card networks"
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
