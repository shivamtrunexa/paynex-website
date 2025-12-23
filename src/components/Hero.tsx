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

  // Image animation - slides in from right
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

  return (
    <section className="w-full min-h-screen bg-white px-6 lg:px-12 2xl:px-[100px] overflow-hidden flex items-center">
      <div className="max-w-[1920px] mx-auto w-full">
        <div className="flex justify-between items-center gap-12">
          {/* Left Segment - Hero Content */}
          <motion.div
            className="flex-1 max-w-[761px] h-[680px] flex flex-col justify-between items-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Hero Text and Buttons */}
            <div className="w-full flex flex-col justify-start items-start py-9 gap-9">
              {/* Title */}
              <motion.div className="w-full" variants={itemVariants}>
                <h1 className="leading-[1.1] text-[80px] font-medium tracking-normal text-[#272729]" style={{ fontFamily: 'Instrument Sans' }}>
                  Powering Future of
                  <br />
                  <span className="text-[#1876F4]" style={{ fontFamily: 'Syne' }}>Next-Gen</span> Payments
                </h1>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                className="w-full text-[#45556C] text-xl leading-7"
                variants={itemVariants}
              >
                One secure, scalable platform to integrate, accept and
                <br />
                control every transaction globally
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex justify-start items-center gap-3"
                variants={itemVariants}
              >
                {/* Primary Button */}
                <button className="px-6 py-3.5 relative bg-[#1876F4] overflow-hidden rounded-[14px] flex justify-center items-center gap-2.5 group hover:shadow-[-3px_2px_7px_rgba(79,79,79,0.15)] transition-all duration-300 cursor-pointer">
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
                <button className="px-6 py-3.5 relative overflow-hidden rounded-[14px] border border-[#45556C] flex justify-center items-center gap-2.5 group hover:bg-gray-50 transition-colors">
                  <span className="text-center text-[#45556C] text-sm font-medium leading-5">
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

            {/* Partners Section */}
            <motion.div
              className="w-full pt-6 border-t border-[#E2E8F0] flex flex-col justify-start items-start gap-6"
              variants={itemVariants}
            >
              {/* Partners Title */}
              <div className="opacity-80">
                <p className="text-[#45556C] text-sm font-medium leading-5">
                  Our Global Industry Partners
                </p>
              </div>

              {/* Partners Logos */}
              <div className="w-full opacity-80 flex justify-start items-center gap-8">
                <img src="/partners/moneris.svg" alt="Moneris" className="h-8 object-contain transition-all" />
                <img src="/partners/littlepay.svg" alt="littlepay" className="h-8 object-contain transition-all" />
                <img src="/partners/idtech.svg" alt="IDTech" className="h-8 object-contain transition-all" />
                <img src="/partners/auropay.png" alt="AuroPay" className="h-8 object-contain transition-all" />
                <img src="/partners/aurotransit.png" alt="AuroTransit" className="h-8 object-contain transition-all" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Segment - Hero Image */}
          <motion.div
            className="w-[700px] h-[680px] relative bg-[#F1F1F1] overflow-hidden rounded-[42px]"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <img
              src="/partners/Hero Image.png"
              alt="Payment Ecosystem"
              className="w-[584px] h-[497px] absolute left-[58px] top-[92px] object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
