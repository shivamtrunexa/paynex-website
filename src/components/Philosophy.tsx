import { useEffect, useRef, useState } from 'react';

const Philosophy = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentRef = sectionRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the section is visible
                rootMargin: '0px 0px -100px 0px' // Trigger slightly before it comes into view
            }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="w-full h-full bg-white overflow-hidden">
            <div className="max-w-[1920px] mx-auto flex justify-start items-center">
                {/* Left Scroll - Title Section */}
                <div className="flex-1 w-[960px] px-[100px] py-[400px] overflow-hidden flex flex-col justify-center items-start gap-2.5">
                    <div className="w-full flex flex-col justify-start items-start gap-6">
                        <div className="w-full flex flex-col justify-start items-start gap-4">
                            {/* Title */}
                            <div className="w-full flex flex-col">
                                <h2 className="text-[60px] font-medium leading-[72px]">
                                    <span className="text-[#272729]">Our </span>
                                    <span className="text-[#1876F4] italic">Design</span>
                                    <br />
                                    <span className="text-[#272729]">Philosophy</span>
                                </h2>
                            </div>

                            {/* Subtitle */}
                            <div className="w-full text-[#5A6C7D] text-[20px] leading-[28px] font-normal">
                                Engineered for simplicity and built for scale
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right - Features List */}
                <div className="w-[960px] h-[1000px] px-[100px] py-[136px] bg-white overflow-hidden flex flex-col justify-between items-start">
                    {/* Seamless Integration */}
                    <div
                        className="w-full rounded-3xl flex flex-col justify-center items-start gap-2"
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                            transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s'
                        }}
                    >
                        <img src="/philosophy/first.svg" alt="" className="w-9 h-9" />

                        <div className="w-full flex justify-start items-center gap-2.5">
                            <h3 className="flex justify-center flex-col text-[#1876F4] text-[32px] font-medium leading-[42px]">
                                Seamless Integration
                            </h3>
                        </div>

                        <p className="w-full text-[#45556C] text-lg font-normal leading-[26px]">
                            Built to connect effortlessly with existing systems, reducing complexity and time-to-market.
                        </p>
                    </div>

                    {/* Scalable Architecture */}
                    <div
                        className="w-full rounded-3xl flex flex-col justify-center items-start gap-2"
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                            transition: 'opacity 0.6s ease-out 0.4s, transform 0.6s ease-out 0.4s'
                        }}
                    >
                        <img src="/philosophy/second.svg" alt="" className="w-9 h-9" />
                        <div className="w-full flex justify-start items-center gap-2.5">
                            <h3 className="flex justify-center flex-col text-[#1876F4] text-[32px] font-medium leading-[42px]">
                                Scalable Architecture
                            </h3>
                        </div>

                        <p className="w-full text-[#45556C] text-base font-normal leading-[26px]">
                            Designed to grow with your business, supporting new payment methods and partners with ease.
                        </p>
                    </div>

                    {/* Security by Design */}
                    <div
                        className="w-full rounded-3xl flex flex-col justify-center items-start gap-2"
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                            transition: 'opacity 0.6s ease-out 0.6s, transform 0.6s ease-out 0.6s'
                        }}
                    >
                        <img src="/philosophy/third.svg" alt="" className="w-9 h-9" />

                        <div className="w-full flex justify-start items-center gap-2.5">
                            <h3 className="flex justify-center flex-col text-[#1876F4] text-[32px] font-medium leading-[42px]">
                                Security by Design
                            </h3>
                        </div>

                        <p className="w-full text-[#45556C] text-base font-normal leading-[26px]">
                            Every layer is engineered for compliance, data protection, and transaction integrity.
                        </p>
                    </div>

                    {/* User-Centric Experience */}
                    <div
                        className="w-full rounded-3xl flex flex-col justify-center items-start gap-2"
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                            transition: 'opacity 0.6s ease-out 0.8s, transform 0.6s ease-out 0.8s'
                        }}
                    >
                        <img src="/philosophy/fourth.svg" alt="" className="w-9 h-9" />
                        <div className="w-full flex justify-start items-center gap-2.5">
                            <h3 className="flex justify-center flex-col text-[#1876F4] text-[32px] font-medium leading-[42px]">
                                User-Centric Experience
                            </h3>
                        </div>

                        <p className="w-full text-[#45556C] text-base font-normal leading-[26px]">
                            Focused on intuitive interfaces and smooth interactions for both merchants and customers.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
