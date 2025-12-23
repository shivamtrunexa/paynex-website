const About = () => {
  return (
    <section
      id="about"
      className="w-full py-[80px] px-6 lg:px-12 2xl:px-[320px] bg-white flex flex-col justify-center items-center gap-[100px]"
    >
      {/* Header Container */}
      <div className="w-full flex flex-col justify-start items-center gap-3">
        {/* Heading 1 */}
        <div className="w-full flex justify-center items-center gap-2.5">
          <h2 className="text-center text-[#0A0A0A] text-[60px] font-medium leading-[72px]">
            About Us
          </h2>
        </div>

        {/* Paragraph */}
        <div className="w-full flex justify-center items-center gap-2.5">
          <p className="flex-1 text-center text-[#4A5565] text-xl font-normal leading-7">
            We build intelligent, secure, and scalable payment infrastructure for the connected world.
          </p>
        </div>
      </div>

      {/* About Content */}
      <div className="w-full flex flex-col justify-center items-center gap-8">
        <div className="w-[1280px] flex justify-center items-center gap-8">
          {/* Left - About Image with Infographic */}
          <div className="flex-1 h-[672px] w-[624px] rounded-[28px] overflow-hidden flex justify-center items-center gap-2.5">
            <img
              src="/aboutus/About Left.svg"
              alt="Paynex Ecosystem"
              className="h-[672px] object-cover"
            />
          </div>

          {/* Right - Content Container */}
          <div className="flex-1 h-[672px] w-[624px] flex flex-col justify-start items-start gap-8">
            {/* Text Content */}
            <div className="w-full flex flex-col justify-start items-start gap-6">
              {/* Heading 2 */}
              <div className="w-full flex justify-start items-start gap-2.5">
                <h3 className="flex-1">
                  <span className="text-[#272729] text-[42px] font-medium leading-[50px]">
                    Simplifying{" "}
                  </span>
                  <span className="text-[#1876F4] text-[42px] italic font-medium leading-[50px]">
                    Payments
                  </span>
                  <br />
                  <span className="text-[#272729] text-[42px] font-medium leading-[50px]">
                    for Modern Businesses
                  </span>
                </h3>
              </div>

              {/* Paragraphs Container */}
              <div className="w-full h-[140px] flex flex-col justify-start items-start gap-6">
                <div className="w-full flex flex-col justify-center items-center gap-2.5">
                  <p className="w-full text-[#364153] text-base font-normal leading-[26px]">
                    Paynex helps businesses simplify operations and deploy faster with a flexible, partner driven payments platform that integrates seamlessly with existing systems, while reducing costs and improving reliability.
                  </p>
                  <p className="w-full text-[#364153] text-base font-normal leading-[26px]">
                    Built on strong technology partnerships and modular architecture, Paynex unifies payments across industries delivering speed, security, and complete control.
                  </p>
                </div>
              </div>
            </div>

            {/* Bus Video */}
            <div className="w-full overflow-hidden rounded-[28px] flex flex-col justify-center items-center gap-2.5">
              <video
                className="w-[668px] h-[376px] object-cover"
                src="/aboutus/bus video.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
