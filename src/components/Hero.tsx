import { ArrowRight, MoveRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  // Container animation - staggers children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  // Item animation - used for each child element
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1] as const
      }
    }
  };

  // Image animation - slides in from right (Desktop)
  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: [0.25, 0.4, 0.25, 1] as const
      }
    }
  };

  // Mobile Image animation - slides in from bottom
  const mobileImageVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: [0.25, 0.4, 0.25, 1] as const
      }
    }
  };

  return (
    <section className="w-full min-h-screen bg-white pt-[72px] lg:pt-0 px-8 lg:px-12 xl:px-16 3xl:px-[100px] overflow-x-hidden overflow-y-visible flex items-start lg:items-center">
      <div className="max-w-[1920px] mx-auto w-full overflow-x-hidden">
        {/* Mobile: vertical flex-col layout with 50px gap | Desktop: horizontal layout */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-[50px] lg:gap-12 pt-[50px] lg:pt-0">
          {/* Left Segment - Hero Content */}
          <motion.div
            className="w-full lg:flex-1 xl:max-w-[580px] 3xl:max-w-[761px] xl:h-[580px] 3xl:h-[680px] flex flex-col justify-between items-center lg:items-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Hero Text and Buttons */}
            <div className="w-full flex flex-col justify-start items-center lg:items-start gap-5 lg:gap-9 lg:py-9">
              {/* Title */}
              <motion.div className="w-full" variants={itemVariants}>
                <h1
                  className="text-center lg:text-left text-[40px] lg:text-[60px] xl:text-[60px] 3xl:text-[80px] leading-[54px] lg:leading-[1.1] font-medium tracking-normal text-[#272729]"
                  style={{ fontFamily: 'Instrument Sans' }}
                >
                  Powering Future of
                  <br />
                  <span className="whitespace-nowrap"><span className="text-[#1876F4]" style={{ fontFamily: 'Syne', letterSpacing: '-1.5px' }}>Next-Gen</span> Payments</span>
                </h1>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                className="w-full text-center lg:text-left text-[#45556C] text-base lg:text-base xl:text-base 3xl:text-xl leading-6 lg:leading-6 xl:leading-6 3xl:leading-7"
                variants={itemVariants}
              >
                One secure, scalable platform to integrate, accept and
                <span className="hidden lg:inline"><br /></span>
                <span className="lg:hidden"> </span>
                control every transaction globally
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex justify-center lg:justify-start items-center gap-3 mt-4 lg:mt-0"
                variants={itemVariants}
              >
                {/* Primary Button */}
                <button className="w-[160px] lg:w-auto px-6 py-3.5 relative bg-[#1876F4] overflow-hidden rounded-[14px] flex justify-center items-center gap-2.5 group hover:shadow-[-3px_2px_7px_rgba(79,79,79,0.15)] transition-all duration-300 cursor-pointer">
                  <span className="text-center text-white text-sm font-medium leading-5 relative z-10">
                    Get in Touch
                  </span>
                  <div className="w-5 h-5 relative overflow-hidden flex items-center justify-center z-10">
                    <MoveRight className="w-4 h-4 text-white" />
                  </div>
                  {/* Shine effect - animated on hover */}
                  <div
                    className="w-[100px] h-[100px] absolute -left-[120px] top-1/2 -translate-y-1/2 rotate-[-45deg] group-hover:left-[180px] transition-all duration-500 ease-in-out pointer-events-none"
                    style={{
                      background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0) 100%)',
                      filter: 'blur(4px)'
                    }}
                  />
                </button>

                {/* Secondary Button */}
                <button
                  className="w-[160px] lg:w-auto px-6 py-3.5 relative overflow-hidden rounded-[14px] flex justify-center items-center gap-2.5 group hover:bg-gray-50 transition-colors"
                  style={{ boxShadow: 'inset 0 0 0 1px #45556C' }}
                >
                  <span className="text-center text-[#45556C] text-sm font-medium leading-5 whitespace-nowrap">
                    Explore Solutions
                  </span>
                  {/* Shine effect */}
                  <div
                    className="w-[72px] h-16 absolute -left-[90px] top-[29.91px] rotate-[-45deg] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    style={{
                      background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.30) 50%, rgba(255, 255, 255, 0) 100%)',
                      filter: 'blur(4px)'
                    }}
                  />
                </button>
              </motion.div>
            </div>

            {/* Hero Image Card - Shows BETWEEN text and partners on MOBILE */}
            <motion.div
              className="w-full h-[348px] lg:hidden relative bg-[#F1F1F1] overflow-hidden rounded-[24px] flex items-center justify-center mt-[50px]"
              variants={mobileImageVariants}
              initial="hidden"
              animate="visible"
            >
              <img
                src="/partners/Hero Image.png"
                alt="Payment Ecosystem"
                className="w-[300px] h-[264px] object-contain"
              />
            </motion.div>

            {/* Partners Section */}
            <motion.div
              className="w-full mt-[50px] lg:mt-0 pt-4 lg:pt-6 border-t border-[#E2E8F0] flex flex-col justify-start items-center lg:items-start gap-6"
              variants={itemVariants}
            >
              {/* Partners Title */}
              <div className="opacity-80">
                <p className="text-[#45556C] text-sm font-medium leading-5 text-center lg:text-left">
                  Our Global Industry Partners
                </p>
              </div>

              {/* Partners Logos - Horizontal scroll on mobile */}
              <div className="w-full opacity-80 flex justify-between lg:justify-start items-center gap-4 lg:gap-8 xl:scale-90 3xl:scale-100 lg:origin-left overflow-x-auto pb-2 lg:pb-0">
                <img src="/partners/moneris.svg" alt="Moneris" className="h-[18px] lg:h-8 object-contain transition-all flex-shrink-0" />
                <img src="/partners/littlepay.svg" alt="littlepay" className="h-[18px] lg:h-8 object-contain transition-all flex-shrink-0" />
                <img src="/partners/idtech.svg" alt="IDTech" className="h-[18px] lg:h-8 object-contain transition-all flex-shrink-0" />
                <img src="/partners/auropay.png" alt="AuroPay" className="h-[18px] lg:h-8 object-contain transition-all flex-shrink-0" />
                <img src="/partners/aurotransit.png" alt="AuroTransit" className="h-[18px] lg:h-8 object-contain transition-all flex-shrink-0" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Segment - Hero Image (Desktop Only) */}
          <motion.div
            className="hidden lg:flex xl:w-[520px] 3xl:w-[700px] xl:h-[580px] 3xl:h-[680px] relative bg-[#F1F1F1] overflow-hidden xl:rounded-[32px] 3xl:rounded-[42px] items-center justify-center"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <img
              src="/partners/Hero Image.png"
              alt="Payment Ecosystem"
              className="xl:w-[440px] 3xl:w-[584px] xl:h-[375px] 3xl:h-[497px] object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
