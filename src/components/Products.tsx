import { CircleCheck } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Animated Product Card component for mobile scroll-triggered background color
const AnimatedProductCard = ({
    product,
    index
}: {
    product: {
        icon: string;
        title: string;
        subtitle: string;
        description: string;
        highlights: string[]
    };
    index: number
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: false,
        margin: "-40% 0px -40% 0px"
    });

    return (
        <motion.div
            ref={ref}
            key={index}
            className="w-full p-7 rounded-3xl border-2 border-[#3D3D4C] flex flex-col justify-start items-start gap-9"
            animate={{
                backgroundColor: isInView ? "#25252E" : "#171717"
            }}
            transition={{
                duration: 0.4,
                ease: "easeOut"
            }}
        >
            {/* Top Section */}
            <div className="w-full flex flex-col justify-start items-start gap-6">
                {/* Icon, Title, Subtitle */}
                <div className="w-full flex flex-col justify-center items-start gap-4">
                    {/* Icon */}
                    <div className="w-9 h-9 flex justify-center items-center">
                        <img src={product.icon} alt={`${product.title} icon`} className="w-9 h-9" />
                    </div>

                    {/* Title & Subtitle */}
                    <div className="w-full flex flex-col justify-start items-start gap-2">
                        <h3 className="text-white text-[36px] font-medium leading-[46px]">
                            {product.title}
                        </h3>
                        <p className="w-full text-white text-lg font-medium leading-7">
                            {product.subtitle}
                        </p>
                    </div>
                </div>

                {/* Description */}
                <div className="w-full flex justify-start items-center gap-2.5">
                    <p className="flex-1 text-[#EFEFEF] text-base font-normal leading-6">
                        {product.description}
                    </p>
                </div>
            </div>

            {/* Key Highlights Section */}
            <div className="w-full flex flex-col justify-start items-start gap-5">
                {/* Key Highlights Header */}
                <div className="w-full flex justify-start items-center gap-2.5">
                    <h4 className="text-white text-xl font-medium leading-7">
                        Key Highlights
                    </h4>
                </div>

                {/* Highlights List */}
                <div className="w-full flex flex-col justify-start items-start gap-5">
                    {product.highlights.map((highlight, idx) => (
                        <div key={idx} className="w-full flex justify-start items-start gap-2">
                            {/* Checkmark Icon */}
                            <div className="pt-0.5 flex justify-start items-center gap-2.5">
                                <CircleCheck className="w-5 h-5 text-[#30A54E]" strokeWidth={1.5} />
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
        </motion.div>
    );
};

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
        <section className="w-full pt-[50px] xl:pt-0 xl:p-6 flex flex-col justify-center items-center xl:gap-[80px]">
            {/* Mobile Layout */}
            <div className="xl:hidden w-full px-5 py-16 bg-[#171717] flex flex-col justify-start items-center gap-[50px]">
                {/* Header */}
                <div className="flex flex-col justify-start items-center gap-3">
                    <h2 className="text-center text-[40px] font-medium leading-[48px]">
                        <span className="text-white">Our </span>
                        <span className="text-[#1876F4] italic">Products</span>
                    </h2>
                    <p className="text-center text-[#EFEFEF] text-base font-normal leading-6">
                        A seamless flow from customer to bank
                    </p>
                </div>

                {/* Product Cards */}
                <div className="w-full flex flex-col justify-center items-center gap-9">
                    {products.map((product, index) => (
                        <AnimatedProductCard key={index} product={product} index={index} />
                    ))}
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden xl:flex w-full pt-20 pb-[100px] xl:px-[75px] 3xl:px-[100px] bg-[#171717] xl:rounded-[24px] 3xl:rounded-[32px] flex-col justify-center items-center gap-[80px]">
                {/* Header */}
                <div className="self-stretch flex flex-col justify-start items-center gap-3">
                    <div className="self-stretch flex justify-center items-center gap-2.5">
                        <h2 className="text-center">
                            <span className="text-white xl:text-[48px] 3xl:text-[60px] font-medium xl:leading-[56px] 3xl:leading-[72px]">Our </span>
                            <span className="text-[#1876F4] xl:text-[48px] 3xl:text-[60px] font-medium italic xl:leading-[56px] 3xl:leading-[72px]">Products</span>
                        </h2>
                    </div>
                    <div className="self-stretch flex justify-center items-center gap-2.5">
                        <p className="flex-1 text-center text-[#D1D1D1] xl:text-base 3xl:text-xl font-normal xl:leading-6 3xl:leading-7">
                            A seamless flow from customer to bank
                        </p>
                    </div>
                </div>

                {/* Product Cards */}
                <div className="flex justify-center items-center xl:gap-6 3xl:gap-9">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="xl:w-[400px] xl:h-[580px] 3xl:w-[516px] 3xl:h-auto xl:p-[38px] 3xl:p-[50px] bg-[#171717] hover:bg-[#25252E] xl:rounded-[26px] 3xl:rounded-[35px] border-2 border-[#3D3D4C] flex flex-col justify-start items-start xl:gap-7 3xl:gap-9 transition-colors duration-300 group"
                        >
                            {/* Top Section */}
                            <div className="self-stretch flex flex-col justify-start items-start gap-6">
                                {/* Icon, Title, Subtitle */}
                                <div className="self-stretch flex flex-col justify-center items-start gap-4">
                                    {/* Icon */}
                                    <div className="xl:w-12 xl:h-12 3xl:w-14 3xl:h-14 flex justify-center items-center">
                                        <img src={product.icon} alt={`${product.title} icon`} className="xl:w-12 xl:h-12 3xl:w-14 3xl:h-14 group-hover:rotate-[-8deg] transition-transform duration-500" />
                                    </div>

                                    {/* Title & Subtitle */}
                                    <div className="self-stretch flex flex-col justify-start items-start gap-2">
                                        <h3 className="text-white xl:text-[32px] 3xl:text-[42px] font-medium xl:leading-[40px] 3xl:leading-[52px]">
                                            {product.title}
                                        </h3>
                                        <p className="self-stretch text-white xl:text-lg 3xl:text-xl font-medium xl:leading-[26px] 3xl:leading-8 xl:min-h-[52px] 3xl:min-h-[32px]">
                                            {product.subtitle}
                                        </p>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="self-stretch flex justify-start items-center gap-2.5">
                                    <p className="flex-1 text-[#EFEFEF] xl:text-base 3xl:text-base font-normal xl:leading-6 3xl:leading-7 xl:min-h-[96px] 3xl:min-h-[84px]">
                                        {product.description}
                                    </p>
                                </div>
                            </div>

                            {/* Key Highlights Section */}
                            <div className="self-stretch flex flex-col justify-start items-start gap-5">
                                {/* Key Highlights Header */}
                                <div className="self-stretch flex justify-start items-center gap-2.5">
                                    <h4 className="text-white xl:text-lg 3xl:text-xl font-medium leading-7">
                                        Key Highlights
                                    </h4>
                                </div>

                                {/* Highlights List */}
                                <div className="self-stretch flex flex-col justify-start items-start gap-5">
                                    {product.highlights.map((highlight, idx) => (
                                        <div key={idx} className="self-stretch flex justify-start items-start gap-2">
                                            {/* Checkmark Icon */}
                                            <div className="pt-0.5 flex justify-start items-center gap-2.5">
                                                <div className="xl:w-[18px] xl:h-[18px] 3xl:w-5 3xl:h-5 relative overflow-hidden">
                                                    <CircleCheck className="xl:w-[18px] xl:h-[18px] 3xl:w-5 3xl:h-5 text-[#30A54E]" absoluteStrokeWidth strokeWidth={1.5} />
                                                </div>
                                            </div>

                                            {/* Highlight Text */}
                                            <div className="flex-1 flex justify-center items-center gap-2.5">
                                                <p className="flex-1 text-[#EFEFEF] xl:text-sm 3xl:text-base font-normal xl:leading-5 3xl:leading-6">
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

