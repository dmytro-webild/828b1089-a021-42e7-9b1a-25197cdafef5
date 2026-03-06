"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import BlogCardThree from "@/components/sections/blog/BlogCardThree";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import Link from "next/link";
import { Globe, ArrowRight } from "lucide-react";

const navItems = [
  { name: "Home", id: "/" },
  { name: "Services", id: "/services" },
  { name: "Portfolio", id: "/portfolio" },
  { name: "Pricing", id: "/pricing" },
  { name: "About", id: "/about" },
  { name: "Contact", id: "/contact" },
];

export default function PortfolioPage() {
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

      <div id="portfolio" data-section="portfolio">
        <BlogCardThree
          blogs={[
            {
              id: "1",
              category: "Nail Salon",
              title: "Professional Website for Nail Beauty Studio",
              excerpt: "High-converting site with online booking system that increased appointments by 250%",
              imageSrc: "http://img.b2bpic.net/free-photo/female-dentists-with-papers-professional-doctors-solve-problems-with-documents_169016-67254.jpg?_wi=2",
              imageAlt: "Nail salon interior design modern",
              authorName: "Maius Digital",
              authorAvatar: "http://img.b2bpic.net/free-vector/gradient-code-logo-template_23-2148825387.jpg",
              date: "2024",
            },
            {
              id: "2",
              category: "Contractors",
              title: "Contractor Website with Project Gallery",
              excerpt: "Showcases portfolio with lead generation forms that attracts quality construction clients",
              imageSrc: "http://img.b2bpic.net/free-vector/gradient-construction-landing-page-template_23-2149568012.jpg?_wi=2",
              imageAlt: "construction contractor working on project",
              authorName: "Maius Digital",
              authorAvatar: "http://img.b2bpic.net/free-vector/gradient-code-logo-template_23-2148825387.jpg",
              date: "2024",
            },
            {
              id: "3",
              category: "Restaurants",
              title: "Restaurant Website with Online Ordering",
              excerpt: "Modern design with menu showcase and reservation system boosting daily revenue",
              imageSrc: "http://img.b2bpic.net/free-psd/american-food-concept-web-template_23-2148485900.jpg?_wi=2",
              imageAlt: "modern restaurant interior design elegant",
              authorName: "Maius Digital",
              authorAvatar: "http://img.b2bpic.net/free-vector/gradient-code-logo-template_23-2148825387.jpg",
              date: "2024",
            },
            {
              id: "4",
              category: "Beauty Services",
              title: "Beauty Services Website with Booking Calendar",
              excerpt: "Elegant design that integrates booking system and service showcase for maximum conversions",
              imageSrc: "http://img.b2bpic.net/free-psd/landing-page-template-spa-treatment_23-2148613084.jpg?_wi=2",
              imageAlt: "beauty salon spa interior professional",
              authorName: "Maius Digital",
              authorAvatar: "http://img.b2bpic.net/free-vector/gradient-code-logo-template_23-2148825387.jpg",
              date: "2024",
            },
            {
              id: "5",
              category: "Local Services",
              title: "Local Service Business Website",
              excerpt: "Complete online solution with service descriptions, testimonials, and consultation booking",
              imageSrc: "http://img.b2bpic.net/free-photo/co-workers-wearing-face-mask-work_23-2148727683.jpg?_wi=2",
              imageAlt: "local business service professional team",
              authorName: "Maius Digital",
              authorAvatar: "http://img.b2bpic.net/free-vector/gradient-code-logo-template_23-2148825387.jpg",
              date: "2024",
            },
          ]}
          title="Portfolio Showcase"
          description="See how we've helped businesses in your industry succeed online"
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
          imageSrc="http://img.b2bpic.net/free-photo/indoor-shot-blonde-female-having-business-conversation-with-colleague_273609-4708.jpg?_wi=3"
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