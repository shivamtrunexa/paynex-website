import { CircleCheck } from "lucide-react";

const Products = () => {
    const products = [
        {
            icon: "/products/nexpay.svg",
            title: "NexPay",
            subtitle: "L3 Retail Payment App for IDTech Kiosk V",
            description: "The certified L3 application that instantly secures tap transactions, simplifying complex payment data flow for any retail environment.",
            highlights: [
                "Moneris and Littlepay Certified",
                "Secure Card Data Capture",
                "Seamless Backend Integration",
                "Proven High-Volume Reliability"
            ]
        },
        {
            icon: "/products/nexride.svg",
            title: "NexRide",
            subtitle: "L3 Transit Payment App for IDTech Kiosk V",
            description: "The specialized L3 application that transforms entry gates into fast, secure readers for frictionless tap-to-ride transit.",
            highlights: [
                "Global Interoperability Design",
                "Reliable High-Volume Processing",
                "Integrated Fare Collection",
                "Instant Tap-and-Ride Validation"
            ]
        },
        {
            icon: "/products/nextap.svg",
            title: "NexTap",
            subtitle: "The Integrated L3 Payment Appliance",
            description: "The ready-to-deploy reader, integrating certified L3 intelligence for instant, secure, and easy-to-use retail payment acceptance.",
            highlights: [
                "Single-Unit Payment Acceptance",
                "Universal Retail Deployment",
                "Simplified Integration SDK",
                "Rugged Form Factor"
            ]
        }
    ];

    return (
        <section className="w-full p-6 flex flex-col justify-center items-center gap-[80px]">
            <div className="w-full pt-20 pb-[100px] px-[100px] bg-[#171717] rounded-[32px] flex flex-col justify-center items-center gap-[80px]">
                {/* Header */}
                <div className="self-stretch flex flex-col justify-start items-center gap-3">
                    <div className="self-stretch flex justify-center items-center gap-2.5">
                        <h2 className="text-center">
                            <span className="text-white text-[60px] font-medium leading-[72px]">Our </span>
                            <span className="text-[#1876F4] text-[60px] font-medium italic leading-[72px]">Products</span>
                        </h2>
                    </div>
                    <div className="self-stretch flex justify-center items-center gap-2.5">
                        <p className="flex-1 text-center text-[#D1D1D1] text-xl font-normal leading-7">
                            A seamless flow from customer to bank
                        </p>
                    </div>
                </div>

                {/* Product Cards */}
                <div className="flex justify-center items-center gap-9">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="w-[516px] p-[50px] bg-[#171717] hover:bg-[#25252E] rounded-[35px] border-2 border-[#3D3D4C] flex flex-col justify-start items-start gap-9 transition-colors duration-300 group"
                        >
                            {/* Top Section */}
                            <div className="self-stretch flex flex-col justify-start items-start gap-6">
                                {/* Icon, Title, Subtitle */}
                                <div className="self-stretch flex flex-col justify-center items-start gap-4">
                                    {/* Icon */}
                                    <div className="w-14 h-14 flex justify-center items-center">
                                        <img src={product.icon} alt={`${product.title} icon`} className="w-14 h-14 group-hover:rotate-[-8deg] transition-transform duration-500" />
                                    </div>

                                    {/* Title & Subtitle */}
                                    <div className="self-stretch flex flex-col justify-start items-start gap-2">
                                        <h3 className="text-white text-[42px] font-medium leading-[52px]">
                                            {product.title}
                                        </h3>
                                        <p className="self-stretch text-white text-xl font-medium leading-8">
                                            {product.subtitle}
                                        </p>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="self-stretch flex justify-start items-center gap-2.5">
                                    <p className="flex-1 text-[#EFEFEF] text-base font-normal leading-7">
                                        {product.description}
                                    </p>
                                </div>
                            </div>

                            {/* Key Highlights Section */}
                            <div className="self-stretch flex flex-col justify-start items-start gap-5">
                                {/* Key Highlights Header */}
                                <div className="self-stretch flex justify-start items-center gap-2.5">
                                    <h4 className="text-white text-xl font-medium leading-7">
                                        Key Highlights
                                    </h4>
                                </div>

                                {/* Highlights List */}
                                <div className="self-stretch flex flex-col justify-start items-start gap-5">
                                    {product.highlights.map((highlight, idx) => (
                                        <div key={idx} className="self-stretch flex justify-start items-start gap-2">
                                            {/* Checkmark Icon */}
                                            <div className="pt-0.5 flex justify-start items-center gap-2.5">
                                                <div className="w-5 h-5 relative overflow-hidden">
                                                    <CircleCheck className="w-5 h-5 text-[#30A54E]" absoluteStrokeWidth strokeWidth={1.5} />
                                                </div>
                                            </div>

                                            {/* Highlight Text */}
                                            <div className="flex-1 flex justify-center items-center gap-2.5">
                                                <p className="flex-1 text-[#EFEFEF] text-base font-normal leading-6">
                                                    {highlight}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
