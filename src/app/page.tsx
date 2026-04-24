import SiteHeader from "@/components/site-header";
import Hero from "@/components/hero";
import TrustBar from "@/components/trust-bar";
import WindowTypes from "@/components/window-types";
import WhyChooseUs from "@/components/why-choose-us";
import WhoWeServe from "@/components/whoweserve";
import SupplyProcess from "@/components/supplyprocess";
import QuoteCTA from "@/components/estimate-cta";
import ContactSection from "@/components/contact-section";
import SiteFooter from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        <Hero />
        <TrustBar />
        <WindowTypes />
        <WhyChooseUs />
        <WhoWeServe />
        <SupplyProcess />
        <QuoteCTA />
        <ContactSection />
      </main>

      <SiteFooter />
    </>
  );
}