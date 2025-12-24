import { CircleCheck } from "lucide-react";
import { motion } from "framer-motion";

const Domains = () => {
  return (
    <section className="py-[80px] lg:py-[80px] bg-white">
      <div className="max-w-[1920px] w-full mx-auto px-6 lg:px-12 2xl:px-[320px] grid justify-center items-center">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#272729] xl:text-[48px] 3xl:text-[60px] font-medium xl:leading-[56px] 3xl:leading-[72px] mb-4 flex justify-center items-center">
            Domains <span className="text-[#1876F4] italic flex flex-col pr-4 pl-1">We</span> Support
          </h2>
          <p className="text-[#4A5565] text-base">
            From EV charging and transit to retail and unattended systems
            <br />
            Paynex supports diverse, high-scale payment environments.
          </p>
        </div>

        {/* Feature Cards Container */}
        <div className="xl:w-[1152px] 3xl:w-[1364px] mx-auto flex flex-col gap-6 w-full items-center justify-center">

          {/* Card 1: Perfectly Plugged-In Payments - Image Left */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0 }}
            className="bg-[#F8FAFC] rounded-[36px] border border-[#DBEDFF] overflow-hidden xl:w-[1152px] 3xl:w-[1364px] flex items-center justify-center group"
          >
            <div className="flex gap-0 xl:w-[1152px] 3xl:w-[1364px] pt-3 pb-3 pl-3 pr-3 rounded-[36px]">
              {/* Image */}
              <div className="relative h-[400px] lg:h-auto overflow-hidden rounded-[26px]">
                <img
                  src="/domains/1.png"
                  alt="EV Charging Payment"
                  className="w-[600px] h-full object-cover rounded-[26px] group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="xl:py-8 3xl:py-12 pl-[60px] pr-20 flex flex-col justify-center w-[752px] rounded-[26px]">
                {/* Badge */}
                <div className="inline-flex items-center justify-center px-4 py-2 bg-[rgba(48,165,78,0.15)] rounded-[20px] mb-6 self-start">
                  <span className="text-[#2E7D32] text-sm font-medium">EV Charging Solution</span>
                </div>

                {/* Title */}
                <h3 className="text-[#272729] xl:text-[36px] 3xl:text-[42px] font-medium xl:leading-[44px] 3xl:leading-[52px] mb-6">
                  Perfectly Plugged-In<br />Payments
                </h3>

                {/* Features */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CircleCheck className="w-5 h-5 text-[#30A54E]" absoluteStrokeWidth strokeWidth={2} />
                    </div>
                    <p className="text-[#4A5565] xl:text-sm 3xl:text-base xl:leading-5 3xl:leading-6">
                      Pre-Authorization Flow – Secure charge-up before charging ensures valid payment and automatic settlement post-session.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CircleCheck className="w-5 h-5 text-[#30A54E]" absoluteStrokeWidth strokeWidth={2} />
                    </div>
                    <p className="text-[#4A5565] xl:text-sm 3xl:text-base xl:leading-5 3xl:leading-6">
                      Smart Purchase Mode – Instant time-based retail transactions for public and commercial chargers.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CircleCheck className="w-5 h-5 text-[#30A54E]" absoluteStrokeWidth strokeWidth={2} />
                    </div>
                    <p className="text-[#4A5565] xl:text-sm 3xl:text-base xl:leading-5 3xl:leading-6">
                      Offline & Deferred Payments – Reliable operations even without network, with subsequent and deferred transaction settlement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Always Secure, Always Ready - Image Right */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#F8FAFC] rounded-[36px] border border-[#DBEDFF] overflow-hidden xl:w-[1152px] 3xl:w-[1364px] flex items-center justify-center group"
          >
            <div className="flex gap-0 xl:w-[1152px] 3xl:w-[1364px] pt-3 pb-3 pl-3 pr-3 rounded-[36px]">
              {/* Content */}
              <div className="xl:py-8 3xl:py-12 pl-[60px] pr-20 flex flex-col justify-center w-[752px] rounded-[26px]">
                {/* Badge */}
                <div className="inline-flex items-center justify-center px-4 py-2 bg-[#AD46FF]/10 rounded-[20px] mb-6 self-start">
                  <span className="text-[#AD46FF] text-sm font-medium">Unattended Payments</span>
                </div>

                {/* Title */}
                <h3 className="text-[#272729] xl:text-[36px] 3xl:text-[42px] font-medium xl:leading-[44px] 3xl:leading-[52px] mb-6">
                  Always Secure, Always<br />Ready
                </h3>

                {/* Features */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CircleCheck className="w-5 h-5 text-[#30A54E]" absoluteStrokeWidth strokeWidth={2} />
                    </div>
                    <p className="text-[#4A5565] xl:text-sm 3xl:text-base xl:leading-5 3xl:leading-6">
                      Unified Tokenization – E-acquirer-agnostic consistent payment credentials across unattended touchpoints.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CircleCheck className="w-5 h-5 text-[#30A54E]" absoluteStrokeWidth strokeWidth={2} />
                    </div>
                    <p className="text-[#4A5565] xl:text-sm 3xl:text-base xl:leading-5 3xl:leading-6">
                      Single Data Platform – Consolidates transactions, analytics and merchant controls on one seamless dashboard.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CircleCheck className="w-5 h-5 text-[#30A54E]" absoluteStrokeWidth strokeWidth={2} />
                    </div>
                    <p className="text-[#4A5565] xl:text-sm 3xl:text-base xl:leading-5 3xl:leading-6">
                      Advanced Fraud Control – AI-driven insurance minimizes time, detection and prevention of suspicious activity.
                    </p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-[400px] lg:h-auto overflow-hidden rounded-[26px]">
                <img
                  src="/domains/2.png"
                  alt="Unattended Payment Terminal"
                  className="w-[600px] h-full object-cover rounded-[26px] group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Card 3: Smart Payments, Smooth Journeys - Image Left */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#F8FAFC] rounded-[36px] border border-[#DBEDFF] overflow-hidden xl:w-[1152px] 3xl:w-[1364px] flex items-center justify-center group"
          >
            <div className="flex gap-0 xl:w-[1152px] 3xl:w-[1364px] pt-3 pb-3 pl-3 pr-3 rounded-[36px]">
              {/* Image */}
              <div className="relative h-[400px] lg:h-auto overflow-hidden rounded-[26px]">
                <img
                  src="/domains/3.png"
                  alt="Transit Payment Terminal"
                  className="w-[600px] h-full object-cover rounded-[26px] group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="xl:py-8 3xl:py-12 pl-[60px] pr-16 flex flex-col justify-center w-[752px] rounde -[26px]">
                {/* Badge */}
                <div className="inline-flex items-center justify-center px-4 py-2 bg-[#1876f4]/10 rounded-[20px] mb-6 self-start">
                  <span className="text-[#1876F4] text-sm font-medium">Mass Transit Solutions</span>
                </div>

                {/* Title */}
                <h3 className="text-[#272729] xl:text-[36px] 3xl:text-[42px] font-medium xl:leading-[44px] 3xl:leading-[52px] mb-6">
                  Smart Payments,<br />Smooth Journeys
                </h3>

                {/* Features */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CircleCheck className="w-5 h-5 text-[#30A54E]" absoluteStrokeWidth strokeWidth={2} />
                    </div>
                    <p className="text-[#4A5565] xl:text-sm 3xl:text-base xl:leading-5 3xl:leading-6">
                      Real-Time Payment Processing - Enables instant vehicle fare settlement, and reconciliation for high-volume transit transactions.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CircleCheck className="w-5 h-5 text-[#30A54E]" absoluteStrokeWidth strokeWidth={2} />
                    </div>
                    <p className="text-[#4A5565] xl:text-sm 3xl:text-base xl:leading-5 3xl:leading-6">
                      Seamless Integration with validators and back-office systems, connecting on-board devices and gates for complete visibility and control.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CircleCheck className="w-5 h-5 text-[#30A54E]" absoluteStrokeWidth strokeWidth={2} />
                    </div>
                    <p className="text-[#4A5565] xl:text-sm 3xl:text-base xl:leading-5 3xl:leading-6">
                      Defines & Offline Transaction Support – Ensures uninterrupted operations in low-connectivity areas, with automatic sync and settlement once online.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Domains;
