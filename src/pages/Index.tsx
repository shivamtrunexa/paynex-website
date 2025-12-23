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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Philosophy />
        <Operations />
        <Integration />
        <PaymentTypes />
        <Freedom />
        <Domains />
        <Products />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
