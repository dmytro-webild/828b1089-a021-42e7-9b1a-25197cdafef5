"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import FeatureBorderGlow from "@/components/sections/feature/featureBorderGlow/FeatureBorderGlow";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import { Zap, Shield, Smartphone, Gauge, Lock, Headphones, TrendingUp, Award } from "lucide-react";

const navItems = [
  { name: "Home", id: "/" },
  { name: "Services", id: "/services" },
  { name: "Portfolio", id: "/portfolio" },
  { name: "Pricing", id: "/pricing" },
  { name: "About", id: "/about" },
  { name: "Contact", id: "/contact" },
];

export default function ServicesPage() {
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

      <div id="services-overview" data-section="services-overview">
        <FeatureBorderGlow
          title="Our Website Design Services"
          description="Comprehensive web solutions tailored for local businesses looking to attract more customers and increase revenue through professional digital presence."
          features={[
            {
              icon: Zap,
              title: "Custom Website Design",              description:
                "Bespoke websites built specifically for your business needs, not template-based. Every pixel designed to convert visitors into customers."},
            {
              icon: Smartphone,
              title: "Mobile Optimization",              description:
                "Fully responsive design that looks perfect on all devices. With 60% of traffic from mobile, optimization is essential for success."},
            {
              icon: Gauge,
              title: "Performance Optimization",              description:
                "Lightning-fast loading times and SEO optimization to help your website rank higher in search results and attract organic traffic."},
            {
              icon: Lock,
              title: "Security & Compliance",              description:
                "SSL certificates, data protection, and compliance with industry standards to keep your business and customers safe online."},
            {
              icon: Headphones,
              title: "Ongoing Support",              description:
                "Dedicated support team available to help with updates, maintenance, and any technical issues that arise after launch."},
            {
              icon: Shield,
              title: "Lead Generation Focus",              description:
                "Strategic placement of call-to-action buttons and contact forms designed to capture leads and drive business inquiries."},
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="service-metrics" data-section="service-metrics">
        <MetricCardOne
          title="Why Choose Our Services"
          description="Industry-leading expertise and proven results"
          metrics={[
            {
              id: "1",              value: "3x",              title: "Average Traffic",              description: "Increase within first 6 months",              icon: TrendingUp,
            },
            {
              id: "2",              value: "300",              title: "Projects Complete",              description: "Successfully delivered this year",              icon: Award,
            },
            {
              id: "3",              value: "48h",              title: "Avg Response Time",              description: "Support available Monday-Friday",              icon: Headphones,
            },
            {
              id: "4",              value: "99.9",              title: "% Uptime",              description: "Guaranteed hosting reliability",              icon: Shield,
            },
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="services-cta" data-section="services-cta">
        <ContactSplit
          tag="Let's Get Started"
          title="Get a Custom Service Quote"
          description="Every business is unique. Tell us about your goals and we'll create a personalized service package designed to help you achieve maximum results and ROI."
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/indoor-shot-blonde-female-having-business-conversation-with-colleague_273609-4708.jpg?_wi=2"
          mediaAnimation="slide-up"
          mediaPosition="right"
          background={{
            variant: "sparkles-gradient"}}
          inputPlaceholder="Enter your email"
          buttonText="Get Custom Quote"
          termsText="We'll review your needs and send a personalized proposal within 24 hours."
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