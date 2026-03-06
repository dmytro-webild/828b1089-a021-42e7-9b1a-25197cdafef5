"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import FeatureBorderGlow from "@/components/sections/feature/featureBorderGlow/FeatureBorderGlow";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import Link from "next/link";
import { Users, Award, Clock, Globe, TrendingUp, ThumbsUp } from "lucide-react";

export default function AboutPage() {
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

      <div id="benefits" data-section="benefits">
        <FeatureBorderGlow
          features={[
            {
              icon: Users,
              title: "Client-Focused Approach",              description: "We listen to your business goals and create solutions that drive real results for your local business."},
            {
              icon: Award,
              title: "Award-Winning Design",              description: "Our websites have won industry recognition for combining beautiful design with high conversion rates."},
            {
              icon: Clock,
              title: "Fast Implementation",              description: "From initial consultation to launch, we work efficiently to get your website live and generating leads."},
          ]}
          title="Why Choose Maius Digital?"
          description="We're not just another web design agency. We specialize in helping local businesses succeed online."
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          metrics={[
            {
              id: "1",              value: "500",              title: "Websites Built",              description: "Professional sites for local businesses",              icon: Globe,
            },
            {
              id: "2",              value: "10k",              title: "Leads Generated",              description: "For our clients in the past year",              icon: TrendingUp,
            },
            {
              id: "3",              value: "98",              title: "% Client Satisfaction",              description: "Proven results and exceptional service",              icon: ThumbsUp,
            },
            {
              id: "4",              value: "12",              title: "Years Experience",              description: "Helping businesses grow online",              icon: Award,
            },
          ]}
          title="Our Impact"
          description="Real results for real local businesses"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="Maius Digital transformed our online presence. Within three months of launching our new website, we saw a 300% increase in qualified leads. Their team understood exactly what local businesses need to succeed online."
          rating={5}
          author="Sarah Mitchell, Owner - Mitchell's Hair Studio"
          avatars={[
            {
              src: "http://img.b2bpic.net/free-photo/young-woman-sitting-library_273609-15843.jpg",              alt: "Sarah Mitchell"},
            {
              src: "http://img.b2bpic.net/free-photo/young-handsome-man-office-center_1303-19604.jpg",              alt: "John Davis"},
            {
              src: "http://img.b2bpic.net/free-photo/skeptical-senior-businesswoman-looking-camera_1262-5592.jpg",              alt: "Emma Rodriguez"},
            {
              src: "http://img.b2bpic.net/free-photo/blond-businessman-sad-expression_1194-3902.jpg",              alt: "Mike Thompson"},
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
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