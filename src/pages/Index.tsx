import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Philosophy from "@/components/Philosophy";
import Operations from "@/components/Operations";
import Integration from "@/components/Integration";
import PaymentTypes from "@/components/PaymentTypes";
import Freedom from "@/components/Freedom";
import Domains from "@/components/Domains";
import Products from "@/components/Products";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import RevealSection from "@/components/RevealSection";

const Index = () => {
  return (
    <SmoothScroll>
      <div className="min-h-screen">
        <Header />
        <main>
          {/* Hero section - Has internal staggered animations */}
          <Hero />

          {/* About section - Slide up */}
          <div id="about">
            <RevealSection direction="up" delay={0.1}>
              <About />
            </RevealSection>
          </div>

          {/* How It Works - Slide up */}
          <RevealSection direction="up" delay={0.1}>
            <HowItWorks />
          </RevealSection>

          {/* Philosophy - Slide up */}
          <RevealSection direction="up" delay={0.1}>
            <Philosophy />
          </RevealSection>

          {/* Operations - Slide up */}
          <div id="operations">
            <RevealSection direction="up" delay={0.1}>
              <Operations />
            </RevealSection>
          </div>

          {/* Integration - Slide up */}
          <RevealSection direction="up" delay={0.1}>
            <Integration />
          </RevealSection>

          {/* Payment Types - Slide up */}
          <RevealSection direction="up" delay={0.1}>
            <PaymentTypes />
          </RevealSection>

          {/* Freedom - Slide up */}
          <RevealSection direction="up" delay={0.1}>
            <Freedom />
          </RevealSection>

          {/* Domains - Slide up */}
          <div id="domains">
            <RevealSection direction="up" delay={0.1}>
              <Domains />
            </RevealSection>
          </div>

          {/* Products - Slide up */}
          <div id="products">
            <RevealSection direction="up" delay={0.1}>
              <Products />
            </RevealSection>
          </div>

          {/* CTA - Slide up */}
          <div id="contact">
            <RevealSection direction="up" delay={0.1}>
              <CTA />
            </RevealSection>
          </div>
        </main>

        {/* Footer - Fade in */}
        <RevealSection direction="fade" delay={0.1}>
          <Footer />
        </RevealSection>
      </div>
    </SmoothScroll>
  );
};

export default Index;
