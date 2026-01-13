const About = () => {
  return (
    <section
      id="about"
      className="w-full pt-20 md:py-[60px] lg:py-[80px] px-7 md:px-10 lg:px-12 2xl:px-[320px] bg-white flex flex-col justify-center items-center gap-[50px] md:gap-[50px] lg:gap-[60px] xl:gap-[60px] 3xl:gap-[100px]"
    >
      {/* Header Container */}
      <div className="w-full flex flex-col justify-start items-center gap-3">
        {/* Heading 1 */}
        <div className="w-full flex justify-center items-center gap-2.5">
          <h2 className="text-center text-[#0A0A0A] text-[40px] md:text-[42px] lg:text-[48px] xl:text-[48px] 3xl:text-[60px] font-medium leading-[48px] md:leading-[50px] lg:leading-[56px] xl:leading-[56px] 3xl:leading-[72px]">
            About Us
          </h2>
        </div>

        {/* Paragraph */}
        <div className="w-full flex justify-center items-center gap-2.5">
          <p className="flex-1 text-center text-[#45556C] text-base md:text-sm lg:text-base xl:text-base 3xl:text-xl font-normal leading-6 md:leading-5 lg:leading-6 xl:leading-6 3xl:leading-7">
            We build secure, scalable hardware and software platforms that power<br />next-generation payments, mobility and connected infrastructure.
          </p>
        </div>
      </div>

      {/* Mobile: About Image - Shows on mobile only, between header and content */}
      <div className="md:hidden w-full flex justify-center items-center overflow-hidden">
        <img
          src="/aboutus/aboutus-mobile.svg"
          alt="Paynex Ecosystem"
          className="w-full h-auto"
        />
      </div>

      {/* About Content - Tablet & Desktop Layout */}
      <div className="w-full flex flex-col justify-center items-center gap-8">
        <div className="hidden md:flex md:w-full md:max-w-[calc(100vw-80px)] lg:max-w-[calc(100vw-96px)] xl:max-w-[1280px] justify-center items-stretch gap-4 md:gap-5 lg:gap-6 xl:gap-8">
          {/* Left - About Image with Infographic */}
          <div className="flex-1 md:max-w-[45%] lg:max-w-[48%] xl:max-w-[624px] bg-[#f1f1f1] rounded-[20px] lg:rounded-[24px] xl:rounded-[28px] overflow-hidden flex justify-center items-center">
            <img
              src="/aboutus/About Left.svg"
              alt="Paynex Ecosystem"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Right - Content Container */}
          <div className="flex-1 md:max-w-[55%] lg:max-w-[52%] xl:max-w-[624px] flex flex-col justify-between items-start gap-4 lg:gap-6 xl:gap-8">
            {/* Heading Container */}
            <div className="w-full md:px-8 lg:px-10 xl:px-[50px] md:py-10 lg:py-12 xl:py-20 bg-[#F1F1F1] md:rounded-[20px] lg:rounded-[24px] xl:rounded-[28px] flex flex-col justify-center items-start gap-6">
              <h3 className="flex-1">
                <span className="text-[#272729] md:text-[28px] lg:text-[34px] xl:text-[42px] font-medium md:leading-[36px] lg:leading-[42px] xl:leading-[50px]">
                  Simplifying{" "}
                </span>
                <span className="text-[#1876F4] md:text-[28px] lg:text-[34px] xl:text-[42px] italic font-medium md:leading-[36px] lg:leading-[42px] xl:leading-[50px]">
                  Payments
                </span>
                <br />
                <span className="text-[#272729] md:text-[28px] lg:text-[34px] xl:text-[42px] font-medium md:leading-[36px] lg:leading-[42px] xl:leading-[50px]">
                  for Modern Businesses
                </span>
              </h3>
            </div>

            {/* Bus Video */}
            <div className="w-full flex-1 overflow-hidden rounded-[16px] lg:rounded-[20px] xl:rounded-[28px] flex flex-col justify-center items-center">
              <video
                className="w-full h-full object-cover"
                src="/aboutus/bus video.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </div>

        {/* Mobile: Content Section */}
        <div className="md:hidden w-full flex flex-col justify-start items-center gap-6">
          {/* Text Content */}
          <div className="w-full flex flex-col justify-start items-start gap-4">
            {/* Heading 2 */}
            <div className="w-full flex justify-start items-start gap-2.5">
              <h3 className="flex-1">
                <span className="text-[#272729] text-[32px] font-medium leading-[44px]">
                  Simplifying{" "}
                </span>
                <span className="text-[#1876F4] text-[32px] italic font-medium leading-[44px]">
                  Payments
                </span>
                <br />
                <span className="text-[#272729] text-[32px] font-medium leading-[44px]">
                  for Modern Businesses
                </span>
              </h3>
            </div>

            {/* Paragraphs Container */}
            <div className="w-full flex flex-col justify-start items-start gap-2.5">
              <p className="w-full text-[#364153] text-base font-normal leading-6">
                Paynex helps businesses simplify operations and deploy faster with a flexible, partner driven payments platform that integrates seamlessly with existing systems, while reducing costs and improving reliability.
              </p>
              <p className="w-full text-[#364153] text-base font-normal leading-6">
                Built on strong technology partnerships and modular architecture, Paynex unifies payments across industries delivering speed, security, and complete control.
              </p>
            </div>
          </div>

          {/* Bus Video - Mobile */}
          <div className="w-full overflow-hidden rounded-[20px] flex flex-col justify-start items-start">
            <video
              className="w-full h-auto object-cover"
              src="/aboutus/bus video.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
