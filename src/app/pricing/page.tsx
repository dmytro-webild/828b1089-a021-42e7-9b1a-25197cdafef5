"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import FeatureBorderGlow from "@/components/sections/feature/featureBorderGlow/FeatureBorderGlow";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import Link from "next/link";
import { Globe, Award, Clock } from "lucide-react";

const navItems = [
  { name: "Home", id: "/" },
  { name: "Services", id: "/services" },
  { name: "Portfolio", id: "/portfolio" },
  { name: "Pricing", id: "/pricing" },
  { name: "About", id: "/about" },
  { name: "Contact", id: "/contact" },
];

export default function PricingPage() {
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
          navItems={navItems}
          button={{
            text: "Get Started",            href: "#consultation"}}
          animateOnLoad={true}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <FeatureBorderGlow
          features={[
            {
              icon: Globe,
              title: "Starter Website - $500",              description: "Perfect for getting started online. Includes up to 5 pages, contact form, mobile-responsive design, and basic SEO optimization."},
            {
              icon: Award,
              title: "Professional Package - $800",              description: "Full-featured website with advanced functionality. Includes up to 15 pages, booking system, analytics integration, and comprehensive SEO setup."},
            {
              icon: Clock,
              title: "Enterprise Solution - $1200",              description: "Complete digital presence. Custom design, unlimited pages, e-commerce integration, advanced analytics, and ongoing support."},
          ]}
          title="Transparent Pricing That Fits Your Business"
          description="Choose the package that works best for your business goals. All plans include ongoing support and regular updates."
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureBorderGlow
          features={[
            {
              icon: Globe,
              title: "Mobile-First Design",              description: "Every website is optimized for mobile devices to reach customers wherever they are."},
            {
              icon: Award,
              title: "Lead Capture Forms",              description: "Strategic form placement that converts visitors into qualified leads for your business."},
            {
              icon: Clock,
              title: "24/7 Availability",              description: "Your website works around the clock, capturing leads and inquiries automatically."},
          ]}
          title="What's Included in Every Package"
          description="Professional features designed to help your business succeed online."
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="consultation" data-section="consultation">
        <ContactSplit
          tag="Ready to Grow?"
          title="Book Your Free Website Audit"
          description="Let us analyze your current online presence and show you exactly how a professional website can attract more customers to your business. No obligation, completely free."
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/indoor-shot-blonde-female-having-business-conversation-with-colleague_273609-4708.jpg?_wi=4"
          mediaAnimation="slide-up"
          mediaPosition="right"
          background={{ variant: "sparkles-gradient" }}
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