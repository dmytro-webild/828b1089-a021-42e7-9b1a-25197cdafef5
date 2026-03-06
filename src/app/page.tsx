"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroCarouselLogo from "@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo";
import FeatureBorderGlow from "@/components/sections/feature/featureBorderGlow/FeatureBorderGlow";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import BlogCardThree from "@/components/sections/blog/BlogCardThree";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import { Users, Award, Clock, Globe, TrendingUp, ThumbsUp } from "lucide-react";

const navItems = [
  { name: "Home", id: "/" },
  { name: "Services", id: "/services" },
  { name: "Portfolio", id: "/portfolio" },
  { name: "Pricing", id: "/pricing" },
  { name: "About", id: "/about" },
  { name: "Contact", id: "/contact" },
];

export default function HomePage() {
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
            text: "Get Your Website",
            href: "#consultation",
          }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="MAIUS DIGITAL"
          description="Turn Your Business Into a Lead-Generating Machine. We help local businesses get more customers with professional, high-converting websites."
          buttons={[
            {
              text: "Get Your Website",
              href: "#consultation",
            },
            {
              text: "Free Website Audit",
              href: "#contact",
            },
          ]}
          slides={[
            {
              imageSrc:
                "http://img.b2bpic.net/free-photo/businessman-near-glass-building-looking-camera_23-2148308621.jpg",
              imageAlt: "professional business owner working laptop office",
            },
            {
              imageSrc:
                "http://img.b2bpic.net/free-photo/colleagues-discussing-new-ideas-business-meeting_176420-5034.jpg",
              imageAlt: "digital marketing strategy team collaboration",
            },
            {
              imageSrc:
                "http://img.b2bpic.net/free-photo/male-analyst-doing-financial-research_482257-119498.jpg",
              imageAlt: "successful business owner smiling professional",
            },
          ]}
          autoplayDelay={5000}
          showDimOverlay={true}
        />
      </div>

      <div id="benefits" data-section="benefits">
        <FeatureBorderGlow
          title="Why Every Business Needs a Professional Website"
          description="In today's digital landscape, your website is your business's most powerful sales tool. It works 24/7 to attract customers and generate leads while you focus on serving them."
          features={[
            {
              icon: Users,
              title: "More Customers",
              description:
                "Attract qualified leads and convert them into loyal customers with a website optimized for results.",
            },
            {
              icon: Award,
              title: "Professional Online Presence",
              description:
                "Build credibility and trust with a modern, professional website that represents your brand perfectly.",
            },
            {
              icon: Clock,
              title: "24/7 Lead Generation",
              description:
                "Your website works around the clock, capturing leads and inquiries even while you sleep.",
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Our Impact"
          description="Real results for real local businesses"
          metrics={[
            {
              id: "1",
              value: "500",
              title: "Websites Built",
              description: "Professional sites for local businesses",
              icon: Globe,
            },
            {
              id: "2",
              value: "10k",
              title: "Leads Generated",
              description: "For our clients in the past year",
              icon: TrendingUp,
            },
            {
              id: "3",
              value: "98",
              title: "% Client Satisfaction",
              description: "Proven results and exceptional service",
              icon: ThumbsUp,
            },
            {
              id: "4",
              value: "12",
              title: "Years Experience",
              description: "Helping businesses grow online",
              icon: Award,
            },
          ]}
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
              src: "http://img.b2bpic.net/free-photo/young-woman-sitting-library_273609-15843.jpg",
              alt: "Sarah Mitchell",
            },
            {
              src: "http://img.b2bpic.net/free-photo/young-handsome-man-office-center_1303-19604.jpg",
              alt: "John Davis",
            },
            {
              src: "http://img.b2bpic.net/free-photo/skeptical-senior-businesswoman-looking-camera_1262-5592.jpg",
              alt: "Emma Rodriguez",
            },
            {
              src: "http://img.b2bpic.net/free-photo/blond-businessman-sad-expression_1194-3902.jpg",
              alt: "Mike Thompson",
            },
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="portfolio" data-section="portfolio">
        <BlogCardThree
          title="Portfolio Showcase"
          description="See how we've helped businesses in your industry succeed online"
          blogs={[
            {
              id: "1",
              category: "Nail Salon",
              title: "Professional Website for Nail Beauty Studio",
              excerpt:
                "High-converting site with online booking system that increased appointments by 250%",
              imageSrc:
                "http://img.b2bpic.net/free-photo/female-dentists-with-papers-professional-doctors-solve-problems-with-documents_169016-67254.jpg",
              imageAlt: "Nail salon interior design modern",
              authorName: "Maius Digital",
              authorAvatar:
                "http://img.b2bpic.net/free-vector/gradient-code-logo-template_23-2148825387.jpg",
              date: "2024",
            },
            {
              id: "2",
              category: "Contractors",
              title: "Contractor Website with Project Gallery",
              excerpt:
                "Showcases portfolio with lead generation forms that attracts quality construction clients",
              imageSrc:
                "http://img.b2bpic.net/free-vector/gradient-construction-landing-page-template_23-2149568012.jpg",
              imageAlt: "Contractor website design",
              authorName: "Maius Digital",
              authorAvatar:
                "http://img.b2bpic.net/free-vector/gradient-code-logo-template_23-2148825387.jpg",
              date: "2024",
            },
            {
              id: "3",
              category: "Restaurants",
              title: "Restaurant Website with Online Ordering",
              excerpt:
                "Modern design with menu showcase and reservation system boosting daily revenue",
              imageSrc:
                "http://img.b2bpic.net/free-psd/american-food-concept-web-template_23-2148485900.jpg",
              imageAlt: "Restaurant website design",
              authorName: "Maius Digital",
              authorAvatar:
                "http://img.b2bpic.net/free-vector/gradient-code-logo-template_23-2148825387.jpg",
              date: "2024",
            },
            {
              id: "4",
              category: "Beauty Services",
              title: "Beauty Services Website with Booking Calendar",
              excerpt:
                "Elegant design that integrates booking system and service showcase for maximum conversions",
              imageSrc:
                "http://img.b2bpic.net/free-psd/landing-page-template-spa-treatment_23-2148613084.jpg",
              imageAlt: "Beauty services website design",
              authorName: "Maius Digital",
              authorAvatar:
                "http://img.b2bpic.net/free-vector/gradient-code-logo-template_23-2148825387.jpg",
              date: "2024",
            },
            {
              id: "5",
              category: "Local Services",
              title: "Local Service Business Website",
              excerpt:
                "Complete online solution with service descriptions, testimonials, and consultation booking",
              imageSrc:
                "http://img.b2bpic.net/free-photo/co-workers-wearing-face-mask-work_23-2148727683.jpg",
              imageAlt: "Local services website design",
              authorName: "Maius Digital",
              authorAvatar:
                "http://img.b2bpic.net/free-vector/gradient-code-logo-template_23-2148825387.jpg",
              date: "2024",
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          carouselMode="buttons"
        />
      </div>

      <div id="consultation" data-section="consultation">
        <ContactSplit
          tag="Ready to Grow?"
          title="Book Your Free Website Audit"
          description="Let us analyze your current online presence and show you exactly how a professional website can attract more customers to your business. No obligation, completely free."
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/indoor-shot-blonde-female-having-business-conversation-with-colleague_273609-4708.jpg"
          mediaAnimation="slide-up"
          mediaPosition="right"
          background={{
            variant: "sparkles-gradient",
          }}
          inputPlaceholder="Enter your email"
          buttonText="Get My Free Audit"
          termsText="We respect your privacy. You'll receive valuable insights via email."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Maius Digital"
          leftLink={{
            text: "Privacy Policy",
            href: "#",
          }}
          rightLink={{
            text: "Terms of Service",
            href: "#",
          }}
        />
      </div>
    </ThemeProvider>
  );
}