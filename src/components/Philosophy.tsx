import { useEffect, useRef, useState } from 'react';
import { Plug, Layers, Shield, Users, Workflow, Layers2, DraftingCompass, UserCircle, UserCircle2, UserRound, UsersRound } from 'lucide-react';

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
                <div className="flex-1 xl:w-[720px] 3xl:w-[960px] xl:px-[75px] 3xl:px-[100px] xl:py-[300px] 3xl:py-[400px] overflow-hidden flex flex-col justify-center items-start gap-2.5">
                    <div className="w-full flex flex-col justify-start items-start gap-6">
                        <div className="w-full flex flex-col justify-start items-start gap-4">
                            {/* Title */}
                            <div className="w-full flex flex-col">
                                <h2 className="xl:text-[48px] 3xl:text-[60px] font-medium xl:leading-[56px] 3xl:leading-[72px]">
                                    <span className="text-[#272729]">Our </span>
                                    <span className="text-[#1876F4] italic">Design</span>
                                    <br />
                                    <span className="text-[#272729]">Philosophy</span>
                                </h2>
                            </div>

                            {/* Subtitle */}
                            <div className="w-full text-[#5A6C7D] xl:text-[16px] 3xl:text-[20px] xl:leading-[24px] 3xl:leading-[28px] font-normal">
                                Engineered for simplicity and built for scale
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right - Features List */}
                <div className="xl:w-[720px] 3xl:w-[960px] xl:h-[850px] 3xl:h-[1000px] xl:px-[75px] 3xl:px-[100px] xl:py-[102px] 3xl:py-[136px] bg-white overflow-hidden flex flex-col xl:justify-start xl:gap-9 3xl:justify-between items-start">
                    {/* Seamless Integration */}
                    <div
                        className="w-full rounded-3xl flex flex-col justify-center items-start gap-2"
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                            transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s'
                        }}
                    >
                        <Workflow className="xl:w-8 xl:h-8 3xl:w-9 3xl:h-9 text-[#1876F4] xl:stroke-[1.5] 3xl:stroke-2" />

                        <div className="w-full flex justify-start items-center gap-2.5">
                            <h3 className="flex justify-center flex-col text-[#1876F4] xl:text-[26px] 3xl:text-[32px] font-medium xl:leading-[36px] 3xl:leading-[42px]">
                                Seamless Integration
                            </h3>
                        </div>

                        <p className="w-full text-[#45556C] xl:text-base 3xl:text-lg font-normal leading-[26px]">
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
                        <Layers2 className="xl:w-8 xl:h-8 3xl:w-9 3xl:h-9 text-[#1876F4] xl:stroke-[1.5] 3xl:stroke-2" />
                        <div className="w-full flex justify-start items-center gap-2.5">
                            <h3 className="flex justify-center flex-col text-[#1876F4] xl:text-[26px] 3xl:text-[32px] font-medium xl:leading-[36px] 3xl:leading-[42px]">
                                Scalable Architecture
                            </h3>
                        </div>

                        <p className="w-full text-[#45556C] xl:text-base 3xl:text-base font-normal leading-[26px]">
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
                        <DraftingCompass className="xl:w-8 xl:h-8 3xl:w-9 3xl:h-9 text-[#1876F4] xl:stroke-[1.5] 3xl:stroke-2" />

                        <div className="w-full flex justify-start items-center gap-2.5">
                            <h3 className="flex justify-center flex-col text-[#1876F4] xl:text-[26px] 3xl:text-[32px] font-medium xl:leading-[36px] 3xl:leading-[42px]">
                                Security by Design
                            </h3>
                        </div>

                        <p className="w-full text-[#45556C] xl:text-base 3xl:text-base font-normal leading-[26px]">
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
                        <UsersRound className="xl:w-8 xl:h-8 3xl:w-9 3xl:h-9 text-[#1876F4] xl:stroke-[1.5] 3xl:stroke-2" />
                        <div className="w-full flex justify-start items-center gap-2.5">
                            <h3 className="flex justify-center flex-col text-[#1876F4] xl:text-[26px] 3xl:text-[32px] font-medium xl:leading-[36px] 3xl:leading-[42px]">
                                User-Centric Experience
                            </h3>
                        </div>

                        <p className="w-full text-[#45556C] xl:text-base 3xl:text-base font-normal leading-[26px]">
                            Focused on intuitive interfaces and smooth interactions for both merchants and customers.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
