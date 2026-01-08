interface PaymentCardProps {
    name: string;
    logo: string;
    card: string;
    index?: number;
}

// Mobile Card Component - Simplified design with mobile logo
const MobilePaymentCard = ({ name, mobileLogo }: { name: string; mobileLogo: string }) => {
    return (
        <div className="w-[calc(50%-12px)] pt-4 pb-3 px-4 bg-[#F1F1F3] rounded-2xl flex flex-col justify-start items-start gap-4">
            {/* Logo Container */}
            <img
                src={mobileLogo}
                alt={`${name} logo`}
                className="w-[60px] h-[37px]"
            />
            {/* Card Type */}
            <div className="text-[#45556C] text-lg font-medium leading-6">
                {name}
            </div>
        </div>
    );
};

// Desktop Card Component - Full design with card image
const PaymentCard = ({ name, logo, card, index = 0 }: PaymentCardProps) => {
    return (
        <div
            className="payment-card-parent group w-full h-full pt-2 pb-3 px-2 bg-[#F1F1F3] rounded-[18px] flex flex-col justify-start items-start gap-3 cursor-pointer"
            style={{
                // Animation delay can be added here later
                animationDelay: `${index * 0.1}s`
            }}
        >
            {/* Card Image Container */}
            <div className="w-[220px] h-[124px] relative bg-white overflow-hidden rounded-xl">
                <img
                    src={card}
                    alt={`${name} card`}
                    className={`payment-card-image w-[220px] h-[124px] absolute transition-all duration-500 ease-in-out scale-[60%] -left-32`}
                />
            </div>

            {/* Card Info */}
            <div className="w-full px-1.5 flex justify-start items-start gap-3">
                {/* Logo Container */}
                <img
                    src={logo}
                    alt={`${name} logo`}
                    className="w-[39px] h-6 rounded object-contain"
                />

                {/* Card Type */}
                <div className="text-[#45556C] text-lg font-medium leading-6">
                    {name}
                </div>
            </div>
        </div>
    );
};

const PaymentTypes = () => {
    const paymentMethods = [
        {
            name: "Visa",
            logo: "/payment-types/visa/visa-logo.svg",
            mobileLogo: "/payment-types/visa/visa-m.svg",
            card: "/payment-types/visa/visa.svg"
        },
        {
            name: "MasterCard",
            logo: "/payment-types/mastercard/mastercard-logo.svg",
            mobileLogo: "/payment-types/mastercard/mastercard-m.svg",
            card: "/payment-types/mastercard/mastercard.svg"
        },
        {
            name: "Amex",
            logo: "/payment-types/amex/amex-logo.svg",
            mobileLogo: "/payment-types/amex/amex-m.svg",
            card: "/payment-types/amex/amex.svg"
        },
        {
            name: "Discover",
            logo: "/payment-types/discover/discover-logo.svg",
            mobileLogo: "/payment-types/discover/discover-m.svg",
            card: "/payment-types/discover/discover.svg"
        },
        {
            name: "JCB",
            logo: "/payment-types/jcb/jcb-logo.svg",
            mobileLogo: "/payment-types/jcb/jcb-m.svg",
            card: "/payment-types/jcb/jcb.svg"
        },
        {
            name: "Interact",
            logo: "/payment-types/interac/interac-logo.svg",
            mobileLogo: "/payment-types/interac/interac-m.svg",
            card: "/payment-types/interac/interac.svg"
        },
        {
            name: "Union Pay",
            logo: "/payment-types/union pay/unionpay-logo.svg",
            mobileLogo: "/payment-types/union pay/union-m.svg",
            card: "/payment-types/union pay/union-pay.svg"
        },
        {
            name: "Diners Club",
            logo: "/payment-types/diners club/dinersclub-logo.svg",
            mobileLogo: "/payment-types/diners club/diner-m.svg",
            card: "/payment-types/diners club/diners-club.svg"
        },
        {
            name: "Apple Pay",
            logo: "/payment-types/apple pay/applepay-logo.svg",
            mobileLogo: "/payment-types/apple pay/apple-m.svg",
            card: "/payment-types/apple pay/apple-pay.svg"
        },
        {
            name: "Google Pay",
            logo: "/payment-types/google pay/googlepay-logo.svg",
            mobileLogo: "/payment-types/google pay/google-m.svg",
            card: "/payment-types/google pay/google-pay.svg"
        },
    ];

    return (
        <section className="w-full py-20 xl:py-[100px] bg-white">
            {/* Mobile Layout */}
            <div className="xl:hidden w-full px-7 flex flex-col justify-start items-center gap-[50px]">
                {/* Header */}
                <div className="w-full flex flex-col justify-start items-center gap-3">
                    <h2 className="text-center text-[40px] font-medium leading-[48px]">
                        <span className="text-[#272729]">Supported<br /></span>
                        <span className="text-[#1876F4] italic">Payment</span>
                        <span className="text-[#272729]"> Types</span>
                    </h2>
                    <p className="text-center text-[#4A5565] text-base font-normal leading-6">
                        Accept payments across cards, wallets, and QR
                    </p>
                </div>

                {/* Payment Cards - 2 column wrap */}
                <div className="w-full flex flex-wrap justify-center items-start gap-6">
                    {paymentMethods.map((method, index) => (
                        <MobilePaymentCard
                            key={index}
                            name={method.name}
                            mobileLogo={method.mobileLogo}
                        />
                    ))}
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden xl:block max-w-[1920px] mx-auto px-6 lg:px-12 3xl:px-[320px]">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-[#272729] xl:text-[48px] 3xl:text-[60px] font-medium xl:leading-[56px] 3xl:leading-[72px] mb-4 flex justify-center items-center">
                        Supported{" "}
                        <span className="text-[#1876F4] italic flex flex-col pr-4 pl-1">
                            Payment
                        </span>
                        Types
                    </h2>
                    <p className="text-[#4A5565] text-base">
                        Accept payments across cards, wallets, and QR
                    </p>
                </div>

                {/* Payment Cards Grid */}
                <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {paymentMethods.map((method, index) => (
                        <PaymentCard
                            key={index}
                            name={method.name}
                            logo={method.logo}
                            card={method.card}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PaymentTypes;

