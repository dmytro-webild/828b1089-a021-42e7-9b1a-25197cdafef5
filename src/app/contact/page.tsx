"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import Link from "next/link";

export default function ContactPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="largeSmall"
      background="aurora"
      cardStyle="soft-shadow"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="solid"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Maius Digital"
          navItems={[
            { name: "Home", id: "/" },
            { name: "Services", id: "/services" },
            { name: "Portfolio", id: "/portfolio" },
            { name: "Pricing", id: "/pricing" },
            { name: "About", id: "/about" },
            { name: "Contact", id: "/contact" },
          ]}
          button={{
            text: "Get Started",            href: "#consultation"}}
          animateOnLoad={true}
        />
      </div>

      <div id="cta" data-section="cta">
        <ContactSplit
          tag="Ready to Grow?"
          title="Book Your Free Website Audit"
          description="Let us analyze your current online presence and show you exactly how a professional website can attract more customers to your business. No obligation, completely free."
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/indoor-shot-blonde-female-having-business-conversation-with-colleague_273609-4708.jpg?_wi=5"
          mediaAnimation="slide-up"
          mediaPosition="right"
          background={{
            variant: "sparkles-gradient"}}
          inputPlaceholder="Enter your email"
          buttonText="Get My Free Audit"
          termsText="We respect your privacy. You'll receive valuable insights via email."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Maius Digital"
          leftLink={{
            text: "Privacy Policy",            href: "#"}}
          rightLink={{
            text: "Terms of Service",            href: "#"}}
        />
      </div>
    </ThemeProvider>
  );
}